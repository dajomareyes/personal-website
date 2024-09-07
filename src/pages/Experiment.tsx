import { Canvas, ThreeElements, useFrame, useLoader } from "@react-three/fiber";
import { NearestFilter, TextureLoader } from "three";
import chickenIdle from "../assets/sprites/chicken_idle_strip4.png";
import { useRef, useState } from "react";

type AnimatedSpriteProps = {
  spriteOpts: ThreeElements["sprite"];
  animationSpeed: number;
  source: string;
  frames: number;
};

const AnimatedSprite = (opts: AnimatedSpriteProps) => {
  const t = useRef(0);
  const currentFrame = useRef(0);
  const [x, setX] = useState(0);
  const [direction, setDirection] = useState(1);

  const [cmap] = useLoader(TextureLoader, [opts.source]);
  cmap.magFilter = NearestFilter;
  cmap.repeat.set(1 / opts.frames, 1);

  useFrame((_, delta) => {
    t.current += delta * opts.animationSpeed;

    if (t.current > opts.frames) {
      t.current = 0;
      currentFrame.current = (currentFrame.current + 1) % 4;
      cmap.offset.x = currentFrame.current / opts.frames;
      setX(x + direction * 0.2);
      console.log(x, direction);
    }

    if (x > 10) {
      cmap;
      setDirection(-1);
    }

    if (x < -10) {
      setDirection(1);
    }
  });

  return (
    <sprite {...opts.spriteOpts} position={[x, 0, 0]}>
      <spriteMaterial map={cmap}></spriteMaterial>
    </sprite>
  );
};

// const getRandomNumber = (min: number, max: number) => {
//   return Math.random() * (max - min) + min;
// };

const Experiment = () => {
  // const spawn = [];
  //
  // for (let i = 0; i < 500; i++) {
  //   spawn.push([getRandomNumber(-10, 10), getRandomNumber(-5, 5), 0]);
  // }

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
        {/* {spawn.map((pos, i) => { */}
        {/*   return ( */}
        {/*     <AnimatedSprite */}
        {/*       key={i} */}
        {/*       spriteOpts={{ */}
        {/*         position: [pos[0], pos[1], pos[2]], */}
        {/*         scale: 1.5, */}
        {/*       }} */}
        {/*       animationSpeed={20} */}
        {/*       source={chickenIdle} */}
        {/*       frames={4} */}
        {/*     /> */}
        {/*   ); */}
        {/* })} */}

        <AnimatedSprite
          key={0}
          spriteOpts={{
            scale: 1.5,
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
