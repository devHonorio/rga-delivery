export default function Informacoes({ title, description, href }) {
  return (
    <a href={href} target="_blank" className="lg:w-1/4">
      <h1 className="font-bold text-orange-400 text-xs">{title}</h1>
      <p className="text-sm">{description}</p>
    </a>
  );
}
