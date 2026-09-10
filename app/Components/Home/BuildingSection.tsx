"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group, Mesh } from "three";
import { useWebGL } from "./useWebGL";


function BuildingModel() {
  const model = useRef<Group>(null);
  const core = useRef<Mesh>(null);

  useFrame((state) => {
    if (!model.current || !core.current) return;
    model.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.62) * 0.46;
    model.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.42) * 0.025;
    core.current.position.y = 1.65 + Math.sin(state.clock.elapsedTime * 1.8) * 0.035;
  });

  const slabs = Array.from({ length: 5 }, (_, index) => index);
  const windows = Array.from({ length: 8 }, (_, index) => index);
  const slabColors = ["#EAF5F7", "#D9EAF3", "#8FAFC2", "#EAF5F7", "#D9EAF3"];

  return (
    <group ref={model} position={[0, -1.15, 0]} rotation={[0, -0.18, 0]} scale={1.28}>
      <Float speed={1.8} rotationIntensity={0.07} floatIntensity={0.28}>
        <mesh position={[0, -0.1, 0]} rotation={[0.05, 0, -0.08]} receiveShadow>
          <boxGeometry args={[4.8, 0.16, 2.65]} />
          <meshStandardMaterial color="#204C72" roughness={0.72} metalness={0.35} />
        </mesh>

        {slabs.map((floor) => (
          <mesh key={`slab-${floor}`} position={[0, floor * 0.48, 0]} castShadow>
            <boxGeometry args={[3.25, 0.09, 2.15]} />
            <meshPhysicalMaterial color={slabColors[floor]} roughness={0.2} metalness={0.45} clearcoat={0.7} />
          </mesh>
        ))}

        <mesh position={[-1.23, 0.8, 0.08]} castShadow>
          <boxGeometry args={[0.72, 1.75, 1.25]} />
          <meshPhysicalMaterial color="#8AA5BC" roughness={0.17} metalness={0.64} clearcoat={0.8} />
        </mesh>
        <mesh ref={core} position={[0, 1.65, 0.1]} castShadow>
          <boxGeometry args={[1.05, 3.35, 0.95]} />
          <meshPhysicalMaterial color="#F7F9FA" roughness={0.14} metalness={0.52} clearcoat={1} />
        </mesh>
        <mesh position={[1.2, 1.04, 0.08]} castShadow>
          <boxGeometry args={[0.76, 2.25, 1.42]} />
          <meshPhysicalMaterial color="#B8CFDF" roughness={0.2} metalness={0.7} clearcoat={0.7} />
        </mesh>

        {windows.map((window) => (
          <mesh key={`window-${window}`} position={[-0.52 + (window % 4) * 0.36, 0.2 + Math.floor(window / 4) * 0.48, 1.09]}>
            <boxGeometry args={[0.2, 0.3, 0.025]} />
            <meshStandardMaterial color={window % 2 ? "#204C72" : "#F7F9FA"} emissive="#204C72" emissiveIntensity={0.12} metalness={0.2} roughness={0.08} />
          </mesh>
        ))}

        <mesh position={[0.9, 0.95, 0.82]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[1.65, 1.9]} />
          <meshPhysicalMaterial color="#9DBACD" transparent opacity={0.28} roughness={0.05} metalness={0.2} transmission={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

function BuildingScene() {
  return (
    <Canvas camera={{ position: [5.1, 3.1, 6.3], fov: 34 }} dpr={[1, 2]} shadows gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight castShadow position={[3, 4, 4]} intensity={3.5} color="#F7F9FA" />
        <pointLight position={[-3, -1, 2]} intensity={18} distance={8} color="#204C72" />
        <pointLight position={[3, 1, -1]} intensity={12} distance={7} color="#9DBACD" />
        <Sparkles count={90} scale={7} size={1.5} speed={0.18} color="#204C72" opacity={0.42} />
        <BuildingModel />
        <Environment preset="city" />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} target={[0, 1, 0]} />
      </Suspense>
    </Canvas>
  );
}

export default function BuildingSection() {
  const webgl = useWebGL();
  return (
    <section className="building-section" id="building-study">
      <div className="building-gridline" aria-hidden="true" />
      <div className="building-heading">
        <p className="building-kicker"><span>04</span> Planning approvals</p>
        <h2>Town planning Approvals</h2>
        <p className="building-description">
          At DraftBIM, we make obtaining building plan approvals easy. Our team guides you through every step, ensuring a smooth process for your architectural projects in,Odisha.
        </p>
        <div className="building-meta" aria-label="Project details">
          <div><span>Region</span><strong>Odisha</strong></div>
          <div><span>Process</span><strong>End-to-end</strong></div>
          <div><span>Output</span><strong>Approval-ready</strong></div>
        </div>
        <a className="building-link" href="#building-study">
          <span>Plan your approval</span><span aria-hidden="true">&#8594;</span>
        </a>
      </div>

      <div className="building-board">
        <div className="building-board-head">
          <span>Project / North elevation</span>
          <span>Live model</span>
        </div>
        <div className="building-canvas" aria-label="Interactive 3D digital building study" role="img">
          {webgl === true && <BuildingScene />}
          {webgl === false && (
            <div className="webgl-fallback" aria-hidden="true">
              <div className="wf-building">
                <div className="wf-floor wf-floor-1" /><div className="wf-floor wf-floor-2" /><div className="wf-floor wf-floor-3" />
                <div className="wf-tower" /><div className="wf-glass" />
                <div className="wf-line wf-line-h" /><div className="wf-line wf-line-v" />
              </div>
              <p className="wf-label">Enable hardware acceleration in Chrome → Settings → System</p>
            </div>
          )}
        </div>
        <div className="building-board-foot">
          <span>DraftBIM / Study 02</span>
          <span><i aria-hidden="true" /> Drag to inspect</span>
        </div>
      </div>
    </section>
  );
}