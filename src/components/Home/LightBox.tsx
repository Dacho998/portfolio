import "./LightBox.css";

interface LightboxProps {
  src: string | null;
  onClose: () => void;
}

export default function Lightbox({ src, onClose }: LightboxProps) {
  if (!src) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <img src={src} alt="fullscreen" className="fullscreen-img" />
    </div>
  );
}
