import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { download } from '../assets';

import { AiPicker, ColorPicker, CusButtn, FilePicker, Tab} from '../components';

const Editor = () => {
    const snap = useSnapshot(state);

    const [file, setFile] = useState('');

    const [prompt, setPrompt] = useState('');

    const [generatingImg, setGeneratingImg] = useState(false);

    const [activeEditorTab, setActiveEditorTab] = useState("");
    const [activeFilterTab, setActiveFilterTab] = useState({
        logoShirt: true,
        stylishShirt: false,
    })

    const generateTabContent = () => {
        switch (activeEditorTab){
            case "colorpicker":
                return <ColorPicker />
            
            case "filepicker":
                return <FilePicker />
            
            case "aipicker":
                return <AiPicker />
            
            default:
                return null;
        }
    }

    return (
        <AnimatePresence>
            {!snap.intro && (
                <>
                <motion.div 
                key='custom' 
                className ="absolute top-0 left-0 z-10" 
                {...slideAnimation('left')}
                >
                    <div className='flex items-center min-h-screen'>
                        <div className='editortabs-container tabs'>
                            {EditorTabs.map((tab) =>(
                            <Tab
                                key={tab.name}
                                tab={tab}
                                handleClick={() =>  setActiveEditorTab(tab.name)}
                            />
                            ))}

                            {generateTabContent()}
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='absolute z-10 top-5 right-5'
                    {...fadeAnimation}>
                    <CusButtn
                        type='filled'
                        title='Home'
                        handleClick={() => state.intro = true}
                        customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                        />
                </motion.div>
                <motion.div
                    className='filtertabs-container'
                    {...slideAnimation('up')}
                >
                {FilterTabs.map((tab) =>(
                        <Tab
                            key={tab.name}
                            tab={tab}
                            isFilterTab
                            isActiveTab
                            handleClick={() =>  {}}
                        />
                        ))}
                </motion.div>
                </>
            )}
        </AnimatePresence>
        
    )
}

export default Editor