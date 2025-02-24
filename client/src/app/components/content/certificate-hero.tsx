export const CertificateHero = () => {
    const paragraphs = [
        "In early 2021, I joined the team at Certificate Hero to help create a truly modern Certificate of Issuance platform. Initially the team was focused on putting together a MVP to demo and my contributions in the first couple of months included a sign-up/sign-in flow and the original dashboard. Additionally, I quickly made my way into a leadership role through my contributions to the architectural structure of the core application and mentorship of other engineers.",
        "One of my major contributions was a rich templating system for converting industry standard ACORD forms into web forms and back into PDFs. This required multiple layers of templating including an appearance which mimicked the original form, standardized validation rules, and the interoperability and hydration of PDF, web form, and database data. I led my team to continually expand and automate the templating process to support quicker adoption of new forms and handling many of the more esoteric styles of form.",
        "In my leadership role, I worked heavily with the team to create an onboarding process that automatically pulled in and scraped forms with existing data and automatically reconstructed them in our system. This was accomplished with AWS’s queueing service and lambdas to create a scalable set of services that could be spun up in the thousands during such a migration and then spun down immediately afterwards giving us speed without an expensive persistent instance. In this process, we utilized OCRing services to scrape data from the forms and then a series of mappers to normalize the data.",
        "After the team got hit with layoffs in 2024, I took some time to recover from a rough bout of long COVID and I am currently still looking to find a new team to collaborate with and continue my journey."
    ];

    const pageText = paragraphs.map(text => {
        return <p className="grow-1 p-5 w-full lg:w-[50%] text-justify text-gray-300">{text}</p>;
    })

    const imageGenerator = (source: string, customRule?: string) => <img className={`${customRule} grow-0 w-full lg:w-[40%] m-auto p-5`} src={source} />

    const images = [
        imageGenerator("CertificateHero-Logo.png", "hidden lg:block"),
        imageGenerator("GL Web Form Example.gif"),
        imageGenerator("Migration Flow.svg")
    ];

    return (
        <div className="flex flex-wrap place-items-center pt-20">
            {pageText[0]}
            {images[0]}
            {images[1]}
            {pageText[1]}
            {pageText[2]}
            {images[2]}
            {pageText[3]}
        </div>
    );
}
