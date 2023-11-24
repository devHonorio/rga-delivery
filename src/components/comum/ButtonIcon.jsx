import Link from "next/link";
import * as S from "./styles";

export default function ButtonIcon({ icon, content, align, href = "" }) {
  return (
    <Link href={href}>
      <S.ButtonIcon className={align}>
        <S.DivIcon>{icon}</S.DivIcon>
        <S.Content>{content}</S.Content>
      </S.ButtonIcon>
    </Link>
  );
}
