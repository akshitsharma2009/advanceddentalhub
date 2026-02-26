import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* ---------- Single tooth as a curved box ---------- */
function Tooth({
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}) {
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[0.35, 0.6, 0.3, 2, 2, 2]} />
      <meshStandardMaterial
        color="#5ebbab"
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

/* ---------- Jaw arch (upper or lower) ---------- */
function JawArch({ upper = true }: { upper?: boolean }) {
  const groupRef = useRef<THREE.Group>(null!);
  const yOffset = upper ? 0.35 : -0.35;
  const yScale = upper ? 1 : 0.9;

  // Generate teeth positions along a parabolic arch
  const teeth = useMemo(() => {
    const result: {
      pos: [number, number, number];
      rot: [number, number, number];
      sc: [number, number, number];
    }[] = [];
    const count = 14;
    for (let i = 0; i < count; i++) {
      const t = (i / (count - 1)) * 2 - 1; // -1 to 1
      const x = t * 2.2;
      const z = t * t * 1.2 - 0.6;
      const angle = Math.atan2(t * 2.4, 1);
      // Molars are wider, incisors narrower
      const isMolar = Math.abs(t) > 0.5;
      const scaleX = isMolar ? 1.15 : 0.85;
      const scaleY = isMolar ? 0.85 : 1.1;
      result.push({
        pos: [x, yOffset, z],
        rot: [0, angle, 0],
        sc: [scaleX, scaleY * yScale, 1],
      });
    }
    return result;
  }, [yOffset, yScale]);

  return (
    <group ref={groupRef}>
      {teeth.map((t, i) => (
        <Tooth key={i} position={t.pos} rotation={t.rot} scale={t.sc} />
      ))}
      {/* Gum line */}
      <mesh position={[0, yOffset + (upper ? 0.45 : -0.45), 0]}>
        <torusGeometry args={[1.8, 0.12, 8, 40, Math.PI]} />
        <meshStandardMaterial
          color="#4da89a"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

/* ---------- Full teeth model with slow rotation ---------- */
function Scene() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.3) * 0.4;
    groupRef.current.rotation.x = -0.3 + Math.sin(clock.elapsedTime * 0.2) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <JawArch upper />
      <JawArch upper={false} />
    </group>
  );
}

const TeethModel = () => {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-3, 2, 4]} intensity={0.4} color="#5ebbab" />
        <Scene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default TeethModel;
