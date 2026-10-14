import { useNavigate } from 'react-router-dom';
import { ICONS, MODULES } from '../content/modules';
import { useStore } from '../state';
import { IconPath, LockIcon, PhoneIcon } from '../components/Icons';

export default function Home() {
  const { saved, persist } = useStore();
  const navigate = useNavigate();
  const nVisited = MODULES.filter((m) => saved.visited[m.id]).length;

  return (
    <main className="page" data-screen-label="Inicio">
      <section className="hero">
        <div className="stripe" />
        <div className="eyebrow">Form 1 · 2026</div>
        <h1 className="hero__title">
          Guía para exploradores de las <span className="accent">sierras</span>
        </h1>
        <p className="hero__text">Todo lo que aprendemos para ir al campamento. Léanla juntos en casa.</p>
        <img className="hero__shield" src="/escudo-st-brendans.png" alt="Saint Brendan's School" />
      </section>

      {!saved.installDismissed && (
        <section className="install">
          <div className="install__icon">
            <PhoneIcon />
          </div>
          <div className="install__body">
            <div className="install__title">Llévala en el celular</div>
            <div className="install__text">
              Toca <strong>Compartir → Agregar a pantalla de inicio</strong>. Funciona sin señal en la sierra.
            </div>
            <button className="pill-btn install__ok" onClick={() => persist({ installDismissed: true })}>
              Entendido
            </button>
          </div>
        </section>
      )}

      <div className="section-head">
        <h2 className="section-head__title">Módulos</h2>
        <div className="muted">{`${nVisited} de ${MODULES.length} vistos`}</div>
      </div>

      <div className="module-list">
        {MODULES.map((m, k) => {
          const earned = !!saved.earned[m.id];
          const visited = !!saved.visited[m.id];
          return (
            <button key={m.id} className="module-card" onClick={() => navigate(`/modulo/${m.id}`)}>
              <div className="module-card__num">{k + 1}</div>
              <div className="module-card__body">
                <div className="module-card__title">{m.title}</div>
                <div className="module-card__desc">{m.desc}</div>
              </div>
              {earned ? (
                <div className="badge-sm" style={{ background: m.color }} title="Insignia ganada">
                  <IconPath d={ICONS[m.id]} size={22} width={2.2} />
                </div>
              ) : visited ? (
                <div className="tag tag--seen">Visto ✓</div>
              ) : (
                <div className="tag tag--new">Nuevo</div>
              )}
            </button>
          );
        })}

        <div className="module-locked">
          <div className="module-locked__icon">
            <LockIcon />
          </div>
          <div className="module-card__body">
            <div className="module-locked__title">Form 2 · 2027</div>
            <div className="module-locked__text">Nuevos módulos cuando pasen de grado.</div>
          </div>
        </div>
      </div>
    </main>
  );
}
