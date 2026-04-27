/* eslint-disable react/no-unknown-property */
import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import './Dither.css';

const waveVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const waveFragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform float time;
  uniform vec2 resolution;
  uniform float waveSpeed;
  uniform float waveFrequency;
  uniform float waveAmplitude;
  uniform vec3 waveColor;
  uniform vec2 mousePos;
  uniform int enableMouseInteraction;
  uniform float mouseRadius;
  uniform float colorNum;
  uniform float pixelSize;

  vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

  float cnoise(vec2 P) {
    vec4 Pi = floor(P.xyxy) + vec4(0.0,0.0,1.0,1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0,0.0,1.0,1.0);
    Pi = mod289(Pi);
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = fract(i * (1.0/41.0)) * 2.0 - 1.0;
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x, gy.x);
    vec2 g10 = vec2(gx.y, gy.y);
    vec2 g01 = vec2(gx.z, gy.z);
    vec2 g11 = vec2(gx.w, gy.w);
    vec4 norm = taylorInvSqrt(vec4(dot(g00,g00), dot(g01,g01), dot(g10,g10), dot(g11,g11)));
    g00 *= norm.x; g01 *= norm.y; g10 *= norm.z; g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    return 2.3 * mix(n_x.x, n_x.y, fade_xy.y);
  }

  float fbm(vec2 p, float freq, float amp) {
    float value = 0.0;
    float a = 1.0;
    vec2 pos = p;
    for (int i = 0; i < 3; i++) { // Reduced octaves for mobile performance
      value += a * abs(cnoise(pos));
      pos *= freq;
      a *= amp;
    }
    return value;
  }

  float bayer8x8(vec2 uv) {
    int x = int(mod(uv.x, 8.0));
    int y = int(mod(uv.y, 8.0));
    int idx = y * 8 + x;
    if (idx == 0) return 0.0; if (idx == 1) return 48.0; if (idx == 2) return 12.0; if (idx == 3) return 60.0; if (idx == 4) return 3.0; if (idx == 5) return 51.0; if (idx == 6) return 15.0; if (idx == 7) return 63.0;
    if (idx == 8) return 32.0; if (idx == 9) return 16.0; if (idx == 10) return 44.0; if (idx == 11) return 28.0; if (idx == 12) return 35.0; if (idx == 13) return 19.0; if (idx == 14) return 47.0; if (idx == 15) return 31.0;
    if (idx == 16) return 8.0; if (idx == 17) return 56.0; if (idx == 18) return 4.0; if (idx == 19) return 52.0; if (idx == 20) return 11.0; if (idx == 21) return 59.0; if (idx == 22) return 7.0; if (idx == 23) return 55.0;
    if (idx == 24) return 40.0; if (idx == 25) return 24.0; if (idx == 26) return 36.0; if (idx == 27) return 20.0; if (idx == 28) return 43.0; if (idx == 29) return 27.0; if (idx == 30) return 39.0; if (idx == 31) return 23.0;
    if (idx == 32) return 2.0; if (idx == 33) return 50.0; if (idx == 34) return 14.0; if (idx == 35) return 62.0; if (idx == 36) return 1.0; if (idx == 37) return 49.0; if (idx == 38) return 13.0; if (idx == 39) return 61.0;
    if (idx == 40) return 34.0; if (idx == 41) return 18.0; if (idx == 42) return 46.0; if (idx == 43) return 30.0; if (idx == 44) return 33.0; if (idx == 45) return 17.0; if (idx == 46) return 45.0; if (idx == 47) return 29.0;
    if (idx == 48) return 10.0; if (idx == 49) return 58.0; if (idx == 50) return 6.0; if (idx == 51) return 54.0; if (idx == 52) return 9.0; if (idx == 53) return 57.0; if (idx == 54) return 5.0; if (idx == 55) return 53.0;
    if (idx == 56) return 42.0; if (idx == 57) return 26.0; if (idx == 58) return 38.0; if (idx == 59) return 22.0; if (idx == 60) return 41.0; if (idx == 61) return 25.0; if (idx == 62) return 37.0; return 21.0;
  }

  void main() {
    vec2 uvPixel = floor(gl_FragCoord.xy / pixelSize) * pixelSize;
    vec2 uv = uvPixel / resolution.xy;
    vec2 p = uv - 0.5;
    p.x *= resolution.x / resolution.y;

    float noiseBase = fbm(p + fbm(p - time * waveSpeed, waveFrequency, waveAmplitude), waveFrequency, waveAmplitude);

    if (enableMouseInteraction == 1) {
      vec2 mPos = (mousePos / resolution.xy - 0.5) * vec2(1.0, -1.0);
      mPos.x *= resolution.x / resolution.y;
      float d = length(p - mPos);
      float mouseEffect = 1.0 - smoothstep(0.0, mouseRadius, d);
      noiseBase += mouseEffect * 0.3;
    }

    vec3 color = mix(vec3(0.01), waveColor, noiseBase);
    float threshold = (bayer8x8(gl_FragCoord.xy / pixelSize) / 64.0) - 0.5;
    color += threshold * (1.0 / colorNum);
    color = floor(color * colorNum) / colorNum;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function DitheredWaves(props: any) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const { viewport, size, gl } = useThree();

  const uniforms = useMemo(() => ({
    time: { value: 0 },
    resolution: { value: new THREE.Vector2() },
    waveSpeed: { value: props.waveSpeed },
    waveFrequency: { value: props.waveFrequency },
    waveAmplitude: { value: props.waveAmplitude },
    waveColor: { value: new THREE.Color(...props.waveColor) },
    mousePos: { value: new THREE.Vector2(0, 0) },
    enableMouseInteraction: { value: props.enableMouseInteraction ? 1 : 0 },
    mouseRadius: { value: props.mouseRadius },
    colorNum: { value: props.colorNum },
    pixelSize: { value: props.pixelSize }
  }), []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.set(e.clientX, e.clientY);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseRef.current.set(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    const dpr = Math.min(window.devicePixelRatio, 1.5); // Limit DPR for performance
    uniforms.resolution.value.set(size.width * dpr, size.height * dpr);
  }, [size, gl, uniforms]);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      if (!props.disableAnimation) {
        uniforms.time.value = clock.getElapsedTime();
      }
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      uniforms.mousePos.value.set(mouseRef.current.x * dpr, mouseRef.current.y * dpr);
    }
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={waveVertexShader}
        fragmentShader={waveFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function Dither(props: any) {
  return (
    <div className="dither-wrapper">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={1} // Low fixed DPR for maximum performance on mobile
        gl={{ 
            antialias: false,
            powerPreference: "high-performance",
            stencil: false,
            depth: false
        }}
      >
        <DitheredWaves {...props} />
      </Canvas>
    </div>
  );
}
