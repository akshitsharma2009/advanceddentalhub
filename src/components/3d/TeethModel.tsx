import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

/* ---------- Single Tooth ---------- */
function Tooth({
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  type = "incisor",
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  type?: "incisor" | "canine" | "premolar" | "molar";
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  const geometry = useMemo(() => {
    let geo: THREE.BufferGeometry;

    switch (type) {
      case "incisor":
        // Flat, chisel-shaped
        geo = new THREE.BoxGeometry(0.28, 0.55, 0.22, 8, 8, 8);
        break;
      case "canine":
        // Pointed, conical
        geo = new THREE.ConeGeometry(0.16, 0.6, 12, 8);
        break;
      case "premolar":
        // Rounded cube with bumps
        geo = new THREE.BoxGeometry(0.32, 0.45, 0.28, 8, 8, 8);
        break;
      case "molar":
        // Wide, flat top
        geo = new THREE.BoxGeometry(0.38, 0.42, 0.34, 8, 8, 8);
        break;
    }

    // Smooth the geometry by modifying vertices
    const pos = geo.attributes.position;
    const vec = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      vec.fromBufferAttribute(pos, i);
      const len = vec.length();
      // Spherize slightly for organic feel
      const factor = type === "canine" ? 0.15 : 0.25;
      vec.normalize().multiplyScalar(len * (1 - factor) + factor * len * 0.85);
      // Round edges
      const edgeSoftness = 0.92;
      vec.x *= edgeSoftness + Math.abs(vec.y) * 0.08;
      vec.z *= edgeSoftness + Math.abs(vec.y) * 0.08;
      pos.setXYZ(i, vec.x, vec.y, vec.z);
    }
    geo.computeVertexNormals();
    return geo;
  }, [type]);

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      geometry={geometry}
      castShadow
      receiveShadow
    >
      <meshPhysicalMaterial
        color="#f5f0e8"
        roughness={0.15}
        metalness={0.05}
        clearcoat={1}
        clearcoatRoughness={0.1}
        transmission={0.05}
        thickness={0.5}
        ior={1.5}
        envMapIntensity={1.2}
        sheen={0.3}
        sheenColor="#ffffff"
      />
    </mesh>
  );
}

/* ---------- Gum tissue ---------- */
function GumArch({ upper = true }: { upper?: boolean }) {
  const gumGeo = useMemo(() => {
    const shape = new THREE.Shape();
    const count = 60;
    // Create arch shape
    for (let i = 0; i <= count; i++) {
      const t = (i / count) * Math.PI;
      const x = Math.cos(t) * 2.3;
      const y = Math.sin(t) * 1.3;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    // Inner arch
    for (let i = count; i >= 0; i--) {
      const t = (i / count) * Math.PI;
      const x = Math.cos(t) * 1.4;
      const y = Math.sin(t) * 0.7;
      shape.lineTo(x, y);
    }

    const extrudeSettings = {
      depth: 0.35,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.08,
      bevelSegments: 6,
      curveSegments: 32,
    };

    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geo.computeVertexNormals();
    return geo;
  }, []);

  const yPos = upper ? 0.25 : -0.25;
  const rotX = upper ? -Math.PI / 2 : Math.PI / 2;
  const flipZ = upper ? 0 : Math.PI;

  return (
    <mesh
      geometry={gumGeo}
      position={[0, yPos, -0.6]}
      rotation={[rotX, 0, flipZ]}
      scale={[1, 1, upper ? 1 : 0.95]}
      castShadow
      receiveShadow
    >
      <meshPhysicalMaterial
        color="#e8918a"
        roughness={0.65}
        metalness={0}
        clearcoat={0.3}
        clearcoatRoughness={0.5}
        sheen={0.5}
        sheenColor="#ff9999"
        envMapIntensity={0.5}
      />
    </mesh>
  );
}

/* ---------- Jaw Arch with teeth ---------- */
function JawArch({ upper = true }: { upper?: boolean }) {
  const yOffset = upper ? 0.32 : -0.32;
  const yScale = upper ? 1 : 0.92;

  const teeth = useMemo(() => {
    const result: {
      pos: [number, number, number];
      rot: [number, number, number];
      sc: [number, number, number];
      type: "incisor" | "canine" | "premolar" | "molar";
    }[] = [];

    // Tooth layout: 2 central incisors, 2 lateral incisors, 2 canines, 4 premolars, 4 molars = 14 per arch
    const toothLayout: {
      type: "incisor" | "canine" | "premolar" | "molar";
      xOffset: number;
      scaleX: number;
      scaleY: number;
    }[] = [
      // Right side (positive x)
      { type: "molar", xOffset: 0.93, scaleX: 1.1, scaleY: 0.85 },
      { type: "molar", xOffset: 0.8, scaleX: 1.05, scaleY: 0.88 },
      { type: "premolar", xOffset: 0.67, scaleX: 0.95, scaleY: 0.92 },
      { type: "premolar", xOffset: 0.56, scaleX: 0.9, scaleY: 0.95 },
      { type: "canine", xOffset: 0.43, scaleX: 0.85, scaleY: 1.1 },
      { type: "incisor", xOffset: 0.28, scaleX: 0.82, scaleY: 1.05 },
      { type: "incisor", xOffset: 0.14, scaleX: 0.88, scaleY: 1.0 },
    ];

    // Place teeth symmetrically
    for (const tooth of toothLayout) {
      const archFn = (x: number) => {
        const normalized = x / 0.93;
        return normalized * normalized * 1.4 - 0.7;
      };

      // Right side
      const xR = tooth.xOffset * 2.4;
      const zR = archFn(tooth.xOffset);
      const angleR = Math.atan2(tooth.xOffset * 2, 1) * 0.8;
      result.push({
        pos: [xR, yOffset, zR],
        rot: [0, angleR, 0],
        sc: [tooth.scaleX, tooth.scaleY * yScale, 1],
        type: tooth.type,
      });

      // Left side (mirror)
      if (tooth.xOffset > 0.05) {
        const xL = -tooth.xOffset * 2.4;
        const angleL = -angleR;
        result.push({
          pos: [xL, yOffset, zR],
          rot: [0, angleL, 0],
          sc: [tooth.scaleX, tooth.scaleY * yScale, 1],
          type: tooth.type,
        });
      }
    }

    return result;
  }, [yOffset, yScale]);

  return (
    <group>
      {teeth.map((t, i) => (
        <Tooth key={i} position={t.pos} rotation={t.rot} scale={t.sc} type={t.type} />
      ))}
      <GumArch upper={upper} />
    </group>
  );
}

/* ---------- Full Scene ---------- */
function Scene() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.25) * 0.5;
    groupRef.current.rotation.x = -0.25 + Math.sin(t * 0.15) * 0.05;
  });

  return (
    <group ref={groupRef} scale={1.1}>
      <JawArch upper />
      <JawArch upper={false} />
    </group>
  );
}

const TeethModel = () => {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 35 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
        shadows
      >
        {/* Lighting setup for realistic enamel reflections */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          color="#fff5ee"
        />
        <directionalLight position={[-4, 4, 3]} intensity={0.6} color="#e8f0ff" />
        <pointLight position={[0, 2, 6]} intensity={0.8} color="#ffffff" />
        <pointLight position={[0, -2, 4]} intensity={0.3} color="#ffecdb" />

        {/* Subtle rim light */}
        <spotLight
          position={[-3, 0, -3]}
          intensity={0.4}
          angle={0.6}
          penumbra={1}
          color="#cce5ff"
        />

        <Environment preset="studio" environmentIntensity={0.6} />

        <Scene />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 3.5}
          dampingFactor={0.05}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default TeethModel;
