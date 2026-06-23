export const fluidSimFrag = `
precision mediump float;

uniform sampler2D uPrevState;
uniform vec4 iMouse;
uniform vec2 uResolution;
uniform float uBrushSize;
uniform float uBrushStrength;
uniform float uFluidDecay;
uniform float uTrailLength;
uniform float uStopDecay;

varying vec2 v_uv;

vec3 encode(vec3 v) {
  return v / 0.8 + 0.5;
}

vec3 decode(vec3 v) {
  return (v - 0.5) * 0.8;
}

float lineDistance(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float len2 = dot(ab, ab);
  float t = clamp(dot(p - a, ab) / len2, 0.0, 1.0);
  return length(p - (a + ab * t));
}

void main() {
  vec2 pixel = v_uv * uResolution;
  vec2 texel = 1.0 / uResolution;

  vec3 prev = decode(texture2D(uPrevState, v_uv).rgb);
  vec2 vel = prev.rg;
  float ink = prev.b;

  vec2 px = vec2(texel.x, 0.0);
  vec2 nx = vec2(-texel.x, 0.0);
  vec2 py = vec2(0.0, texel.y);
  vec2 ny = vec2(0.0, -texel.y);

  vec3 t1 = decode(texture2D(uPrevState, v_uv + px).rgb);
  vec3 t2 = decode(texture2D(uPrevState, v_uv + nx).rgb);
  vec3 t3 = decode(texture2D(uPrevState, v_uv + py).rgb);
  vec3 t4 = decode(texture2D(uPrevState, v_uv + ny).rgb);

  vec2 avgVel = (t1.rg + t2.rg + t3.rg + t4.rg) * 0.25;
  float avgInk = (t1.b + t2.b + t3.b + t4.b) * 0.25;

  vel = mix(vel, avgVel, 0.18);
  ink = mix(ink, avgInk, 0.18);

  vec2 advectUV = v_uv - vel * texel * 1.2;
  vec3 advected = decode(texture2D(uPrevState, advectUV).rgb);
  vel = mix(vel, advected.rg, 0.12);
  ink = mix(ink, advected.b, 0.12);

  vel *= uFluidDecay;
  ink *= uTrailLength;

  vec2 mousePos = iMouse.xy;
  vec2 mousePrev = iMouse.zw;

  if (mousePos.x < 0.0) {
    gl_FragColor = vec4(encode(vec3(vel, ink)), 1.0);
    return;
  }

  vec2 motion = mousePos - mousePrev;
  float motionLen = length(motion);
  vec2 motionDir = motionLen > 0.0 ? motion / motionLen : vec2(0.0);

  if (motionLen > 6.0) {
    motionLen = 6.0;
  }

  float qLine = lineDistance(pixel, mousePos, mousePrev);
  float qPoint = distance(pixel, mousePos);
  float q = mix(qLine, qPoint, 0.4);

  float brushSizeFactor = 2.2e-4 / uBrushSize;
  float brushMask = exp(-q * q * brushSizeFactor);
  float strengthFactor = 0.03 * uBrushStrength;

  vel += motionDir * motionLen * brushMask * strengthFactor * 5.0;
  ink += brushMask * strengthFactor * 2.0;

  float idleFactor = smoothstep(0.0, 1.0, motionLen);
  vel *= mix(uStopDecay, 1.0, idleFactor);

  vel = clamp(vel, -0.4, 0.4);
  ink = clamp(ink, -0.4, 0.4);

  gl_FragColor = vec4(encode(vec3(vel, ink)), 1.0);
}
`;
