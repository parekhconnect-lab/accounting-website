export const inkDisplayFrag = `
precision mediump float;

uniform sampler2D u_fluid;
uniform vec2 uResolution;

varying vec2 v_uv;

void main() {
  vec3 fluidState = (texture2D(u_fluid, v_uv).rgb - 0.5) * 0.8;
  float fluidInk = fluidState.z;

  vec3 bgColor = vec3(0.039, 0.086, 0.157);
  vec3 inkColor = vec3(0.973, 0.980, 0.988);

  vec3 finalColor = mix(bgColor, inkColor, clamp(fluidInk, 0.0, 1.0));

  gl_FragColor = vec4(finalColor, 1.0);
}
`;
