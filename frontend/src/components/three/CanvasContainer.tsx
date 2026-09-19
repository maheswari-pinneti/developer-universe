import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useAppStore } from '../../store/useAppStore';
import { Fallback2D } from './Fallback2D';

interface CanvasContainerProps {
  children: React.ReactNode;
  fallbackContent?: React.ReactNode;
  heightClassName?: string;
}

export const CanvasContainer: React.FC<CanvasContainerProps> = ({
  children,
  fallbackContent,
  heightClassName = 'h-[450px] md:h-[600px]',
}) => {
  const { webglSupported, setWebglSupported, lowSpecMode } = useAppStore();
  const [hasContextError, setHasContextError] = useState(false);

  useEffect(() => {
    // WebGL capability check
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch {
      setWebglSupported(false);
    }
  }, [setWebglSupported]);

  if (!webglSupported || hasContextError) {
    return (
      <div className={`w-full ${heightClassName} flex items-center justify-center`}>
        {fallbackContent || <Fallback2D />}
      </div>
    );
  }

  return (
    <div className={`relative w-full ${heightClassName} rounded-3xl overflow-hidden`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={lowSpecMode ? [1, 1] : [1, 2]}
        gl={{ antialias: !lowSpecMode, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', (e) => {
            e.preventDefault();
            setHasContextError(true);
            setWebglSupported(false);
          });
        }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
};
