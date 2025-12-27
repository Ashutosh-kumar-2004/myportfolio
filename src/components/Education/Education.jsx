import React from "react";
import lpuLogo from "../../assets/lpu.webp";
import apsLogo from "../../assets/aps.png";

const Education = () => {
  const educationData = [
    {
      logo: lpuLogo,
      institution: "Lovely Professional University, Jalandhar, Punjab",
      degree: "Bachelors of Technology in Computer Science and Engineering",
      duration: "July 2023 - Present",
      description:
        "Pursuing B.Tech in Computer Science and Engineering, focusing on full-stack web development and modern frameworks like MERN. Actively involved in projects that emphasize performance, scalability, and clean UI/UX design.",
    },
    {
      logo: apsLogo,
      institution: "Army Public School, Nehru Road, Lucknow, Uttar Pradesh",
      degree: "Senior Secondary (Class XII)",
      duration: "April 2021 - March 2022",
      percentage: "86.4%",
      description:
        "Completed higher secondary education in the science stream with a focus on Mathematics and Computer Science. Developed strong analytical and logical reasoning abilities.",
    },
    {
      logo: apsLogo,
      institution: "Army Public School, Nehru Road, Lucknow, Uttar Pradesh",
      degree: "Secondary (Class X)",
      duration: "April 2019 - March 2020",
      percentage: "90%",
      description:
        "Completed foundational education with distinction, sparking an early interest in technology, computers, and logical problem solving.",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-[#0a0a0a] text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          EDUCATION
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey and the foundations that shaped my technical path
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center 
            bg-gray-900/70 backdrop-blur-md rounded-2xl border border-white/10 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-all duration-300 
            hover:shadow-[0_0_35px_2px_rgba(130,69,236,0.45)] p-6"
          >
            {/* Left Side (Logo + Info) */}
            <div className="flex items-start space-x-5 w-full md:w-3/4">
              {/* Logo */}
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-[#8245ec] shadow-md">
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* Text Info */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-100">
                  {edu.institution}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {edu.degree}
                </p>
                {edu.percentage && (
                  <p className="text-[#a855f7] font-semibold text-sm mt-1">
                    Percentage: {edu.percentage}
                  </p>
                )}
                {edu.description && (
                  <p className="text-gray-400 text-sm md:text-base mt-2 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>

            {/* Duration */}
            <div className="mt-4 md:mt-0 text-gray-400 text-sm md:text-base font-medium md:text-right md:w-1/4">
              {edu.duration}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
