import React from "react";

const Herosection = () => {
  return (
    <div className="mt-30 flex justify-center items-center space-x-4  flex-wrap space-y-4">
      <div className="flex flex-col items-start space-y-5 max-w-2xl">
        <span className="font-black text-black text-3xl">
          {"Hi, I’m".split("").map((item, idx) => {
            return <span>{item}</span>;
          })}{" "}
        </span>
        <span className="font-black text-black text-3xl">
          {"Priyanshu Sonowal".split("").map((item, idx) => {
            return <span>{item}</span>;
          })}{" "}
        </span>
        <span className="text-black  text-left font-semibold text-xl">
          I’m an aspiring AI/ML Engineer with a strong foundation in Python,
          Java, C, and SQL, and practical experience working with Scikit-Learn,
          data analysis, and model building. My expertise extends to
          mathematics, statistics, and data structures, which I apply to develop
          intelligent systems and solve real-world problems. I enjoy exploring
          machine learning, deep learning, NLP, and computer vision, and I’m
          passionate about continuously learning, experimenting, and building
          AI-powered solutions that create meaningful impact.
        </span>
        <div className="h-1 w-full bg-amber-200 bg-gradient-to-r from-indigo-600 to-pink-400 shadow-2xl shadow-sky-500" />

        <span className="font-medium text-xl text-left text-black drop-shadow-lg">
          I am a crypto trader along with 3 years of experience in this field.
          analyzing market trends, executing profitable trades, and managing
          risk across various digital assets. Skilled in technical and
          fundamental analysis with a strong understanding of blockchain and
          cryptocurrency markets.
        </span>
        
      </div>
      <div className="relative group mt-3 cursor-pointer">
        {/* 

        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div> */}
        <div className="absolute -inset-4 blur-lg opacity-30  bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full  group-hover:opacity-50 transition-opacity duration-500"></div>
        <div className="relative h-80 w-80 sm:h-96 sm:w-96 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 group-hover:scale-105">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="/images/profilePic.jpg"
            alt="Rajnish Nath"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
