import { writable } from 'svelte/store';
import type { AnimationScript } from '@models/index';

export const animationScripts = writable<AnimationScript[]>([])