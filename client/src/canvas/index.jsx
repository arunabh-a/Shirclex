import React from 'react'
import { Canvas } from '@react-three/fiber'
import {Environment, Center} from '@react-three/drei'

import Shirt from './Shirt'
import CameraRig from './CameraRig'
import Backdrop from './Backdrop'

const CanvasContainer = () => {
  return (
      <Canvas>
        <ambientLight intensity={0.5} />
        <Environment preset='city' />

        <CameraRig>
          {/* <Backdrop /> */}
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
  )
}

export default CanvasContainer