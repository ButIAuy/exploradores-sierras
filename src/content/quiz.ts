import type { ModuleId } from './modules';

// Por tarjeta: [opción 1, opción 2, respuesta correcta (1 o 2)].
// Las claves son los números de tarjeta del prototipo (Nudos usa 1, 2 y 4).
export type QuizCard = [string, string, 1 | 2];

export const QUIZ: Record<ModuleId, Record<number, QuizCard>> = {
  plantas: { 1: ['Sí', 'No', 2], 2: ['Sí', 'No', 2], 3: ['Sí, en cualquiera', 'Primero miro', 2], 4: ['Si un adulto dice que sí', 'Sí, sin preguntar', 1] },
  fogon: { 1: ['Sí', 'No', 1], 2: ['Sí', 'No', 2], 3: ['Sí', 'No', 2], 4: ['Sí', 'No', 1] },
  nudos: { 1: ['Nudo llano', 'Nudo simple', 1], 2: ['Nudo simple', 'As de guía', 2], 4: ['As de guía', 'Nudo simple', 2] },
  serpientes: { 1: ['¡Cuidado!', 'Culebra', 2], 2: ['¡Cuidado!', 'Culebra', 1], 3: ['¡Cuidado!', 'Culebra', 2], 4: ['¡Cuidado!', 'Culebra', 1] },
};
