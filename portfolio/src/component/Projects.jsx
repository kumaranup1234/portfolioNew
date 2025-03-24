import React from 'react';


const Projects = () => {
    const projects = [
        {
            title: "Trim URL",
            description: "Developed a scalable URL shortener application using the MERN stack with a robust analytics dashboard powered by Chart.js. Features include URL management, QR code generation for easy sharing, and One-Link management for aggregating multiple links. Implemented secure user authentication using JWT and a password recovery system with NodeMailer.",
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS", "JWT", "NodeMailer"],
            github: "https://github.com/kumaranup1234/url-shortner",
            liveSite: "https://trimat.vercel.app/"
        },
        {
            title: "Contest Tracker",
            description: "Built a web-based contest tracker using the MERN stack that aggregates contests from Codeforces, LeetCode, and CodeChef. Integrated the Google Calendar API for scheduling contest reminders and developed an automatic YouTube video assigner using a Vercel cron job to suggest relevant problem-solving videos from the TLE Eliminator YouTube channel.",
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Calendar API", "Tailwind CSS", "Vercel"],
            github: "https://github.com/kumaranup1234/contestTracker",
            liveSite: "https://contest-tracker-snowy.vercel.app/"
        },
        {
            title: "CodeCompiler API",
            description: "Created a secure backend API using Node.js and Docker to execute user-submitted code in a sandboxed environment. Supports multiple languages including Python, JavaScript, Java, and C++ with real-time execution, robust error handling, and detailed logging for user feedback.",
            techStack: ["Node.js", "Express.js", "Docker", "JavaScript",],
            github: "https://github.com/kumaranup1234/online-code-compiler-api"
        },
        {
            title: "Notes App",
            description: "Developed a full-stack notes management app using the MERN stack with secure user authentication powered by JWT. Features include note creation, editing, and deletion, an advanced search function for keyword-based retrieval, and a bookmarking system for quick access to important notes. Integrated password recovery using NodeMailer.",
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "NodeMailer"],
            github: "https://github.com/kumaranup1234/Notes-App",
            liveSite: "https://notes-app-frontend-navy.vercel.app/"
        }
    ];

    return (
        <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="rounded-lg border border-gray-300 dark:border-gray-700 shadow-md h-full sm:w-full md:min-w-full p-6 transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-xxl font-semibold leading-5 tracking-tight dark:text-white">
                                {project.title}
                            </h3>
                            <div className="flex space-x-2">
                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                    className="hover:bg-gray-400 dark:text-white inline-flex items-center justify-center rounded-md h-10 w-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-github h-4 w-4">
                                        <path
                                            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                    </svg>
                                </a>
                                <a href={project.liveSite} target="_blank" rel="noopener noreferrer"
                                    className="hover:bg-gray-400 dark:text-white inline-flex items-center justify-center rounded-md h-10 w-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-external-link h-4 w-4">
                                    <path d="M15 3h6v6"></path>
                                        <path d="M10 14 21 3"></path>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <p className="mt-2 dark:text-customGray">{project.description}</p>
                        <div className="mt-4">
                            {project.techStack.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="inline-block text-[16px] rounded-md  px-3 py-1 font-semibold mr-2 mb-2 shadow-md dark:text-white bg-customGray dark:bg-customGrayDark"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
