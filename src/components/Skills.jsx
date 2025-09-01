import React from "react";

const skills = [
  "Python",
  "JAVA",
  "SQL",
  "Scikit-Learn",
  "ML",
  "Deep Learning",
  "NLP",
  "CV",
  "C",
  "JAVASCRIPT",
  "MongoDB",
  "PostgreSQL",
  "HTML",
  "CSS",
  "GIT",
  "GITHUB",
];

const Skills = () => {
  return (
    <div className="bg-white mt-30">
      <h1 className="text-transparent bg-clip-text w-fit mx-auto text-xl bg-gradient-to-r from-indigo-600 to-pink-400 font-black">
        SKILLS
      </h1>
      <div className="flex justify-center mt-5 flex-wrap gap-3">
        {skills.map((skill, idx) => {
          return (
            <div className="relative" key={idx}>
              <div className="absolute inset-1 bg-gradient-to-r from-indigo-300 to-pink-100 blur-lg  bg-blue-200" />

              <div
                className="w-fit p-2 shadow-2xl shadow-black relative rounded-full bg-transparent text-black"
                key={idx}
              >
                {skill}
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-transparent bg-clip-text mt-5 w-fit mx-auto text-xl bg-gradient-to-r from-indigo-600 to-pink-400 font-black">
        Other Skills
      </h1>
      <div className="relative w-fit mx-auto">
        <div className="absolute inset-1 bg-gradient-to-r from-indigo-300 to-pink-100 blur-lg  bg-blue-200" />

        <div className="w-fit p-2 shadow-2xl mt-3 shadow-black relative rounded-full bg-transparent text-black">
          Crypto Trading
        </div>
      </div>
    </div>
  );
};

export default Skills;
