import React from "react";

const Education = () => {
  return (
    <div className="mt-10 text-left">
        <div className="h-1 w-full  bg-amber-200 bg-gradient-to-r from-indigo-600 to-pink-400 shadow-2xl shadow-sky-500" />

      <div className="w-full mx-auto mt-6 lg:w-5/12 lg:pr-12">
        <div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileInView={{ opacity: 1 }}
          className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-white rounded-full mr-2" />
            Currently Pursuing
          </div>

          <h3 className="text-3xl lg:text-4xl font-bold text-[#0D1B2A] mb-4">
            Bachelor of Computer Applications
          </h3>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Manipal University Jaipur (Online)
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span className="text-lg text-[#0D1B2A]/80 font-medium">
                Duration: 3 Years
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full" />
              <span className="text-lg text-[#0D1B2A]/80 font-medium">
                Focus: Computer Applications & Technology
              </span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20">
            <h4 className="text-lg font-semibold text-[#0D1B2A] mb-3">
              Key Areas of Study:
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Artificial Intelligence and Machine Learning",
                "Database Management",
                "Web Development",
                "Software Engineering",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-300/30 rounded-full text-sm font-medium text-[#0D1B2A]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
