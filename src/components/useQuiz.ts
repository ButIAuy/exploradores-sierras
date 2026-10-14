import { useEffect } from 'react';
import type { ModuleId } from '../content/modules';
import { QUIZ } from '../content/quiz';
import { useStore } from '../state';

export interface CardVals {
  o1: string;
  o2: string;
  right: boolean;
  wrong: boolean;
  open: boolean;
  pick1: () => void;
  pick2: () => void;
  retry: () => void;
}

export interface QuizVals {
  c: Record<number, CardVals>;
  score: string;
}

// Lógica del juego de un módulo, igual que en el prototipo:
// cada tarjeta está abierta, correcta o incorrecta (con reintento).
export function useQuiz(id: ModuleId): QuizVals {
  const { answers, setAnswer, earnBadge } = useStore();
  const game = QUIZ[id];
  const picks = answers[id] || {};
  const keys = Object.keys(game).map(Number);

  const c: Record<number, CardVals> = {};
  let ok = 0;
  for (const k of keys) {
    const [o1, o2, correct] = game[k];
    const pick = picks[k];
    const right = pick === correct;
    if (right) ok++;
    c[k] = {
      o1, o2, right,
      wrong: !right && pick != null,
      open: !right && pick == null,
      pick1: () => setAnswer(id, k, 1),
      pick2: () => setAnswer(id, k, 2),
      retry: () => setAnswer(id, k, null),
    };
  }
  const allRight = ok === keys.length;

  useEffect(() => {
    if (allRight) earnBadge(id);
  }, [allRight, id, earnBadge]);

  return { c, score: allRight ? '★ ¡Todas bien! Insignia ganada' : `${ok} de ${keys.length} bien` };
}
