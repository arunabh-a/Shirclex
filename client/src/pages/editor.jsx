import React, {useState, useEffect} from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { download } from '../assets';

import { AiPicker, ColorPicker, FilePicker, Tab } from '../components';


const Editor = () => {
    return (
        <div>Editor</div>
    )
}

export default Editor