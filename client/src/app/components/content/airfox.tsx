import { generatePageText, imageGenerator } from "@/app/utils";

export const Airfox = () => {
    const paragraphs = [
        "After freelancing and personal projects, in 2019, Airfox became my entry point into software engineering as a profession. Initially they were looking to take on a capable intern or two but I became a productive member of the team very quickly. After about a month, I had cemented my place on the team and was hired on as a full engineer.",
        "During that time, I worked on the Internal Tools team which was tasked with creating a user-friendly interface for support agents working with customers of the BanQi banking app that the company was developing for Via Varejo, a major Brazilian retailer. We utilized Vue 2 with VueX for state management and Cypress for testing to build out the frontend. On the backend, we connected to a variety of Kubernetes pods running Node.js instances via an API Gateway and Kafka queues to access and change a variety of domain specific information such as user information and transaction histories.",
        "Additionally I worked with product and marketing to instrument and surface analytics information using platforms like Amplitude and Clevertap. Occasionally, this collaboration required working with data visualizations directly off of a replica of our PostgreSQL database in Grafana or Looker to create informational charts to use in combination with analytics event analysis to show app feature usage and engagement. With such a talented team, the app was a runaway success and Via Varejo acquired the company. Then during the pandemic in early 2021, the company transferred most of its operations to Brazil and the US team had to part ways."
    ];

    const pageText = generatePageText(paragraphs);

    const images = [
        imageGenerator("Airfox.png", "hidden lg:block"),
        imageGenerator("Banqi_2020.png")
    ];

    return (
        <div className="flex flex-wrap place-items-center pt-20">
            {pageText[0]}
            {images[0]}
            {images[1]}
            {pageText[1]}
            {pageText[2]}
        </div>
    );
}