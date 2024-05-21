'use client'
import '../css/hero.scss';
import dynamic from 'next/dynamic'
 
const Env = dynamic(() => import('../components/Env'), {
    loading: () => <p className='plh'>{"Hey, it's me."}</p>,
})

function Hero() {
    return (
        <section className='flex flex-1 justify-center align-middle items-center'>
            <div className='flex flex-col justify-center align-middle items-center gap-4'>
                <div className='sc absolute justify-center items-center align-middle'>
                    <Env />
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