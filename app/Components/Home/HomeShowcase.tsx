"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";
const navy = "#17232b";
const wood = "#40545b";
const lightWood = "#e08f62";
const stone = "#d8e0dc";
const steel = "#9da9a0";

function Box({
  position,
  scale,
  color,
  metalness = 0,
  roughness = 0.7,
}: {
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
  metalness?: number;
  roughness?: number;
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={scale} />
      <meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />
    </mesh>
  );
}

function Stool({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <Box position={[0, 0.9, 0]} scale={[0.65, 0.12, 0.65]} color={stone} roughness={0.45} />
      {[[-0.23, 0.44, -0.23], [0.23, 0.44, -0.23], [-0.23, 0.44, 0.23], [0.23, 0.44, 0.23]].map(([x, y, z], index) => (
        <Box key={index} position={[x, y, z]} scale={[0.07, 0.88, 0.07]} color={lightWood} />
      ))}
      <Box position={[0, 0.55, 0]} scale={[0.52, 0.06, 0.52]} color={lightWood} />
    </group>
  );
}

function CabinetWall() {
  const shelves = [-1.85, -0.92, 0, 0.92, 1.85];
  return (
    <group>
      <Box position={[0, 2.8, -1.85]} scale={[7.3, 5.6, 0.12]} color={stone} roughness={0.88} />
      <Box position={[-2.6, 3.7, -1.72]} scale={[2.45, 1.55, 0.16]} color={navy} roughness={0.52} />
      <Box position={[2.45, 3.85, -1.72]} scale={[3.15, 2.4, 0.16]} color={navy} roughness={0.52} />
      <Box position={[-1.1, 2.82, -1.68]} scale={[5.6, 0.1, 0.18]} color={stone} roughness={0.4} />
      {shelves.map((x) => <Box key={x} position={[x, 3.15, -1.58]} scale={[0.06, 0.7, 0.08]} color={lightWood} />)}
      <Box position={[-2.62, 2.05, -1.63]} scale={[2.65, 1.35, 0.15]} color={stone} roughness={0.55} />
      <Box position={[2.55, 2.3, -1.62]} scale={[2.95, 1.65, 0.15]} color={stone} roughness={0.55} />
      <Box position={[0.75, 2.26, -1.55]} scale={[0.8, 1.45, 0.12]} color="#161e20" metalness={0.55} roughness={0.25} />
      <Box position={[0.75, 2.52, -1.63]} scale={[0.5, 0.05, 0.03]} color="#d68a35" metalness={0.2} roughness={0.3} />
      <Box position={[1.18, 2.26, -1.63]} scale={[0.06, 1.7, 0.04]} color="#d0d5d0" metalness={0.5} roughness={0.25} />
      <Box position={[2.2, 2.62, -1.58]} scale={[1.2, 0.06, 0.08]} color={lightWood} />
      <Box position={[-2.5, 2.66, -1.58]} scale={[1.55, 0.06, 0.08]} color={lightWood} />
    </group>
  );
}

function KitchenModel() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.18) * 0.035;
  });

  return (
    <group ref={group} position={[0, -1.55, 0]}>
      <Box position={[0, -0.08, 0]} scale={[8.6, 0.12, 5.8]} color="#a7aaa5" roughness={0.92} />
      <CabinetWall />
      <Box position={[-2.35, 0.92, -0.25]} scale={[3.45, 1.7, 1.28]} color={wood} roughness={0.72} />
      <Box position={[-2.35, 1.83, -0.25]} scale={[3.65, 0.14, 1.48]} color={stone} roughness={0.48} />
      <Box position={[-2.35, 1.93, -0.25]} scale={[2.1, 0.05, 1.1]} color="#b7a487" roughness={0.55} />
      <Box position={[-2.35, 2.01, -0.25]} scale={[1.2, 0.04, 0.42]} color="#252f30" metalness={0.65} roughness={0.22} />
      <Box position={[0.72, 1.05, -0.2]} scale={[3.35, 1.95, 1.5]} color={navy} roughness={0.6} />
      <Box position={[0.72, 2.1, -0.2]} scale={[3.62, 0.16, 1.72]} color={stone} roughness={0.45} />
      <Box position={[0.72, 2.19, -0.2]} scale={[3.25, 0.06, 1.36]} color={lightWood} roughness={0.64} />
      <Box position={[0.72, 2.18, 0.12]} scale={[1.25, 0.07, 0.72]} color={stone} roughness={0.4} />
      <Box position={[-0.05, 2.27, 0.35]} scale={[0.07, 0.54, 0.07]} color={steel} metalness={0.8} roughness={0.18} />
      <mesh position={[-0.05, 2.55, 0.35]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.22, 0.035, 10, 24, Math.PI]} />
        <meshStandardMaterial color={steel} metalness={0.8} roughness={0.18} />
      </mesh>
      <Box position={[1.72, 2.22, -0.24]} scale={[0.68, 0.05, 0.62]} color="#202727" metalness={0.7} roughness={0.25} />
      <Box position={[1.72, 2.28, -0.24]} scale={[0.12, 0.03, 0.12]} color="#dd8b37" metalness={0.15} roughness={0.3} />
      <Stool position={[-0.2, 0, 0.96]} />
      <Stool position={[0.75, 0, 1.03]} />
      <Stool position={[1.7, 0, 0.94]} />
      <Box position={[-3.4, 2.85, -1.65]} scale={[0.08, 0.55, 0.08]} color={steel} metalness={0.7} roughness={0.25} />
      <Box position={[-3.4, 3.15, -1.65]} scale={[0.58, 0.06, 0.42]} color={steel} metalness={0.7} roughness={0.25} />
      <Box position={[-1.4, 4.62, -1.6]} scale={[0.55, 0.92, 0.55]} color="#757b77" metalness={0.7} roughness={0.3} />
      <Box position={[-1.4, 5.14, -1.58]} scale={[0.8, 0.08, 0.8]} color="#757b77" metalness={0.7} roughness={0.3} />
    </group>
  );
}

function KitchenScene() {
  return (
    <Canvas camera={{ position: [8.4, 5.7, 10.5], fov: 38 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 4]} intensity={3.5} color="#f5eee3" />
      <pointLight position={[-3, -1, 2]} intensity={18} distance={8} color="#e08f62" />
      <pointLight position={[3, 1, -1]} intensity={12} distance={7} color="#7fb7b3" />
      <KitchenModel />
      <Sparkles count={100} scale={9} size={1.25} speed={0.18} color="#e08f62" opacity={2.42} />
      <Environment preset="city" />
      <OrbitControls autoRotate autoRotateSpeed={4.2} enablePan={false} enableZoom={false} target={[0, 0.1, 0]} />
    </Canvas>
  );
}

export default function HomeShowcase() {
  return (
    <section className="showcase-section" id="showcase">
      <div className="showcase-background" aria-hidden="true" />
      <div className="showcase-heading">
        <p className="section-kicker"><span>04</span> Interior coordination</p>
        <h2>Design the room<br /><em>before the room.</em></h2>
        <p>From cabinetry to circulation, every finish is resolved in the model before it reaches the site.</p>
        <div className="showcase-stat"><strong>Kitchen / 01</strong><span>Interactive material study</span></div>
      </div>
      <div className="showcase-canvas" aria-label="Interactive 3D kitchen interior" role="img">
        <KitchenScene />
        <span className="showcase-caption">Drag to inspect / Kitchen study 2026</span>  
      </div>
    </section>
  );
}
