import { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ICONS, MODULES } from '../content/modules';
import { useStore } from '../state';
import { CompassIcon, IconPath, MedalIcon, PeopleIcon } from './Icons';

export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isModule = pathname.startsWith('/modulo/');
  return (
    <header className="header">
      <div className="header__inner">
        {isModule && (
          <button className="header__back" onClick={() => navigate('/')} aria-label="Volver">
            ←
          </button>
        )}
        <img className="header__logo" src="/logo-exploradores.svg" alt="Exploradores de las sierras" />
        <div className="header__title">Exploradores de las sierras</div>
        <div className="header__pill">Form 1</div>
      </div>
    </header>
  );
}

export function BottomNav() {
  const { pathname } = useLocation();
  const exploreActive = pathname === '/' || pathname.startsWith('/modulo/');
  return (
    <nav className="bottom-nav" aria-label="Secciones">
      <div className="bottom-nav__inner">
        <NavLink to="/" className={() => 'tab' + (exploreActive ? ' tab--active' : '')}>
          <CompassIcon />
          <span>Explorar</span>
        </NavLink>
        <NavLink to="/insignias" className={({ isActive }) => 'tab' + (isActive ? ' tab--active' : '')}>
          <MedalIcon />
          <span>Insignias</span>
        </NavLink>
        <NavLink to="/padres" className={({ isActive }) => 'tab' + (isActive ? ' tab--active' : '')}>
          <PeopleIcon />
          <span>Padres</span>
        </NavLink>
      </div>
    </nav>
  );
}

// "Al cambiar de pantalla, scroll al inicio."
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function BadgeModal() {
  const { justEarned, closeEarn } = useStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!justEarned) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeEarn();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [justEarned, closeEarn]);

  const m = MODULES.find((x) => x.id === justEarned);
  if (!m) return null;
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal__card">
        <div className="eyebrow eyebrow--dark">¡Nueva insignia!</div>
        <div className="badge-xl" style={{ background: m.color, boxShadow: `0 0 0 4px ${m.color}, inset 0 0 0 8px rgba(255,255,255,.3)` }}>
          <div className="badge-xl__inner">
            <IconPath d={ICONS[m.id]} size={54} />
          </div>
        </div>
        <div className="modal__name" id="modal-title">{m.badge}</div>
        <div className="modal__actions">
          <button
            className="btn-dark"
            autoFocus
            onClick={() => {
              closeEarn();
              navigate('/insignias');
            }}
          >
            Ver mi pasaporte
          </button>
          <button className="btn-outline-cream" onClick={closeEarn}>
            Seguir
          </button>
        </div>
      </div>
    </div>
  );
}
