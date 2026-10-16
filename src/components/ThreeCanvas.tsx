import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ThemeMode } from '../types';

interface ThreeCanvasProps {
  theme: ThemeMode;
  className?: string;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ theme, className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isLight = theme === 'light';
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 560;

    // 1. Transparent WebGL Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isLight ? 1.08 : 1.2;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. Ambient Cosmic Star Dust
    const starCount = 1200;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const radius = 2.0 + Math.random() * 8.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = radius * Math.cos(phi);

      const r = Math.random();
      if (isLight) {
        if (r > 0.5) {
          // Deep Midnight Charcoal & Slate
          starColors[i * 3] = 0.12;
          starColors[i * 3 + 1] = 0.16;
          starColors[i * 3 + 2] = 0.24;
        } else if (r > 0.25) {
          // Deep Sapphire / Royal Blue
          starColors[i * 3] = 0.18;
          starColors[i * 3 + 1] = 0.38;
          starColors[i * 3 + 2] = 0.82;
        } else if (r > 0.1) {
          // Deep Emerald / Forest Green
          starColors[i * 3] = 0.08;
          starColors[i * 3 + 1] = 0.5;
          starColors[i * 3 + 2] = 0.25;
        } else {
          // Vivid Violet
          starColors[i * 3] = 0.45;
          starColors[i * 3 + 1] = 0.2;
          starColors[i * 3 + 2] = 0.75;
        }
      } else {
        if (r > 0.6) {
          // Neon Lime (#C6FF4D)
          starColors[i * 3] = 0.77;
          starColors[i * 3 + 1] = 1.0;
          starColors[i * 3 + 2] = 0.3;
        } else if (r > 0.3) {
          // Electric Blue / Cyan
          starColors[i * 3] = 0.3;
          starColors[i * 3 + 1] = 0.65;
          starColors[i * 3 + 2] = 1.0;
        } else {
          // Star white
          starColors[i * 3] = 0.95;
          starColors[i * 3 + 1] = 0.95;
          starColors[i * 3 + 2] = 1.0;
        }
      }
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: isLight ? 0.052 : 0.045,
      vertexColors: true,
      transparent: true,
      opacity: isLight ? 0.75 : 0.75,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending
    });

    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // 3. The Edge Matrix Structure
    const matrixGroup = new THREE.Group();
    // Responsive scale
    const isMobile = width < 768;
    const initialScale = isMobile ? 0.72 : 0.92;
    matrixGroup.scale.set(initialScale, initialScale, initialScale);
    scene.add(matrixGroup);

    // 3a. Geodesic Polyhedron Wireframe
    const icosaGeo = new THREE.IcosahedronGeometry(2.35, 2);
    const wireframeGeo = new THREE.WireframeGeometry(icosaGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: isLight ? 0x2563eb : 0xC6FF4D,
      transparent: true,
      opacity: isLight ? 0.8 : 0.8,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending
    });
    const wireLines = new THREE.LineSegments(wireframeGeo, wireMat);
    matrixGroup.add(wireLines);

    // 3b. Semi-reflective Translucent Facet Mesh (Diamond Glass in light mode)
    const facetMat = new THREE.MeshPhysicalMaterial({
      color: isLight ? 0xffffff : 0x0a101f,
      metalness: isLight ? 0.02 : 0.9,
      roughness: isLight ? 0.04 : 0.2,
      transmission: isLight ? 0.96 : 0.6,
      transparent: true,
      opacity: isLight ? 0.1 : 0.4,
      reflectivity: 1.0,
      ior: 1.5
    });
    const facetMesh = new THREE.Mesh(icosaGeo, facetMat);
    matrixGroup.add(facetMesh);

    // 3c. Glowing Vertex Nodes
    const posAttr = icosaGeo.attributes.position;
    const vertexMap = new Map<string, THREE.Vector3>();

    for (let i = 0; i < posAttr.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(posAttr, i);
      const key = `${v.x.toFixed(2)},${v.y.toFixed(2)},${v.z.toFixed(2)}`;
      if (!vertexMap.has(key)) vertexMap.set(key, v);
    }

    const nodeGeo = new THREE.SphereGeometry(0.048, 8, 8);
    const nodeLime = new THREE.MeshStandardMaterial({
      color: isLight ? 0x16a34a : 0xC6FF4D,
      emissive: isLight ? 0x15803d : 0xC6FF4D,
      emissiveIntensity: isLight ? 1.6 : 2.2,
      roughness: 0.1
    });
    const nodeCyan = new THREE.MeshStandardMaterial({
      color: isLight ? 0x4338ca : 0x38bdf8,
      emissive: isLight ? 0x3730a3 : 0x0284c7,
      emissiveIntensity: isLight ? 1.4 : 2.0,
      roughness: 0.1
    });

    let nIdx = 0;
    vertexMap.forEach((v) => {
      const node = new THREE.Mesh(nodeGeo, nIdx % 2 === 0 ? nodeLime : nodeCyan);
      node.position.copy(v);
      matrixGroup.add(node);
      nIdx++;
    });

    // 3d. Inner Core Sphere: High-End Iridescent Pearl in Light Mode, Obsidian Chrome in Dark Mode
    const innerSphereGeo = new THREE.SphereGeometry(1.6, 48, 48);
    const innerSphereMat = isLight
      ? new THREE.MeshPhysicalMaterial({
          color: 0xfcfdfd,
          metalness: 0.15,
          roughness: 0.08,
          clearcoat: 1.0,
          clearcoatRoughness: 0.04,
          reflectivity: 1.0,
          emissive: 0xf1f5f9,
          emissiveIntensity: 0.25,
          ior: 1.55
        })
      : new THREE.MeshStandardMaterial({
          color: 0x0f172a,
          metalness: 0.95,
          roughness: 0.2,
          emissive: 0x0d1527,
          emissiveIntensity: 0.45
        });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    matrixGroup.add(innerSphere);

    // 3e. Central Pulsing Octahedron
    const coreGeo = new THREE.OctahedronGeometry(0.85, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: isLight ? 0x2563eb : 0xC6FF4D,
      emissive: isLight ? 0x1d4ed8 : 0xC6FF4D,
      emissiveIntensity: isLight ? 1.3 : 1.8,
      wireframe: true
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    matrixGroup.add(coreMesh);

    // 3f. Dual Orbital Quantum Torus Rings
    const ring1Geo = new THREE.TorusGeometry(3.0, 0.02, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: isLight ? 0x7c3aed : 0x8B5CF6,
      emissive: isLight ? 0x6d28d9 : 0x8B5CF6,
      emissiveIntensity: isLight ? 1.2 : 1.5,
      roughness: 0.2
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 5;
    matrixGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.3, 0.018, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: isLight ? 0x0284c7 : 0x38bdf8,
      emissive: isLight ? 0x0369a1 : 0x0284c7,
      emissiveIntensity: isLight ? 1.2 : 1.6,
      roughness: 0.2
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 6;
    matrixGroup.add(ring2);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isLight ? 0.9 : 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, isLight ? 2.8 : 2.2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const limeLight = new THREE.PointLight(isLight ? 0x16a34a : 0xC6FF4D, 3.0, 15);
    limeLight.position.set(-3, -3, 3);
    scene.add(limeLight);

    const cyanLight = new THREE.PointLight(isLight ? 0x0284c7 : 0x38bdf8, 3.0, 15);
    cyanLight.position.set(3, 3, 3);
    scene.add(cyanLight);

    // 5. Interactive Drag & Parallax (supports touch and mouse)
    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;
    let autoRotY = 0;
    let autoRotX = 0;

    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevPointerX;
        const deltaY = e.clientY - prevPointerY;
        autoRotY += deltaX * 0.006;
        autoRotX += deltaY * 0.006;
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    // 6. Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 560;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      const mobileNow = width < 768;
      const scaleNow = mobileNow ? 0.72 : 0.92;
      matrixGroup.scale.set(scaleNow, scaleNow, scaleNow);
    };

    window.addEventListener('resize', handleResize);

    // 7. Render Loop
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      const delta = clock.getDelta();

      // Slow autonomous rotation
      matrixGroup.rotation.y += 0.22 * delta;
      matrixGroup.rotation.x += autoRotX * 0.08;
      matrixGroup.rotation.y += autoRotY * 0.08;

      autoRotX *= 0.94;
      autoRotY *= 0.94;

      // Pulse Central Octahedron
      const scale = 1.0 + Math.sin(clock.getElapsedTime() * 2.2) * 0.08;
      coreMesh.scale.set(scale, scale, scale);
      coreMesh.rotation.y -= 0.5 * delta;

      // Rotate Dual Gyro Rings
      ring1.rotation.z += 0.3 * delta;
      ring2.rotation.z -= 0.4 * delta;

      // Slowly rotate background dust
      stars.rotation.y += 0.02 * delta;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('resize', handleResize);

      // Clean up Three.js WebGL resources
      starGeo.dispose();
      starMat.dispose();
      icosaGeo.dispose();
      wireframeGeo.dispose();
      wireMat.dispose();
      facetMat.dispose();
      nodeGeo.dispose();
      nodeLime.dispose();
      nodeCyan.dispose();
      innerSphereGeo.dispose();
      innerSphereMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [theme]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full cursor-grab active:cursor-grabbing select-none overflow-hidden touch-none ${className}`}
      style={{ outline: 'none' }}
    />
  );
};
