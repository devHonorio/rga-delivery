import tw from "tailwind-styled-components";

export const SContainerCard = tw.div`bg-white
p-2
rounded-3xl
flex
flex-col
items-center
gap-2
shadow-sm
md:p-3
hover:bg-orange-400
transition-all
animate-fade-up
animate-once
animate-duration-[1s]
animate-ease-in-out
animate-normal
cursor-pointer
group
h-min`;

export const STitle = tw.h2`text-xs text-orange-500 font-bold pl-2 lg:text-base group-checked:text-white group-hover:text-white
md:text-sm
`;

export const SPrice = tw.div`lg:text-xl text-xs md:text-sm`;
