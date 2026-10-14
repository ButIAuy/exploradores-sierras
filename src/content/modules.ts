export type ModuleId = 'plantas' | 'fogon' | 'nudos' | 'serpientes';

export interface ModuleInfo {
  id: ModuleId;
  title: string;
  desc: string;
  badge: string;
  color: string;
}

// Paths SVG 24×24 (trazo 2) de cada insignia.
export const ICONS: Record<ModuleId, string> = {
  plantas: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12',
  fogon: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z',
  nudos: 'M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z',
  serpientes: 'M3 19c2.5 0 3-4 6-4s3.5 4 6 4 3.5-3 1.5-6-2-7 2.5-7 M19 6h2',
};

export const MODULES: ModuleInfo[] = [
  { id: 'plantas', title: 'Plantas de las sierras', desc: 'Árboles con espinas, plantas que pican y plantas amigas.', badge: 'Explorador de plantas', color: '#7FA65E' },
  { id: 'fogon', title: 'El fogón', desc: 'Elegir el lugar, armarlo y apagarlo bien.', badge: 'Guardián del fogón', color: '#E08A2E' },
  { id: 'nudos', title: 'Nudos', desc: 'Nudo simple, nudo llano y as de guía.', badge: 'Maestro de nudos', color: '#D4B47A' },
  { id: 'serpientes', title: 'Serpientes', desc: 'Cómo reconocerlas y qué hacer si ves una.', badge: 'Ojo de serpiente', color: '#D2694F' },
];

export const TALKS = [
  { title: 'Plantas', text: '¿Qué planta te puede picar? ¿Qué haces si te arde?' },
  { title: 'Fogón', text: '¿Quién prende el fuego? ¿Cómo lo apagamos antes de irnos?' },
  { title: 'Nudos', text: 'Practiquen juntos el nudo llano con dos cordones.' },
  { title: 'Serpientes', text: 'Si ves una serpiente: quieto, alejarse despacio y avisar.' },
];

export const PACKING = ['Gorro', 'Protector solar', 'Repelente', 'Botella de agua', 'Calzado cerrado', 'Linterna', 'Abrigo para la noche'];

export const PARENTS_CODE = '2026';
