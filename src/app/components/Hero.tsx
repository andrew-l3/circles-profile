'use client'
import '../css/hero.scss';
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Model from './Render';

function Hero() {
    return (
        <section className='flex flex-1 justify-center align-middle items-center'>
            <div className='flex flex-col justify-center align-middle items-center gap-4'>
                <div className='sc absolute justify-center items-center align-middle'>
                    <Canvas className='cnv'>
                        <Model scale={1.3} />
                        <Environment files="./blue_lagoon_night_4k.hdr" />
                    </Canvas>
                </div>
                <div className='hero-info inline-flex justify-center align-middle items-center gap-4 py-1.5 px-4'>
                    <p className='feature-sub'>Web Developer</p>
                    <p className='feature-sub'>&bull;</p>
                    <p className='feature-sub'>Master of Information Technology</p>
                    <p className='feature-sub'>&bull;</p>
                    <p className='feature-sub'>Touch Football</p>
                </div>
            </div>
        </section>
    )
}

export default Hero