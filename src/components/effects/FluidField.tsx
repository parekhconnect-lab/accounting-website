import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { fluidSimFrag } from './fluidSim.frag';
import { inkDisplayFrag } from './inkDisplay.frag';

const vertexShader = `
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

export default function FluidField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<{
    renderer: THREE.WebGLRenderer | null;
    animationId: number;
    mouse: { x: number; y: number; px: number; py: number };
    isActive: boolean;
  }>({
    renderer: null,
    animationId: 0,
    mouse: { x: -1, y: -1, px: -1, py: -1 },
    isActive: true,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const state = stateRef.current;
    state.isActive = true;

    const isMobile = window.innerWidth < 768;
    const simSize = isMobile ? 512 : Math.min(window.innerWidth, 2048);
    const simWidth = simSize;
    const simHeight = Math.floor(simSize * (window.innerHeight / window.innerWidth));

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
    });
    renderer.setPixelRatio(1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);
    state.renderer = renderer;

    const fboOptions: THREE.RenderTargetOptions = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType,
    };

    let fboA = new THREE.WebGLRenderTarget(simWidth, simHeight, fboOptions);
    let fboB = new THREE.WebGLRenderTarget(simWidth, simHeight, fboOptions);

    const fullscreenGeometry = new THREE.PlaneGeometry(2, 2);

    const fluidMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: fluidSimFrag,
      uniforms: {
        uPrevState: { value: null },
        iMouse: { value: new THREE.Vector4(-1, -1, -1, -1) },
        uResolution: { value: new THREE.Vector2(simWidth, simHeight) },
        uBrushSize: { value: 80.0 },
        uBrushStrength: { value: 0.5 },
        uFluidDecay: { value: 0.98 },
        uTrailLength: { value: 0.8 },
        uStopDecay: { value: 0.85 },
      },
    });

    const displayMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: inkDisplayFrag,
      uniforms: {
        u_fluid: { value: null },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
    });

    const fluidScene = new THREE.Scene();
    const fluidMesh = new THREE.Mesh(fullscreenGeometry, fluidMaterial);
    fluidScene.add(fluidMesh);

    const displayScene = new THREE.Scene();
    const displayMesh = new THREE.Mesh(fullscreenGeometry.clone(), displayMaterial);
    displayScene.add(displayMesh);

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = rect.height - (e.clientY - rect.top);
      state.mouse.px = state.mouse.x;
      state.mouse.py = state.mouse.y;
      state.mouse.x = (x / rect.width) * simWidth;
      state.mouse.y = (y / rect.height) * simHeight;
    };

    const onMouseLeave = () => {
      state.mouse.x = -1;
      state.mouse.y = -1;
      state.mouse.px = -1;
      state.mouse.py = -1;
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseLeave);

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      displayMaterial.uniforms.uResolution.value.set(w, h);
    };
    window.addEventListener('resize', onResize);

    const animate = () => {
      if (!state.isActive) return;
      state.animationId = requestAnimationFrame(animate);

      fluidMaterial.uniforms.iMouse.value.set(
        state.mouse.x,
        state.mouse.y,
        state.mouse.px,
        state.mouse.py
      );

      fluidMaterial.uniforms.uPrevState.value = fboA.texture;
      renderer.setRenderTarget(fboB);
      renderer.render(fluidScene, camera);

      const temp = fboA;
      fboA = fboB;
      fboB = temp;

      displayMaterial.uniforms.u_fluid.value = fboA.texture;
      renderer.setRenderTarget(null);
      renderer.render(displayScene, camera);
    };

    animate();

    return () => {
      state.isActive = false;
      cancelAnimationFrame(state.animationId);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
      fboA.dispose();
      fboB.dispose();
      fluidMaterial.dispose();
      displayMaterial.dispose();
      fullscreenGeometry.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'auto',
      }}
    />
  );
}
