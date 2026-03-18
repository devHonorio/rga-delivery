import tw from "tailwind-styled-components";

export const SContainer = tw.div`
bg-orange-50 flex gap-5 py-5 px-2
`;

export const SName = tw.div`
font-semibold text-sm
`;

export const SPrice = tw.div`
text-lg font-bold text-orange-400
`;

export const SContainerButtonsQuantity = tw.div`
border border-gray-800 rounded-2xl
p-2
flex items-center divide-x divide-gray-800
`;

export const SButtonsQuantity = tw.button`
 px-2
font-semibold
`;

export const SContQuantity = tw.div`
px-3
`;
