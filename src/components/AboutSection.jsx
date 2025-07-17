import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section
            id="about"
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                {/* Left Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Software Developer & Tech Enthusiast</h3>

                        <p className="text-muted-foreground">
                            With over 2 years of experience in software development, I specialise in creating dynamic, responsive and performant software applications using modern technologies. My journey in tech has been driven by a passion for problem-solving and a commitment to continuous learning.
                        </p>

                        <p className="text-muted-foreground">
                            I am passionate about building user-friendly applications that not only meet client requirements but also provide an exceptional user experience. I thrive in collaborative environments and enjoy working with cross-functional teams to bring innovative ideas to life. I am currently exploring web development and am constantly learning about new technologies to stay ahead in this ever-evolving field.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>
                            <a
                                hidden
                                href=""
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                download
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">
                                        Software Development
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Creating software applications with modern technologies
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">
                                        UI/UX Design
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Designing and implementing beautiful user interfaces and a seamless user experience
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">
                                        Professional Team Member
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Contributing to projects from conception to completion with aglie methodologies
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
};
