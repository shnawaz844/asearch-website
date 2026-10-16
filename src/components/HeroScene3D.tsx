import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ThemeMode } from '../types';

interface HeroScene3DProps {
  theme: ThemeMode;
}

export const HeroScene3D: React.FC<HeroScene3DProps> = ({ theme }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isLight = theme === 'light';
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene setup with transparent background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isLight ? 1.4 : 1.25;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. Cosmic Starfield covering the entire hero background
    const starCount = 1800;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      // Wide spread across the whole screen and depth
      starPositions[i * 3] = (Math.random() - 0.5) * 36;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 22;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 24 - 2;

      const rand = Math.random();
      if (isLight) {
        if (rand > 0.75) {
          // Vibrant Lime accent
          starColors[i * 3] = 0.4;
          starColors[i * 3 + 1] = 0.65;
          starColors[i * 3 + 2] = 0.1;
        } else if (rand > 0.45) {
          // Deep Cyan/Indigo
          starColors[i * 3] = 0.25;
          starColors[i * 3 + 1] = 0.45;
          starColors[i * 3 + 2] = 0.85;
        } else {
          // Soft slate dust
          starColors[i * 3] = 0.6;
          starColors[i * 3 + 1] = 0.65;
          starColors[i * 3 + 2] = 0.75;
        }
      } else {
        if (rand > 0.75) {
          // Neon Lime accent stars
          starColors[i * 3] = 0.77;
          starColors[i * 3 + 1] = 1.0;
          starColors[i * 3 + 2] = 0.3;
        } else if (rand > 0.45) {
          // Electric Cyan/Blue stars
          starColors[i * 3] = 0.3;
          starColors[i * 3 + 1] = 0.75;
          starColors[i * 3 + 2] = 1.0;
        } else if (rand > 0.25) {
          // Electric Violet stars
          starColors[i * 3] = 0.65;
          starColors[i * 3 + 1] = 0.4;
          starColors[i * 3 + 2] = 1.0;
        } else {
          // White diamond stars
          starColors[i * 3] = 0.95;
          starColors[i * 3 + 1] = 0.97;
          starColors[i * 3 + 2] = 1.0;
        }
      }
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: isLight ? 0.055 : 0.05,
      vertexColors: true,
      transparent: true,
      opacity: isLight ? 0.65 : 0.85,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending
    });

    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // 2b. 3D Floating Particle-Like Text (Digital Marketing Domain)
    const marketingTerms = [
      { text: 'SEO', accent: true },
      { text: 'MARKETING', accent: false },
      { text: 'BRANDING', accent: true },
      { text: 'AI-SEO', accent: true },
      { text: 'PPC', accent: false },
      { text: 'ROAS 3.8x', accent: true },
      { text: 'GROWTH', accent: true },
      { text: 'ANALYTICS', accent: false },
      { text: 'CONTENT', accent: false },
      { text: 'CONVERSION', accent: true },
      { text: 'CREATIVE', accent: false },
      { text: 'SEARCHGPT', accent: true },
      { text: 'AUTOMATION', accent: false },
      { text: 'KEYWORDS', accent: false },
      { text: 'LEADS', accent: true },
      { text: 'STRATEGY', accent: false },
      { text: 'RANKINGS', accent: true },
      { text: 'PERFORMANCE', accent: false },
      { text: 'GOOGLE ADS', accent: true },
      { text: 'ECOSYSTEM', accent: false },
      { text: 'DATA', accent: false },
      { text: 'TRAFFIC', accent: true },
      { text: 'UX / UI', accent: false },
      { text: 'TARGETING', accent: false },
      { text: 'MEDIA', accent: false },
      { text: 'REVENUE', accent: true }
    ];

    const textParticlesGroup = new THREE.Group();
    scene.add(textParticlesGroup);

    interface TextParticleItem {
      sprite: THREE.Sprite;
      texture: THREE.CanvasTexture;
      material: THREE.SpriteMaterial;
      baseX: number;
      baseY: number;
      baseZ: number;
      speed: number;
      floatOffset: number;
      amp: number;
    }

    const textParticleItems: TextParticleItem[] = [];

    // Distinct palette for particles matching theme
    const darkColors = [
      { color: '#C6FF4D', glow: 'rgba(198, 255, 77, 0.8)' }, // Neon Lime
      { color: '#38BDF8', glow: 'rgba(56, 189, 248, 0.8)' },  // Electric Cyan
      { color: '#A78BFA', glow: 'rgba(167, 139, 250, 0.8)' }, // Electric Violet
      { color: '#F8FAFC', glow: 'rgba(248, 250, 252, 0.6)' }  // Diamond White
    ];

    const lightColors = [
      { color: '#15803D', glow: 'rgba(21, 128, 61, 0.7)' },  // Emerald
      { color: '#4338CA', glow: 'rgba(67, 56, 202, 0.7)' },  // Indigo
      { color: '#0284C7', glow: 'rgba(2, 132, 199, 0.7)' },  // Cyan
      { color: '#334155', glow: 'rgba(51, 65, 85, 0.5)' }    // Slate
    ];

    const palette = isLight ? lightColors : darkColors;

    marketingTerms.forEach((item, index) => {
      const colPair = palette[index % palette.length];
      const canvas = document.createElement('canvas');
      canvas.width = 320;
      canvas.height = 76;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Micro particle pill capsule
      const r = 18;
      const x = 8;
      const y = 8;
      const w = canvas.width - 16;
      const h = canvas.height - 16;

      ctx.beginPath();
      ctx.roundRect(x, y, w, h, r);
      ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.75)' : 'rgba(11, 15, 25, 0.65)';
      ctx.fill();
      ctx.strokeStyle = colPair.color;
      ctx.lineWidth = item.accent ? 2 : 1.2;
      ctx.shadowColor = colPair.glow;
      ctx.shadowBlur = item.accent ? 14 : 7;
      ctx.stroke();

      // Glowing particle node
      ctx.beginPath();
      ctx.arc(32, 38, item.accent ? 5.5 : 4, 0, Math.PI * 2);
      ctx.fillStyle = colPair.color;
      ctx.shadowColor = colPair.glow;
      ctx.shadowBlur = 12;
      ctx.fill();

      // Digital marketing text
      ctx.font = '700 23px "Space Grotesk", "JetBrains Mono", monospace, sans-serif';
      ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
      ctx.shadowColor = colPair.glow;
      ctx.shadowBlur = item.accent ? 8 : 4;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(item.text, 50, 38);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;

      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: isLight ? 0.8 : 0.85,
        blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
        depthWrite: false
      });

      const sprite = new THREE.Sprite(material);

      // Small particle scale in 3D world units
      const baseScale = item.accent ? 0.95 : 0.82;
      sprite.scale.set(baseScale * 1.5, baseScale * 0.36, 1);

      // Distribute particle text across hero volume
      // Left side, right side around 3D sculpture, and atmospheric depth
      const angle = (index / marketingTerms.length) * Math.PI * 2;
      const radius = 3.5 + Math.random() * 5.5;
      const posX = (Math.cos(angle) * radius) + (Math.random() - 0.5) * 4;
      const posY = (Math.sin(angle) * (radius * 0.55)) + (Math.random() - 0.5) * 2;
      const posZ = (Math.random() - 0.5) * 6 - 0.5;

      sprite.position.set(posX, posY, posZ);
      textParticlesGroup.add(sprite);

      textParticleItems.push({
        sprite,
        texture,
        material,
        baseX: posX,
        baseY: posY,
        baseZ: posZ,
        speed: 0.6 + Math.random() * 0.7,
        floatOffset: Math.random() * Math.PI * 2,
        amp: 0.18 + Math.random() * 0.22
      });
    });

    // 3. Edge Matrix 3D Sculpture Group
    const matrixRoot = new THREE.Group();
    const isDesktop = width >= 1024;
    // Desktop scale: 0.6 (40% reduction as requested); Mobile scale: 0.48 for airy viewport fit
    const targetScale = isDesktop ? 0.6 : 0.48;
    matrixRoot.scale.set(targetScale, targetScale, targetScale);
    matrixRoot.position.set(isDesktop ? 2.9 : 0, isDesktop ? 0.1 : -0.7, 0);
    scene.add(matrixRoot);

    // 3a. Outer Geodesic Icosahedron Wireframe
    const icosaGeo = new THREE.IcosahedronGeometry(2.1, 2);
    const wireframeGeo = new THREE.WireframeGeometry(icosaGeo);
    const lineMat = new THREE.LineBasicMaterial({
      color: isLight ? 0x4f46e5 : 0xC6FF4D,
      transparent: true,
      opacity: isLight ? 0.85 : 0.75,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending
    });
    const icosaLines = new THREE.LineSegments(wireframeGeo, lineMat);
    matrixRoot.add(icosaLines);

    // 3b. Outer Translucent Facets for Specular Reflections
    const facetMat = new THREE.MeshPhysicalMaterial({
      color: isLight ? 0x94a3b8 : 0x070b14,
      metalness: isLight ? 0.2 : 0.85,
      roughness: 0.2,
      transmission: isLight ? 0.8 : 0.65,
      transparent: true,
      opacity: isLight ? 0.35 : 0.45,
      reflectivity: 0.9
    });
    const icosaMesh = new THREE.Mesh(icosaGeo, facetMat);
    matrixRoot.add(icosaMesh);

    // 3c. Glowing Vertex Nodes (at every vertex of the icosahedron)
    const positionAttr = icosaGeo.attributes.position;
    const vertexMap = new Map<string, THREE.Vector3>();

    for (let i = 0; i < positionAttr.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(positionAttr, i);
      const key = `${v.x.toFixed(2)},${v.y.toFixed(2)},${v.z.toFixed(2)}`;
      if (!vertexMap.has(key)) {
        vertexMap.set(key, v);
      }
    }

    const nodeGeo = new THREE.SphereGeometry(0.045, 8, 8);
    const nodeMatLime = new THREE.MeshStandardMaterial({
      color: isLight ? 0x16a34a : 0xC6FF4D,
      emissive: isLight ? 0x15803d : 0xC6FF4D,
      emissiveIntensity: isLight ? 1.6 : 2.2,
      roughness: 0.1
    });
    const nodeMatCyan = new THREE.MeshStandardMaterial({
      color: isLight ? 0x4338ca : 0x38bdf8,
      emissive: isLight ? 0x3730a3 : 0x0284c7,
      emissiveIntensity: isLight ? 1.4 : 2.0,
      roughness: 0.1
    });

    let nodeIdx = 0;
    vertexMap.forEach((v) => {
      const mesh = new THREE.Mesh(nodeGeo, nodeIdx % 3 === 0 ? nodeMatLime : nodeMatCyan);
      mesh.position.copy(v);
      matrixRoot.add(mesh);
      nodeIdx++;
    });

    // 3d. Dark Obsidian Chrome Inner Sphere
    const innerSphereGeo = new THREE.SphereGeometry(1.4, 32, 32);
    const innerSphereMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.95,
      roughness: 0.15,
      emissive: isLight ? 0x1e293b : 0x0d1b2a,
      emissiveIntensity: 0.4
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    matrixRoot.add(innerSphere);

    // 3e. Central Glowing Quantum Octahedron
    const coreGeo = new THREE.OctahedronGeometry(0.7, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: isLight ? 0x16a34a : 0xC6FF4D,
      emissive: isLight ? 0x16a34a : 0xC6FF4D,
      emissiveIntensity: isLight ? 1.5 : 1.8,
      wireframe: true
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    matrixRoot.add(coreMesh);

    // 3f. Dual Quantum Gyro Rings
    const ring1Geo = new THREE.TorusGeometry(2.65, 0.018, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: isLight ? 0x6366f1 : 0x8B5CF6,
      emissive: isLight ? 0x4f46e5 : 0x8B5CF6,
      emissiveIntensity: 1.5,
      roughness: 0.2
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    matrixRoot.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.9, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: isLight ? 0x0284c7 : 0x38bdf8,
      emissive: isLight ? 0x0369a1 : 0x0284c7,
      emissiveIntensity: 1.6,
      roughness: 0.2
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 5;
    matrixRoot.add(ring2);

    // 4. Lights
    const dirLight = new THREE.DirectionalLight(0xffffff, isLight ? 3.0 : 2.5);
    dirLight.position.set(6, 8, 6);
    scene.add(dirLight);

    const cyanLight = new THREE.PointLight(isLight ? 0x0284c7 : 0x38bdf8, 3.5, 12);
    cyanLight.position.set(4, 2, 3);
    scene.add(cyanLight);

    const limeLight = new THREE.PointLight(isLight ? 0x16a34a : 0xC6FF4D, 3.0, 12);
    limeLight.position.set(-2, -3, 3);
    scene.add(limeLight);

    const violetLight = new THREE.PointLight(0x8B5CF6, 2.5, 10);
    violetLight.position.set(0, 4, -3);
    scene.add(violetLight);

    // 5. Cursor Parallax & Drag Interaction (supports both Mouse & Touch via PointerEvents)
    let targetRotX = 0;
    let targetRotY = 0;
    let curRotX = 0;
    let curRotY = 0;

    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;
    let manualRotX = 0;
    let manualRotY = 0;

    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevPointerX;
        const deltaY = e.clientY - prevPointerY;
        manualRotY += deltaX * 0.006;
        manualRotX += deltaY * 0.006;
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
      } else {
        const normX = (e.clientX / window.innerWidth) * 2 - 1;
        const normY = -(e.clientY / window.innerHeight) * 2 + 1;
        targetRotY = normX * 0.45;
        targetRotX = normY * 0.35;
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

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    // 6. Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      const desktopNow = width >= 1024;
      const rescale = desktopNow ? 0.6 : 0.48;
      matrixRoot.scale.set(rescale, rescale, rescale);
      matrixRoot.position.set(desktopNow ? 2.9 : 0, desktopNow ? 0.1 : -0.7, 0);
    };

    window.addEventListener('resize', handleResize);

    // 7. Animation Loop
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      const delta = clock.getDelta();

      // Smooth camera and matrix parallax damping
      curRotX = THREE.MathUtils.damp(curRotX, targetRotX, 4, delta);
      curRotY = THREE.MathUtils.damp(curRotY, targetRotY, 4, delta);

      // Starfield slow galactic drift
      starPoints.rotation.y += 0.03 * delta;
      starPoints.rotation.x = curRotX * 0.15;

      // 3D Digital Marketing text particles smooth floating and galactic drift
      const elapsed = clock.getElapsedTime();
      textParticleItems.forEach((tp) => {
        tp.sprite.position.y = tp.baseY + Math.sin(elapsed * tp.speed + tp.floatOffset) * tp.amp;
        tp.sprite.position.x = tp.baseX + Math.cos(elapsed * (tp.speed * 0.75) + tp.floatOffset) * (tp.amp * 0.5);
        (tp.sprite.material as THREE.SpriteMaterial).opacity =
          (isLight ? 0.72 : 0.82) + Math.sin(elapsed * 1.8 + tp.floatOffset) * 0.14;
      });
      textParticlesGroup.rotation.y += 0.022 * delta;
      textParticlesGroup.rotation.x = curRotX * 0.22;
      textParticlesGroup.rotation.z = curRotY * 0.15;

      // Matrix continuous rotation + manual drag + parallax
      matrixRoot.rotation.y += 0.28 * delta;
      matrixRoot.rotation.x = curRotX * 0.5 + manualRotX;
      matrixRoot.rotation.z = curRotY * 0.35;
      if (manualRotY) {
        matrixRoot.rotation.y += manualRotY * 0.05;
        manualRotY *= 0.95;
      }
      manualRotX *= 0.95;

      // Inner elements counter-rotation
      coreMesh.rotation.x += 0.6 * delta;
      coreMesh.rotation.y -= 0.4 * delta;
      ring1.rotation.z += 0.35 * delta;
      ring2.rotation.z -= 0.45 * delta;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('resize', handleResize);

      // Clean up text particles
      textParticleItems.forEach((tp) => {
        tp.texture.dispose();
        tp.material.dispose();
      });
      scene.remove(textParticlesGroup);

      // Clean up geometries and materials
      starGeo.dispose();
      starMat.dispose();
      icosaGeo.dispose();
      wireframeGeo.dispose();
      lineMat.dispose();
      facetMat.dispose();
      nodeGeo.dispose();
      nodeMatLime.dispose();
      nodeMatCyan.dispose();
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
      className="absolute inset-0 w-full h-full pointer-events-auto select-none overflow-hidden touch-none"
      style={{ zIndex: 1 }}
    />
  );
};
