"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Sparkles } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import type { Group, Mesh } from "three";

function SceneObject({ isExploring }: { isExploring: boolean }) {
  const group = useRef<Group>(null);
  const core = useRef<Mesh>(null);

  useEffect(() => {
    if (!group.current || !core.current) return;
    gsap.fromTo(group.current.scale, { x: 0.2, y: 0.2, z: 0.2 }, { x: 1, y: 1, z: 1, duration: 1.8, ease: "expo.out" });
    gsap.fromTo(core.current.rotation, { y: -Math.PI * 1.5 }, { y: Math.PI * 0.5, duration: 2.4, ease: "power3.out" });
  }, []);

  useEffect(() => {
    if (!group.current) return;
    gsap.to(group.current.rotation, { y: isExploring ? Math.PI * 0.35 : 0, x: isExploring ? -0.12 : 0, duration: 1, ease: "power3.inOut" });
  }, [isExploring]);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.z = Math.sin(Date.now() * 0.00035) * 0.035;
  });

  const floors = Array.from({ length: 5 }, (_, index) => index);
  const columns = [-1.15, 0, 1.15];

  return <group ref={group} position={[0, -1.2, 0]}><Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.28}>
    {floors.map((floor) => <mesh key={`floor-${floor}`} position={[0, floor * 0.55, 0]} castShadow>
      <boxGeometry args={[2.9, 0.08, 2.15]} />
      <meshPhysicalMaterial color="#d8e0dc" roughness={0.22} metalness={0.58} clearcoat={0.7} />
    </mesh>)}
    {floors.slice(0, 4).flatMap((floor) => columns.map((x) => <mesh key={`column-${floor}-${x}`} position={[x, floor * 0.55 + 0.26, -0.75]}>
      <boxGeometry args={[0.08, 0.52, 0.08]} />
      <meshStandardMaterial color="#eef2e8" metalness={0.45} roughness={0.3} />
    </mesh>))}
    <mesh ref={core} position={[0, 1.35, 0.18]} castShadow>
      <boxGeometry args={[0.72, 2.5, 0.62]} />
      <meshPhysicalMaterial color="#9da9a0" roughness={0.18} metalness={0.76} clearcoat={1} />
    </mesh>
    <mesh position={[0, 2.82, 0]} rotation={[0, 0, Math.PI / 4]}>
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshBasicMaterial color="#e08f62" wireframe />
    </mesh>
    <mesh position={[0, 1.1, 1.08]}>
      <boxGeometry args={[2.35, 1.7, 0.025]} />
      <meshStandardMaterial color="#8ba9b2" transparent opacity={0.32} metalness={0.2} roughness={0.08} />
    </mesh>
    <mesh position={[0, 0.7, 0.28]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.72, 0.025, 12, 64]} />
      <meshBasicMaterial color="#e08f62" />
    </mesh>
    <mesh position={[0.86, 0.35, 0.96]} rotation={[0, Math.PI / 2, 0]}>
      <cylinderGeometry args={[0.035, 0.035, 1.65, 12]} />
      <meshBasicMaterial color="#79c6d0" />
    </mesh>
    <mesh position={[-0.86, 1.05, 0.96]} rotation={[0, Math.PI / 2, 0]}>
      <cylinderGeometry args={[0.035, 0.035, 1.65, 12]} />
      <meshBasicMaterial color="#e6a36f" />
    </mesh>
  </Float></group>;
}

function Scene({ isExploring }: { isExploring: boolean }) {
  return <Canvas camera={{ position: [0, 0.15, 5.6], fov: 38 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
    <ambientLight intensity={0.35} /><directionalLight position={[3, 4, 4]} intensity={3.5} color="#f5eee3" />
    <pointLight position={[-3, -1, 2]} intensity={18} distance={8} color="#e08f62" /><pointLight position={[3, 1, -1]} intensity={12} distance={7} color="#7fb7b3" />
    <SceneObject isExploring={isExploring} /><Sparkles count={90} scale={7} size={1.5} speed={0.18} color="#e08f62" opacity={0.42} />
    <Environment preset="city" /><OrbitControls enablePan={false} enableZoom={false} autoRotate={false} />
  </Canvas>;
}

export default function Home() {
  const [isExploring, setIsExploring] = useState(false);
  return <main className="hero-shell">
    <div className="hero-noise" aria-hidden="true" />
    <section className="hero-content" id="top"><div className="hero-copy"><p className="eyebrow"><span>01</span> Build with clarity</p><h1>Better buildings.<br /><em>Smarter delivery.</em></h1><p className="hero-description">DraftBIM Services creates accurate digital building models and coordinated documentation for architecture and construction teams.</p><div className="service-list" aria-label="DraftBIM services"><span>3D BIM Modelling</span><span>Architectural + Structural</span></div><button className="explore-button" type="button" onClick={() => setIsExploring((value) => !value)}><span>{isExploring ? "Close model" : "Explore model"}</span></button></div>
      <div className="scene-wrap" aria-label="Interactive 3D building information model" role="img"><Scene isExploring={isExploring} /><div className="scene-label scene-label-bottom">Drag to rotate <span>+</span> explore the model</div></div> 
    </section>
  </main>;
}