import '@openvoxproject/voxblocks';
import '@openvoxproject/voxblocks/voxblocks.css';
import './site.css';
import { initGrain } from './grain.js';

initGrain();
document.documentElement.setAttribute('data-vox-ready', '');
