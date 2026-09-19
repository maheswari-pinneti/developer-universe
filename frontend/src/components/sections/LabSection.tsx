import React, { useState } from 'react';
import { FlaskConical, Play, RefreshCw, Cpu } from 'lucide-react';
import { CanvasContainer } from '../three/CanvasContainer';
import { Sphere, Float, MeshDistortMaterial } from '@react-three/drei';
import { useAppStore } from '../../store/useAppStore';
import { SoundFX } from '../../utils/sound';

const ShaderSphereScene: React.FC<{ distort: number; speed: number; color: string }> = ({ distort, speed, color }) => {
  return (
    <group>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#10b981" />
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1.8, 64, 64]}>
          <MeshDistortMaterial
            color={color}
            emissive="#047857"
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.8}
            distort={distort}
            speed={speed}
          />
        </Sphere>
      </Float>
    </group>
  );
};

export const LabSection: React.FC = () => {
  const { soundEnabled, webglSupported } = useAppStore();
  
  const [distort, setDistort] = useState(0.4);
  const [speed, setSpeed] = useState(2);
  const [color, setColor] = useState('#10b981');

  const [activeNode, setActiveNode] = useState(1);
  const [packetCount, setPacketCount] = useState(128);

  return (
    <section id="lab" className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>THE LAB & EXPERIMENTS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            CREATIVE WEB & GRAPHICS EXPERIMENTS
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm font-mono max-w-xl">
            Live interactive WebGL shader deformers, network graph simulators, and reactive particle physics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-zinc-950/80 border border-emerald-500/30 rounded-3xl p-6 md:p-8 backdrop-blur-md space-y-6 shadow-2xl flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <span className="font-mono text-xs text-emerald-400 font-bold">EXPERIMENT_01</span>
                <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full">
                  WEBGL SHADER DEFORMER
                </span>
              </div>
              <h3 className="text-xl font-mono font-bold text-white">Mesh Distortion Shader</h3>
              <p className="text-xs font-mono text-zinc-400">
                Control procedural vertex displacement noise and shader velocity parameters in real time.
              </p>
            </div>

            {webglSupported ? (
              <CanvasContainer heightClassName="h-[280px]">
                <ShaderSphereScene distort={distort} speed={speed} color={color} />
              </CanvasContainer>
            ) : (
              <div className="h-[280px] bg-zinc-900/60 rounded-2xl flex items-center justify-center font-mono text-xs text-emerald-400">
                2D Mode Simulation Active
              </div>
            )}

            <div className="space-y-4 pt-4 border-t border-zinc-900 font-mono text-xs">
              <div className="space-y-2">
                <div className="flex justify-between text-zinc-400">
                  <span>Vertex Distortion</span>
                  <span className="text-emerald-400">{distort.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.2"
                  step="0.05"
                  value={distort}
                  onChange={(e) => setDistort(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 bg-zinc-900 rounded-lg cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex space-x-2">
                  {['#10b981', '#06b6d4', '#a855f7', '#f59e0b'].map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        SoundFX.playClick(soundEnabled);
                        setColor(c);
                      }}
                      className="w-6 h-6 rounded-full border border-zinc-700"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <button
                  onClick={() => {
                    SoundFX.playClick(soundEnabled);
                    setDistort(0.4);
                    setSpeed(2);
                    setColor('#10b981');
                  }}
                  className="flex items-center space-x-1 text-zinc-400 hover:text-white text-[11px]"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>RESET</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950/80 border border-emerald-500/30 rounded-3xl p-6 md:p-8 backdrop-blur-md space-y-6 shadow-2xl flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <span className="font-mono text-xs text-emerald-400 font-bold">EXPERIMENT_02</span>
                <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full">
                  NETWORK DISPATCHER
                </span>
              </div>
              <h3 className="text-xl font-mono font-bold text-white">Distributed Packet Routing</h3>
              <p className="text-xs font-mono text-zinc-400">
                Simulate websocket event distribution across active cluster backend nodes.
              </p>
            </div>

            <div className="h-[280px] bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-emerald-400 font-bold">ACTIVE NODE: NODE_0{activeNode}</span>
                <span className="text-zinc-500">{packetCount} PACKETS / SEC</span>
              </div>

              <div className="grid grid-cols-3 gap-4 my-auto">
                {[1, 2, 3].map((nodeId) => (
                  <button
                    key={nodeId}
                    onClick={() => {
                      SoundFX.playClick(soundEnabled);
                      setActiveNode(nodeId);
                      setPacketCount((prev) => prev + 64);
                    }}
                    className={`p-4 rounded-xl border text-center transition-all ${
                      activeNode === nodeId
                        ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-lg'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-emerald-500/30'
                    }`}
                  >
                    <Cpu className={`w-6 h-6 mx-auto mb-2 ${activeNode === nodeId ? 'text-emerald-400 animate-pulse' : 'text-zinc-600'}`} />
                    <span className="font-bold block">NODE_0{nodeId}</span>
                    <span className="text-[10px] text-zinc-500">ONLINE</span>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center text-[11px] text-zinc-400 border-t border-zinc-800/80 pt-3">
                <span>CLUSTER STATUS: HEALTHY</span>
                <span className="text-emerald-400 font-bold">LATENCY 12ms</span>
              </div>
            </div>

            <button
              onClick={() => {
                SoundFX.playClick(soundEnabled);
                setPacketCount((prev) => prev + 128);
              }}
              className="w-full py-3 bg-zinc-900 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center space-x-2"
            >
              <Play className="w-4 h-4 fill-emerald-400" />
              <span>DISPATCH TEST PACKET BURST</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
