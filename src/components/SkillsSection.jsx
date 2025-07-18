import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // Frontend Skills
    { name: "BrightScript/Scenegraph", level: 85, category: "frontend" },
    { name: "JavaScript", level: 80, category: "frontend" },
    { name: "HTML/CSS", level: 80, category: "frontend" },
    { name: "React", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 75, category: "frontend" },
    { name: "TypeScript", level: 70, category: "frontend" },

    //Backend Skills
    { name: "MongoDB", level: 80, category: "backend" },
    { name: "GraphQL", level: 80, category: "backend" },
    { name: "Node.js", level: 75, category: "backend" },

    // Tools
    { name: "Git/Github", level: 90, category: "tools" },
    { name: "VS Code", level: 90, category: "tools" },
    { name: "Jenkins", level: 80, category: "tools" },
    { name: "Postman", level: 75, category: "tools" },
    { name: "Figma", level: 70, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skills) => activeCategory === "all" || skills.category === activeCategory);

    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-secondary-foreground hover:bg-secondary"
                            )}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};
