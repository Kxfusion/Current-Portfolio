export const generatePageText = (paragraphs: string[]) => paragraphs.map(text => {
    return <p className="grow-1 p-5 w-full lg:w-[50%] text-justify text-gray-300">{text}</p>;
});

export const imageGenerator = (source: string, customRule?: string) => <img className={`${customRule} grow-0 w-full lg:w-[40%] m-auto p-5`} src={source} />