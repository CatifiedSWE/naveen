
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || window.innerWidth < 768) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Balanced performance
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    const geometry = new THREE.PlaneGeometry(12, 12, 64, 64);
    
    // Enhanced Prismatic Shader with Medium Chromatic Dispersion
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uColorR: { value: new THREE.Color('#ff0055') },
        uColorG: { value: new THREE.Color('#00ffaa') },
        uColorB: { value: new THREE.Color('#0055ff') },
      },
      vertexShader: `
        varying vec2 vUv;
        uniform float uTime;
        
        void main() {
          vUv = uv;
          vec3 pos = position;
          
          // Subtle wave distortion for light refraction feel
          float wave = sin(pos.x * 2.0 + uTime * 0.3) * cos(pos.y * 2.0 + uTime * 0.2);
          pos.z += wave * 0.3;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec3 uColorR;
        uniform vec3 uColorG;
        uniform vec3 uColorB;
        
        // Improved noise function for organic refraction
        float noise(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        
        float smoothNoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          
          float a = noise(i);
          float b = noise(i + vec2(1.0, 0.0));
          float c = noise(i + vec2(0.0, 1.0));
          float d = noise(i + vec2(1.0, 1.0));
          
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }
        
        void main() {
          vec2 uv = vUv;
          vec2 center = vec2(0.5, 0.5);
          
          // Slow ambient movement
          float timeScale = uTime * 0.08;
          
          // Multi-octave noise for realistic light dispersion
          float noise1 = smoothNoise(uv * 3.0 + timeScale);
          float noise2 = smoothNoise(uv * 6.0 - timeScale * 0.5) * 0.5;
          float noise3 = smoothNoise(uv * 12.0 + timeScale * 0.3) * 0.25;
          float combinedNoise = noise1 + noise2 + noise3;
          
          // Chromatic dispersion - medium intensity
          float dispersion = 0.025; // Medium RGB split
          vec2 distortion = vec2(
            sin(uv.y * 8.0 + timeScale) * combinedNoise,
            cos(uv.x * 8.0 + timeScale) * combinedNoise
          ) * dispersion;
          
          // Sample RGB channels at different offsets (prismatic refraction)
          float r = smoothNoise(uv + distortion * 1.2 + vec2(timeScale * 0.1, 0.0));
          float g = smoothNoise(uv + distortion * 0.8 + vec2(0.0, timeScale * 0.1));
          float b = smoothNoise(uv - distortion * 1.0 - vec2(timeScale * 0.1, timeScale * 0.1));
          
          // Distance from center for radial gradient
          float dist = distance(uv, center);
          float radialGradient = 1.0 - smoothstep(0.0, 1.2, dist);
          
          // Create prismatic color with light refraction feel
          vec3 prismColor = vec3(
            r * uColorR.r * 0.8,
            g * uColorG.g * 0.6,
            b * uColorB.b * 0.7
          );
          
          // Blend with deep indigo/magenta base
          vec3 baseColor = mix(
            vec3(0.05, 0.02, 0.15), // Deep indigo
            vec3(0.12, 0.02, 0.08), // Magenta tint
            combinedNoise
          );
          
          vec3 finalColor = mix(baseColor, prismColor, radialGradient * 0.7);
          
          // Subtle pulsing bloom
          float bloom = sin(timeScale * 0.5) * 0.1 + 0.9;
          finalColor *= bloom;
          
          gl_FragColor = vec4(finalColor, 0.85);
        }
      `,
      transparent: true,
    });

    const plane = new THREE.Mesh(geometry, material);
    plane.position.z = -3;
    scene.add(plane);

    // Animation loop
    let animationId: number;
    const animate = (time: number) => {
      material.uniforms.uTime.value = time * 0.001;
      
      // Very slow rotation for ambient movement
      plane.rotation.z = Math.sin(time * 0.0002) * 0.15;
      plane.rotation.x = Math.cos(time * 0.0003) * 0.1;
      
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10 pointer-events-none opacity-50 blur-[140px]"
      style={{ filter: 'blur(140px) contrast(1.2) brightness(1.1)' }}
    />
  );
};

export default HeroBackground;
