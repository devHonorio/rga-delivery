import ItemModal from "./itemModal";
import { SContExtern, SContainer } from "./styles";

export default function Modal({ active, setActive }) {
  return (
    <SContExtern data-active={active}>
      <SContainer>
        <ItemModal setActive={setActive} peso={0.6}>
          Bento cake 600g
        </ItemModal>
        <ItemModal setActive={setActive} peso={1.5}>
          1,5kg
        </ItemModal>
        <ItemModal setActive={setActive} peso={1.8}>
          1,8kg
        </ItemModal>
        <ItemModal setActive={setActive} peso={2}>
          2kg
        </ItemModal>
        <ItemModal setActive={setActive} peso={2.5}>
          2,5kg
        </ItemModal>
        <ItemModal setActive={setActive} peso={3}>
          3kg
        </ItemModal>
        <ItemModal setActive={setActive} peso={3.5}>
          3,5kg
        </ItemModal>
        <ItemModal setActive={setActive} peso={4}>
          4kg
        </ItemModal>
        <ItemModal setActive={setActive} peso={4.5}>
          4,5kg
        </ItemModal>
        <ItemModal setActive={setActive} peso={5}>
          5kg
        </ItemModal>
        <ItemModal setActive={setActive} peso={5.5}>
          5,5kg
        </ItemModal>
        <ItemModal setActive={setActive} peso={6}>
          6kg
        </ItemModal>
      </SContainer>
    </SContExtern>
  );
}
