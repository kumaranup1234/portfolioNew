const Skills = () => {
    const skills = [
        "C", "JavaScript", "React.js", "Tailwind CSS",
        "Node.js", "Express.js", "MongoDB", "SQL", "Docker",
        "AWS", "Git", "Recoil", "HTML",
        "Data Structures/Algorithms",
    ];

    return (
        <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Skills</h2>
            <div className="flex flex-wrap">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="inline-block text-[16px] rounded-md px-3 py-1 font-semibold mr-2 mb-2 shadow-md dark:text-white bg-customGray dark:bg-customGrayDark"
                    >
            {skill}
          </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;
