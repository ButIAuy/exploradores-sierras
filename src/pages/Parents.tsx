import { useState, type FormEvent } from 'react';
import { PACKING, PARENTS_CODE, TALKS } from '../content/modules';
import { useStore } from '../state';
import Creditos from '../content/guia/Creditos';

export default function Parents() {
  const { gateOpen } = useStore();
  return (
    <main className="page" data-screen-label="Padres">
      {gateOpen ? <ParentsContent /> : <Gate />}
    </main>
  );
}

// Barrera simple del lado del cliente, no es seguridad real.
function Gate() {
  const { setGateOpen } = useStore();
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (code === PARENTS_CODE) setGateOpen(true);
    else setError(true);
  };

  return (
    <section className="cream-card gate">
      <div className="stripe" />
      <div className="eyebrow eyebrow--dark">Solo para adultos</div>
      <h1 className="gate__title">Acceso para padres</h1>
      <p className="gate__text">Ingresa el código que envió el colegio.</p>
      <form className="gate__form" onSubmit={submit}>
        <input
          className="gate__input"
          value={code}
          onChange={(e) => {
            setCode(e.target.value.replace(/\D/g, '').slice(0, 6));
            setError(false);
          }}
          inputMode="numeric"
          autoComplete="off"
          placeholder="Código"
          aria-label="Código"
          aria-invalid={error}
        />
        <button type="submit" className="gate__submit">
          Entrar
        </button>
      </form>
      {error && (
        <div className="gate__error" role="alert">
          Código incorrecto. Prueba de nuevo.
        </div>
      )}
    </section>
  );
}

function ParentsContent() {
  const { saved, persist, setGateOpen } = useStore();
  const nPacked = PACKING.filter((p) => saved.packed[p]).length;

  return (
    <div className="parents">
      <div className="parents__head">
        <div className="parents__heading">
          <div className="eyebrow">Para padres</div>
          <h1 className="parents__title">Campamento Form 1</h1>
        </div>
        <button className="pill-btn parents__exit" onClick={() => setGateOpen(false)}>
          Salir
        </button>
      </div>

      <section className="parents__section">
        <h2 className="h2-sm">Emergencias</h2>
        <div className="emergency-grid">
          <a href="tel:911" className="emergency emergency--orange">
            <span className="emergency__num">911</span>
            <span className="emergency__label">Emergencias · tocar para llamar</span>
          </a>
          <a href="tel:1722" className="emergency emergency--cream">
            <span className="emergency__num">1722</span>
            <span className="emergency__label">CIAT · Toxicología</span>
          </a>
        </div>
      </section>

      <section className="parents__section">
        <h2 className="h2-sm">Para hablar en casa</h2>
        <div className="talks">
          {TALKS.map((t, k) => (
            <div key={t.title} className="talk">
              <div className="talk__num">{k + 1}</div>
              <div className="talk__body">
                <div className="talk__title">{t.title}</div>
                <div className="talk__text">{t.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="parents__section">
        <div className="section-head section-head--flush">
          <h2 className="h2-sm">Lista para la mochila</h2>
          <div className="muted">{`${nPacked} de ${PACKING.length}`}</div>
        </div>
        <div className="packing">
          {PACKING.map((label) => {
            const done = !!saved.packed[label];
            return (
              <button
                key={label}
                className="pack-item"
                role="checkbox"
                aria-checked={done}
                onClick={() => persist({ packed: { ...saved.packed, [label]: !done } })}
              >
                {done ? <span className="pack-item__box pack-item__box--done">✓</span> : <span className="pack-item__box" />}
                <span className="pack-item__label">{label}</span>
              </button>
            );
          })}
        </div>
      </section>

      <Creditos />
    </div>
  );
}
