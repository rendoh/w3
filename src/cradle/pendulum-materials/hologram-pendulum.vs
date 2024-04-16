uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform float uGlitchStrength;

attribute vec3 position;
attribute vec3 normal;
attribute vec3 cameraPosition;

varying vec3 vPosition;
varying vec3 vNormal;

float random2D(vec2 value) {
    return fract(sin(dot(value.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    vec3 pos = position;
    pos.x += (random2D(pos.xz + uTime) - .5) * uGlitchStrength;
    pos.z += (random2D(pos.xz + uTime) - .5) * uGlitchStrength;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    // vec4 p = modelMatrix * vec4(position, 0.);
    // vPosition = p.xyz;
    vPosition = position;

    vec4 modelNormal = modelMatrix * vec4(normal, 0.);
    vNormal = modelNormal.xyz;
}
