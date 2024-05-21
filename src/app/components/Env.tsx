'use client'
import '../css/hero.scss';
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Render from './Render';

function Env() {
    return (
        <Canvas className='cnv'>
            <Render scale={1.3} />
            <Environment files="./background.jpg" />
        </Canvas>
    )
}

export default Env