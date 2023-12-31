import tw from "tailwind-styled-components";

export const SContainer = tw.div`
flex items-center border border-gray-900 w-10/12
rounded-xl 
text-xs
py-1
md:py-2 md:text-sm
`;
export const SButtons = tw.button`
flex flex-1 justify-center items-center

`;

export const SQuantity = tw.input`
flex-1 w-6 text-center bg-transparent
placeholder:text-gray-900 py-0
border-x border-y-0 border-gray-900
`;
