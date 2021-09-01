import { Canvas } from '@react-three/fiber'
import React, { FC } from 'react'
export const Scene:FC = () => {
  return(
    <Canvas>
      <ambientLight position={[0,0,3]}/>
    </Canvas>
  )
}