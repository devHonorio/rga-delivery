import * as S from "./styles";

export default function Button({
  bgColor = "white",
  color = "black",
  content,
  onClick,
  type,
  className,
}) {
  return (
    <S.Button
      onClick={onClick}
      className={`bg-${bgColor} text-${color} ${className}`}
      type={type}
    >
      {content}
    </S.Button>
  );
}
