import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line, Float } from '@react-three/drei';
import * as THREE from 'three';
import { SKILL_NODES } from '../../utils/data';

interface SkillConstellationProps {
  onHoverNode?: (id: string | null) => void;
  hoveredNodeId?: string | null;
  selectedCategory?: string;
}

export const SkillConstellationScene: React.FC<SkillConstellationProps> = ({
  onHoverNode,
  hoveredNodeId,
  selectedCategory = 'ALL',
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  const nodeMap = React.useMemo(() => {
    const map = new Map<string, typeof SKILL_NODES[0]>();
    SKILL_NODES.forEach((node) => map.set(node.id, node));
    return map;
  }, []);

  // Filter nodes by selected category tab
  const activeNodes = React.useMemo(() => {
    if (selectedCategory === 'ALL') return SKILL_NODES;
    return SKILL_NODES.filter((n) => n.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#10b981" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#06b6d4" />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <group>
          {/* Render Constellation Stars */}
          {activeNodes.map((node) => {
            const pos = node.position || [0, 0, 0];
            const isHovered = hoveredNodeId === node.id;
            const isRelatedToHover =
              hoveredNodeId &&
              nodeMap.get(hoveredNodeId)?.relatedIds.includes(node.id);

            const starColor = isHovered
              ? '#34d399'
              : isRelatedToHover
              ? '#38bdf8'
              : node.category === 'FRONTEND'
              ? '#10b981'
              : node.category === 'BACKEND'
              ? '#06b6d4'
              : node.category === '3D_CREATIVE'
              ? '#a855f7'
              : '#f59e0b';

            return (
              <group key={node.id} position={pos}>
                <Sphere
                  args={[isHovered ? 0.35 : 0.22, 16, 16]}
                  onPointerOver={(e) => {
                    e.stopPropagation();
                    onHoverNode?.(node.id);
                  }}
                  onPointerOut={(e) => {
                    e.stopPropagation();
                    onHoverNode?.(null);
                  }}
                >
                  <meshStandardMaterial
                    color={starColor}
                    emissive={starColor}
                    emissiveIntensity={isHovered ? 1.5 : 0.6}
                  />
                </Sphere>

                {/* Render Lines connecting to related skills */}
                {node.relatedIds.map((targetId) => {
                  const targetNode = nodeMap.get(targetId);
                  if (!targetNode || !targetNode.position) return null;

                  const isLineActive =
                    isHovered ||
                    hoveredNodeId === targetId ||
                    (isRelatedToHover && targetId === hoveredNodeId);

                  return (
                    <Line
                      key={`${node.id}-${targetId}`}
                      points={[
                        [0, 0, 0],
                        [
                          targetNode.position[0] - pos[0],
                          targetNode.position[1] - pos[1],
                          targetNode.position[2] - pos[2],
                        ],
                      ]}
                      color={isLineActive ? '#34d399' : '#047857'}
                      lineWidth={isLineActive ? 2.5 : 0.8}
                      transparent
                      opacity={isLineActive ? 0.9 : 0.2}
                    />
                  );
                })}
              </group>
            );
          })}
        </group>
      </Float>
    </group>
  );
};
