import type { MouseEventHandler } from "react";

type ButtonParams = {
    text: string,
    margin: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
};

export const Button = ({ text, margin, onClick }: ButtonParams) => {
    return (
        <button onClick={onClick} className={`h-10 w-full cursor-pointer gap-1 rounded-sm m-auto ${margin} flex items-center place-content-center`}>
            <div className="text-sm font-bold">{text}</div>
        </button>
    );
}
