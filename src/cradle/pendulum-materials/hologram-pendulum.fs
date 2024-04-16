precision highp float;

uniform float uTime;
uniform vec3 cameraPosition;

varying vec3 vPosition;
varying vec3 vNormal;

void main() {
    vec3 normal = normalize(vNormal);
    if (!gl_FrontFacing) {
        normal *= -1.;
    }

    float stripes = mod(vPosition.y * 30. - uTime * .001, 1.);
    stripes = pow(stripes, 3.);

    vec3 viewDirection = normalize(vPosition - cameraPosition);
    float fresnel = dot(viewDirection, normal) + 1.;
    fresnel = pow(fresnel, 2.);

    float falloff = smoothstep(2., 0., fresnel);

    float holographic = stripes * fresnel;
    holographic *= fresnel * 2.;
    holographic *= falloff;

    gl_FragColor = vec4(.25, .9, .75, holographic);
}
