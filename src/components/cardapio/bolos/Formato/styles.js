import tw from "tailwind-styled-components";

export const SContainer = tw.div`flex flex-col gap-10  xl:w-7/12 w-10/12 m-auto ${({
  className,
}) => className}`;

export const SUl = tw.div`flex flex-col gap-2 ${({ className }) => className}`;

export const SLi = tw.div`text-gray-800 ${({ className }) => className}`;

export const SContainerRedondo = tw.div`h-24 w-24 border  rounded-xl flex items-center justify-center cursor-pointer border-orange-500 bg-white data-[formato=redondo]:bg-orange-500 data-[formato=redondo]:border-white ${({
  className,
}) => className}`;

export const SContentRedondo = tw.div`h-16 w-16 font-bold border rounded-full flex justify-center items-center border-orange-500 data-[formato=redondo]:border-white data-[formato=redondo]:text-white ${({
  className,
}) => className}`;

export const SContainerRetangular = tw.div`rounded-xl flex items-center justify-center data-[formato=retangular]:bg-orange-500 data-[formato=retangular]:border-white border-orange-500 bg-white h-24 w-24 border cursor-pointer ${({
  className,
}) => className}`;

export const SContentRetangular = tw.div`h-10 w-14 font-bold border rounded-lg flex justify-center items-center border-orange-500 data-[formato=retangular]:border-white data-[formato=retangular]:text-white ${({
  className,
}) => className}`;
