import { Canvas, ThreeElements, useFrame, useLoader } from "@react-three/fiber";
import { NearestFilter, TextureLoader } from "three";
import chickenIdle from "../assets/sprites/chicken_idle_strip4.png";
import { useRef } from "react";

type AnimatedSpriteProps = {
  spriteOpts: ThreeElements["sprite"];
  animationSpeed: number;
  source: string;
  frames: number;
};

const AnimatedSprite = (opts: AnimatedSpriteProps) => {
  const t = useRef(0);
  const currentFrame = useRef(0);

  const [cmap] = useLoader(TextureLoader, [opts.source]);
  cmap.magFilter = NearestFilter;
  cmap.repeat.set(1 / opts.frames, 1);

  useFrame((_, delta) => {
    t.current += delta * opts.animationSpeed;

    if (t.current > opts.frames) {
      t.current = 0;
      currentFrame.current = (currentFrame.current + 1) % 4;
      cmap.offset.x = currentFrame.current / opts.frames;
    }
  });

  return (
    <sprite {...opts.spriteOpts}>
      <spriteMaterial map={cmap}></spriteMaterial>
    </sprite>
  );
};

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
        <AnimatedSprite
          spriteOpts={{
            position: [0, 0, 0],
            scale: 5,
          }}
          animationSpeed={20}
          source={chickenIdle}
          frames={4}
        />
      </Canvas>
    </div>
  );
};

export default Experiment;
