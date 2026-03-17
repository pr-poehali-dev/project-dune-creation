import { Canvas, extend, useFrame } from "@react-three/fiber"
import { useAspect, useTexture } from "@react-three/drei"
import { useMemo, useRef, useState, useEffect } from "react"
import * as THREE from "three"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const TEXTUREMAP = { src: "https://i.postimg.cc/XYwvXN8D/img-4.png" }
const DEPTHMAP = { src: "https://i.postimg.cc/2SHKQh2q/raw-4.webp" }

extend(THREE as unknown as Record<string, unknown>)

const WIDTH = 300
const HEIGHT = 300

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src])
  const meshRef = useRef<THREE.Mesh>(null)

  const material = useMemo(() => {
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      uniform sampler2D uTexture;
      uniform sampler2D uDepthMap;
      uniform vec2 uPointer;
      uniform float uProgress;
      uniform float uTime;
      varying vec2 vUv;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vec2 uv = vUv;

        float depth = texture2D(uDepthMap, uv).r;
        vec2 displacement = depth * uPointer * 0.01;
        vec2 distortedUv = uv + displacement;

        vec4 baseColor = texture2D(uTexture, distortedUv);

        float aspect = ${WIDTH}.0 / ${HEIGHT}.0;
        vec2 tUv = vec2(uv.x * aspect, uv.y);
        vec2 tiling = vec2(120.0);
        vec2 tiledUv = mod(tUv * tiling, 2.0) - 1.0;

        float brightness = noise(tUv * tiling * 0.5);
        float dist = length(tiledUv);
        float dot = smoothstep(0.5, 0.49, dist) * brightness;

        float flow = 1.0 - smoothstep(0.0, 0.02, abs(depth - uProgress));

        // Purple-violet scanning overlay
        vec3 mask = vec3(dot * flow * 5.0, 0.0, dot * flow * 10.0);

        vec3 final = baseColor.rgb + mask;

        gl_FragColor = vec4(final, 1.0);
      }
    `

    return new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: rawMap },
        uDepthMap: { value: depthMap },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uProgress: { value: 0 },
        uTime: { value: 0 },
      },
      vertexShader,
      fragmentShader,
    })
  }, [rawMap, depthMap])

  const [w, h] = useAspect(WIDTH, HEIGHT)

  useFrame(({ clock, pointer }) => {
    if (material.uniforms) {
      material.uniforms.uProgress.value = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5
      material.uniforms.uPointer.value = pointer
      material.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  const scaleFactor = 0.3
  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
      <planeGeometry />
    </mesh>
  )
}

export const Hero3DWebGL = () => {
  const titleWords = "Beat Wave".split(" ")
  const subtitle = "Главный источник музыкальных новостей."
  const [visibleWords, setVisibleWords] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [delays, setDelays] = useState<number[]>([])
  const [subtitleDelay, setSubtitleDelay] = useState(0)

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07))
    setSubtitleDelay(Math.random() * 0.1)
  }, [titleWords.length])

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800)
      return () => clearTimeout(timeout)
    }
  }, [visibleWords, titleWords.length])

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
      </div>

      <div className="h-screen uppercase items-center w-full absolute z-[60] pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold font-orbitron">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? "fade-in" : ""}
                style={{
                  opacity: index < visibleWords ? 1 : 0,
                  animationDelay: `${delays[index] || 0}s`,
                }}
              >
                {index === 1 ? (
                  <span className="text-purple-500">{word}</span>
                ) : (
                  word
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-4 text-sm md:text-base lg:text-lg font-geist text-gray-300 tracking-widest normal-case ${subtitleVisible ? "fade-in-subtitle" : ""}`}
          style={{
            opacity: subtitleVisible ? 1 : 0,
            animationDelay: `${subtitleDelay}s`,
          }}
        >
          {subtitle}
        </div>

        <div
          className={`mt-2 text-xs md:text-sm font-geist text-purple-400/70 tracking-wider normal-case ${subtitleVisible ? "fade-in-subtitle" : ""}`}
          style={{ opacity: subtitleVisible ? 1 : 0, animationDelay: `${subtitleDelay + 0.2}s` }}
        >
          Релизы · Интервью · Чарты · Концерты
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 z-[70] flex gap-4"
        style={{
          transform: "translateX(-50%)",
          opacity: subtitleVisible ? 1 : 0,
          transition: "opacity 1s ease-out 0.5s",
          pointerEvents: subtitleVisible ? "auto" : "none",
        }}
      >
        <Button className="bg-purple-600 hover:bg-purple-700 text-white font-geist px-8 py-3 text-base border-0">
          Читать новости
        </Button>
        <Button variant="outline" className="border-purple-500/50 text-white hover:bg-purple-500/10 font-geist px-8 py-3 text-base bg-transparent">
          Подписаться
        </Button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene />
        </Canvas>
      </div>
    </div>
  )
}
