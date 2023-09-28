import { proxy } from 'valtio';

const state = proxy({
     intro: true,
     color: '#0C0921',
     isLogoTexture : true,
     isFullTexture : false,
     logoDecal : './threejs.png',
     fullDecal : './threejs.png',

})