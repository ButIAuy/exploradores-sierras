import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import type { ModuleId } from './content/modules';

const KEY = 'exploradores-app-v1';

export interface Saved {
  visited: Partial<Record<ModuleId, boolean>>;
  earned: Partial<Record<ModuleId, boolean>>;
  packed: Record<string, boolean>;
  installDismissed: boolean;
  name: string;
}

// Respuestas de los juegos: módulo → tarjeta → opción elegida (1 | 2).
export type Answers = Partial<Record<ModuleId, Record<number, 1 | 2 | null>>>;

function load(): Saved {
  let s: Partial<Saved> = {};
  try {
    s = JSON.parse(localStorage.getItem(KEY) || '{}') || {};
  } catch {
    // localStorage bloqueado o JSON inválido: arrancamos vacío.
  }
  return {
    visited: s.visited || {},
    earned: s.earned || {},
    packed: s.packed || {},
    installDismissed: !!s.installDismissed,
    name: typeof s.name === 'string' ? s.name : '',
  };
}

interface Store {
  saved: Saved;
  persist: (patch: Partial<Saved>) => void;
  markVisited: (id: ModuleId) => void;
  earnBadge: (id: ModuleId) => void;
  // Estado de sesión (no persistido)
  justEarned: ModuleId | null;
  closeEarn: () => void;
  answers: Answers;
  setAnswer: (id: ModuleId, card: number, pick: 1 | 2 | null) => void;
  gateOpen: boolean;
  setGateOpen: (open: boolean) => void;
}

const Ctx = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [saved, setSaved] = useState<Saved>(load);
  const [justEarned, setJustEarned] = useState<ModuleId | null>(null);
  const [answers, setAnswers] = useState<Answers>({});
  const [gateOpen, setGateOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(saved));
    } catch {
      // Sin almacenamiento: la app sigue funcionando en memoria.
    }
  }, [saved]);

  const persist = useCallback((patch: Partial<Saved>) => setSaved((s) => ({ ...s, ...patch })), []);

  const markVisited = useCallback((id: ModuleId) => {
    setSaved((s) => (s.visited[id] ? s : { ...s, visited: { ...s.visited, [id]: true } }));
  }, []);

  const savedRef = useRef(saved);
  useEffect(() => {
    savedRef.current = saved;
  }, [saved]);

  const earnBadge = useCallback((id: ModuleId) => {
    if (savedRef.current.earned[id]) return;
    savedRef.current = { ...savedRef.current, earned: { ...savedRef.current.earned, [id]: true } };
    setSaved((s) => ({ ...s, earned: { ...s.earned, [id]: true } }));
    setJustEarned(id);
  }, []);

  const setAnswer = useCallback((id: ModuleId, card: number, pick: 1 | 2 | null) => {
    setAnswers((a) => ({ ...a, [id]: { ...(a[id] || {}), [card]: pick } }));
  }, []);

  const value = useMemo<Store>(
    () => ({
      saved, persist, markVisited, earnBadge,
      justEarned, closeEarn: () => setJustEarned(null),
      answers, setAnswer, gateOpen, setGateOpen,
    }),
    [saved, persist, markVisited, earnBadge, justEarned, answers, setAnswer, gateOpen],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const s = useContext(Ctx);
  if (!s) throw new Error('useStore fuera de StoreProvider');
  return s;
}
