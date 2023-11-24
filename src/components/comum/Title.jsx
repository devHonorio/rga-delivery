export default function Title({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
