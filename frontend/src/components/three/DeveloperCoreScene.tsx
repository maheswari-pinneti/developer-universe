import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';
import { SKILL_NODES } from '../../utils/data';

interface DeveloperCoreProps {
  onHoverNode?: (id: string | null) => void;
  onClickNode?: (id: string) => void;
  hoveredNodeId?: string | null;
  lowSpecMode?: boolean;
}

export const DeveloperCoreScene: React.FC<DeveloperCoreProps> = ({
  onHoverNode,
  onClickNode,
  hoveredNodeId,
  lowSpecMode = false,
}) => {
  const coreMeshRef = useRef<THREE.Mesh>(null);
  const ringGroupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Rotation frame hook
  useFrame((state, delta) => {
    if (coreMeshRef.current) {
      coreMeshRef.current.rotation.y += delta * 0.4;
      coreMeshRef.current.rotation.x += delta * 0.2;
    }
    if (ringGroupRef.current) {
      ringGroupRef.current.rotation.y -= delta * 0.15;
      ringGroupRef.current.rotation.z += delta * 0.1;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05;
    }

    // Subtle pointer parallax camera pan
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.8, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.8, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  // Central Core Tech Nodes (Pick key 8 primary nodes)
  const heroNodes = SKILL_NODES.slice(0, 8);

  // Generate particle geometry positions
  const particleCount = lowSpecMode ? 120 : 350;
  const particlePositions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return pos;
  }, [particleCount]);

  return (
    <group>
      {/* Ambient & Key Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#10b981" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#06b6d4" />

      {/* Background Star Particle Field */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#10b981"
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Floating Central Geometric Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <group>
          {/* Inner Polyhedron Core */}
          <mesh ref={coreMeshRef}>
            <icosahedronGeometry args={[1.5, 1]} />
            <meshStandardMaterial
              color="#059669"
              wireframe
              emissive="#10b981"
              emissiveIntensity={0.4}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          {/* Core Inner Glowing Sphere */}
          <Sphere args={[0.9, 32, 32]}>
            <meshStandardMaterial
              color="#10b981"
              emissive="#34d399"
              emissiveIntensity={0.8}
              transparent
              opacity={0.7}
            />
          </Sphere>

          {/* Orbital Outer Rings */}
          <group ref={ringGroupRef}>
            <mesh rotation={[Math.PI / 3, 0, 0]}>
              <torusGeometry args={[2.5, 0.015, 16, 100]} />
              <meshBasicMaterial color="#10b981" transparent opacity={0.6} />
            </mesh>
            <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
              <torusGeometry args={[3.2, 0.01, 16, 100]} />
              <meshBasicMaterial color="#06b6d4" transparent opacity={0.4} />
            </mesh>
          </group>
        </group>
      </Float>

      {/* Connected Orbiting Tech Nodes */}
      <group>
        {heroNodes.map((node, i) => {
          const angle = (i / heroNodes.length) * Math.PI * 2;
          const radius = 4.2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle * 1.5) * 1.2;
          const z = Math.sin(angle) * radius;
          const isHovered = hoveredNodeId === node.id;

          return (
            <group key={node.id} position={[x, y, z]}>
              {/* Node Sphere */}
              <Sphere
                args={[isHovered ? 0.35 : 0.25, 16, 16]}
                onPointerOver={(e) => {
                  e.stopPropagation();
                  onHoverNode?.(node.id);
                }}
                onPointerOut={(e) => {
                  e.stopPropagation();
                  onHoverNode?.(null);
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClickNode?.(node.id);
                }}
              >
                <meshStandardMaterial
                  color={isHovered ? "#34d399" : "#10b981"}
                  emissive={isHovered ? "#6ee7b7" : "#059669"}
                  emissiveIntensity={isHovered ? 1.5 : 0.5}
                />
              </Sphere>

              {/* Connecting Line to Central Core */}
              <Line
                points={[[0, 0, 0], [-x, -y, -z]]}
                color={isHovered ? "#34d399" : "#059669"}
                lineWidth={isHovered ? 2 : 1}
                transparent
                opacity={isHovered ? 0.8 : 0.25}
              />
            </group>
          );
        })}
      </group>
    </group>
  );
};
