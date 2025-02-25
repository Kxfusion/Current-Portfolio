import { generatePageText, imageGenerator } from "@/app/utils";
import Link from "next/link";

export const TodoApp = () => {
    const paragraphs = [
        "A recent project I undertook to experiment with TailwindCSS, Next.js, and Prisma. The function of this app is to present a working dashboard of tasks that can be marked off as complete/incomplete, deleted, or edited. It consists of two pages with a consistent layout and clear boundaries to allow for as much static rendering as possible.",
        "The project is hosted on Vercel via both a Next.js deployment for the frontend and a RESTful Express API deployment that connects to a postgreSQL database hosted on NeonDB. Both deployments automatically redeploy on a Github connection watching the main branch. The results of GET requests are cached by the Next.js deployment’s backend and only revalidated if the user makes a change.",
        "The frontend features a custom palette and the Inter font using Tailwind for a unified theme and class structure across components. The backend uses Typescript type guards for validation and Prisma to handle database operations and migrations. The overriding goal behind all of these architectural decisions was to keep the codebase light and DRY but not sacrifice usability or security. Thus there are few additional dependencies with only React-Form-Hooks on the frontend for a lightweight form validator."
    ];

    const pageText = generatePageText(paragraphs);

    const images = [
        imageGenerator("Task Dashboard.PNG"),
        imageGenerator("Todo App.svg"),
        imageGenerator("Task Create.PNG")
    ];

    return (
        <div className="flex flex-wrap place-items-center pt-20">
            <Link 
                href="https://task-app-sandy-six.vercel.app/"
                className="w-full m-auto pb-2 pt-2 text-center text-md/16 text-blue-400 bg-gray-800"
            >
                Click Here For Demo
            </Link>
            {pageText[0]}
            {images[0]}
            {images[1]}
            {pageText[1]}
            {pageText[2]}
            {images[2]}
        </div>
    );
}