// Fotos opcionales: src/content/fotos/<id>.{jpg,jpeg,png,webp}
// (ids: planta-coronilla, fuego-yesca, nudo-simple, …). Si no hay foto para un id,
// se muestra el marcador del prototipo. Las que existen se empaquetan y precachean.
const FILES = import.meta.glob('../content/fotos/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const PHOTOS: Record<string, string> = {};
for (const [file, url] of Object.entries(FILES)) {
  PHOTOS[file.replace(/^.*\//, '').replace(/\.\w+$/, '')] = url;
}

interface Props {
  id: string;
  placeholder: string;
  radius?: number;
  fit?: 'cover' | 'contain';
}

export function ImageSlot({ id, placeholder, radius = 12, fit = 'cover' }: Props) {
  const src = PHOTOS[id];
  if (src) {
    return (
      <img
        className="image-slot"
        src={src}
        alt={placeholder.replace(/^Foto o dibujo: /, '')}
        loading="lazy"
        style={{ objectFit: fit, borderRadius: radius }}
      />
    );
  }
  return (
    <div className="image-slot image-slot--empty" style={{ borderRadius: radius }}>
      <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21" />
      </svg>
      <span>{placeholder}</span>
    </div>
  );
}
