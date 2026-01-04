
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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(10, 10, 32, 32);
    
    // Custom Shader for soft prismatic bleed
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color('#220055') },
        uColor2: { value: new THREE.Color('#003366') },
        uColor3: { value: new THREE.Color('#440022') }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;

        void main() {
          float noise = sin(vUv.x * 5.0 + uTime * 0.2) * cos(vUv.y * 5.0 + uTime * 0.3);
          vec3 color = mix(uColor1, uColor2, vUv.x + noise * 0.5);
          color = mix(color, uColor3, vUv.y - noise * 0.3);
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      transparent: true,
    });

    const plane = new THREE.Mesh(geometry, material);
    plane.position.z = -5;
    scene.add(plane);

    const animate = (time: number) => {
      material.uniforms.uTime.value = time * 0.001;
      plane.rotation.z = Math.sin(time * 0.0001) * 0.1;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10 pointer-events-none opacity-40 blur-[120px]"
    />
  );
};

export default HeroBackground;
