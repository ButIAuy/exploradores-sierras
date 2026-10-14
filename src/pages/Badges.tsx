import { useNavigate } from 'react-router-dom';
import { ICONS, MODULES } from '../content/modules';
import { useStore } from '../state';
import { IconPath } from '../components/Icons';

export default function Badges() {
  const { saved, persist } = useStore();
  const navigate = useNavigate();
  const nEarned = MODULES.filter((m) => saved.earned[m.id]).length;
  const pct = Math.round((nEarned / MODULES.length) * 100);

  return (
    <main className="page" data-screen-label="Insignias">
      <section className="cream-card passport">
        <div className="stripe" />
        <div className="passport__top">
          <div className="eyebrow eyebrow--dark">Pasaporte de explorador</div>
          <img src="/escudo-st-brendans.png" alt="" className="passport__shield" />
        </div>
        <input
          className="passport__name"
          value={saved.name}
          onChange={(e) => persist({ name: e.target.value.slice(0, 30) })}
          maxLength={30}
          placeholder="Escribe tu nombre"
          aria-label="Nombre del explorador"
        />
        <div className="progress">
          <div className="progress__track" role="progressbar" aria-valuemin={0} aria-valuemax={MODULES.length} aria-valuenow={nEarned}>
            <div className="progress__fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="progress__text">{`${nEarned} de ${MODULES.length}`}</div>
        </div>
        <div className="passport__foot">Form 1 · 2026</div>
      </section>

      {nEarned === MODULES.length && (
        <div className="done-banner">¡Completaste Form 1! Ya estás listo para el campamento.</div>
      )}

      <div className="badge-grid">
        {MODULES.map((m) => {
          const earned = !!saved.earned[m.id];
          return (
            <button key={m.id} className="badge-tile" onClick={() => navigate(`/modulo/${m.id}`)}>
              {earned ? (
                <div className="badge-lg" style={{ background: m.color, boxShadow: `0 0 0 3px ${m.color}, inset 0 0 0 6px rgba(255,255,255,.3)` }}>
                  <div className="badge-lg__inner">
                    <IconPath d={ICONS[m.id]} size={40} />
                  </div>
                </div>
              ) : (
                <div className="badge-lg badge-lg--locked">
                  <IconPath d={ICONS[m.id]} size={40} stroke="#3E5444" />
                </div>
              )}
              <div className="badge-tile__name">{m.badge}</div>
              <div className="badge-tile__hint">{(earned ? 'Ganada en ' : 'Juega en ') + m.title}</div>
            </button>
          );
        })}
      </div>
    </main>
  );
}
