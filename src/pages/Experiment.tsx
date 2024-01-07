import { Suspense, useRef, useState } from "react";
import { Canvas, ThreeElements, useFrame, useLoader } from "@react-three/fiber";
import { NearestFilter, TextureLoader, Vector2 } from "three";
import chickenIdle from "../assets/sprites/chicken_idle_strip4.png";

// function Box(props: ThreeElements["mesh"]) {
//   const ref = useRef<THREE.Mesh>(null!);
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   useFrame((_, delta) => (ref.current.rotation.x += delta));
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={() => click(!clicked)}
//       onPointerOver={() => hover(true)}
//       onPointerOut={() => hover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//     </mesh>
//   );
// }

const currentTile = 0;

function Chicken(props: ThreeElements["sprite"]) {
  const offsetX = (currentTile % 4) / 4;
  const [cmap] = useLoader(TextureLoader, [chickenIdle]);
  cmap.magFilter = NearestFilter;
  cmap.repeat.set(1 / 4, 1);
  cmap.offset.x = offsetX;
  return (
    <sprite {...props} scale={1}>
      <spriteMaterial map={cmap}></spriteMaterial>
    </sprite>
  );
}

const Experiment = () => {
  return (
    <div style={{ width: "98vw", height: "98vh" }}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {/* <Box position={[-1.2, 0, 0]} /> */}
        <Chicken position={[-1.2, 0, 0]} />
        {/* <Box position={[1.2, 0, 0]} /> */}
      </Canvas>
    </div>
  );
};

export default Experiment;
