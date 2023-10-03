import React, {useState, useEffect} from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { download } from '../assets';

import { AiPicker, ColorPicker, CusButtn, FilePicker, Tab } from '../components';


const Editor = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {!snap.intro && (
                <>
                {/* <motion.div
                    key = "custom"
                    className = "absolute top-0 left-0 z-10"
                    {...slideAnimation}
                >

                </motion.div> */}
                </>
            )}
        </AnimatePresence>
        
    )
}

export default Editor