import tw from "tailwind-styled-components";

export const Label = tw.label`font-medium group`;

export const ContainerP = tw.div`text-sm`;

export const Selecionado = tw.span`text-green-400 font-semibold flex items-center gap-1`;

export const ButtonsCard = tw.div`items-center font-semibold hidden group-hover:flex`;

export const BtnCarriho = tw.button`
h-8 w-8 rounded-xl
items-center justify-center
bg-white shadow-3xl
hidden group-hover:flex
active:bg-transparent active:border-white active:border
`;
