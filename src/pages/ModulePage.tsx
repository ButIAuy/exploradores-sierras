import { useEffect, type ComponentType } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { ICONS, MODULES, type ModuleId } from '../content/modules';
import { useStore } from '../state';
import { useQuiz, type QuizVals } from '../components/useQuiz';
import { IconPath } from '../components/Icons';
import Plantas from '../content/guia/Plantas';
import Fogon from '../content/guia/Fogon';
import Nudos from '../content/guia/Nudos';
import Serpientes from '../content/guia/Serpientes';

const CONTENT: Record<ModuleId, ComponentType<{ quiz: QuizVals }>> = {
  plantas: Plantas,
  fogon: Fogon,
  nudos: Nudos,
  serpientes: Serpientes,
};

export default function ModulePage() {
  const { id } = useParams();
  const i = MODULES.findIndex((m) => m.id === id);
  if (i < 0) return <Navigate to="/" replace />;
  return <ModuleView key={MODULES[i].id} i={i} />;
}

function ModuleView({ i }: { i: number }) {
  const mod = MODULES[i];
  const { saved, markVisited } = useStore();
  const navigate = useNavigate();
  const quiz = useQuiz(mod.id);
  const Content = CONTENT[mod.id];
  const earned = !!saved.earned[mod.id];
  const prev = MODULES[i - 1];
  const next = MODULES[i + 1];

  // Abrir un módulo lo marca como "visto".
  useEffect(() => markVisited(mod.id), [mod.id, markVisited]);

  return (
    <div data-screen-label="Módulo">
      <div className="module-head">
        <div className="eyebrow">{`Módulo ${i + 1} de ${MODULES.length}`}</div>
        <h1 className="module-head__title">{mod.title}</h1>
      </div>

      <main className="guia">
        <Content quiz={quiz} />
      </main>

      <div className="module-foot">
        {earned ? (
          <button className="badge-row badge-row--earned" onClick={() => navigate('/insignias')}>
            <div className="badge-md" style={{ background: mod.color }}>
              <IconPath d={ICONS[mod.id]} size={30} width={2.2} />
            </div>
            <div className="badge-row__body">
              <div className="badge-row__eyebrow">Insignia ganada</div>
              <div className="badge-row__name">{mod.badge}</div>
            </div>
            <div className="badge-row__link">Ver pasaporte →</div>
          </button>
        ) : (
          <div className="badge-row badge-row--pending">
            <div className="badge-md badge-md--pending">
              <IconPath d={ICONS[mod.id]} size={30} width={2.2} stroke="#5C6E60" />
            </div>
            <div className="badge-row__body">
              <div className="badge-row__pending-name">{`Insignia: ${mod.badge}`}</div>
              <div className="badge-row__hint">Da vuelta todas las tarjetas del juego para ganarla.</div>
            </div>
          </div>
        )}
      </div>

      <div className="module-nav">
        {prev && (
          <button className="nav-btn nav-btn--prev" onClick={() => navigate(`/modulo/${prev.id}`)}>
            {`← ${prev.title}`}
          </button>
        )}
        {next ? (
          <button className="nav-btn nav-btn--next" onClick={() => navigate(`/modulo/${next.id}`)}>
            {`${next.title} →`}
          </button>
        ) : (
          <button className="nav-btn nav-btn--next" onClick={() => navigate('/')}>
            Volver al inicio
          </button>
        )}
      </div>
    </div>
  );
}
