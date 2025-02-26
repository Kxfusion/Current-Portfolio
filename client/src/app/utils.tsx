import Image from "next/image";

export const generatePageText = (paragraphs: string[]) => paragraphs.map((text, index) => {
    return <p key={index} className="grow-1 p-5 w-full lg:w-[50%] text-justify text-gray-300">{text}</p>;
});

export const imageGenerator = (source: string, customRule?: string) => <Image className={`${customRule} grow-0 w-full lg:w-[40%] m-auto p-5`} width={0} height={0} sizes="(max-width: 1024) 100vw, 33vw" alt={source} src={`/${source}`} />