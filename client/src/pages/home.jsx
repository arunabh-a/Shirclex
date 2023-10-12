import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import React from 'react'
import { CusButtn } from '../components';

import { 
    headContainerAnimation,
    headContentAnimation,
    slideAnimation,
    headTextAnimation,
} from '../config/motion'



const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.div className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img src="./threejs.png" alt="logo" className='w-10 h-1- object-contain' />
                    </motion.header>
                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text'>
                                Style <br/> Yourself
                            </h1>
                        </motion.div>
                        <motion.div className='flex flex-col gap-5' {...headContentAnimation} >
                            <p className='max-w-md font-normal text-gray-600 text-base'>
                                Design your Unique Shirt with this user-friendly <strong>3D Shirt Editor</strong>{" "}
                            </p>

                            <CusButtn
                                type="filled" title='Edit your Shirt'
                                handleClick={() => state.intro = false}
                                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )
            }
        </AnimatePresence>

    )
}

export default Home