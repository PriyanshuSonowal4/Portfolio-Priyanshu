import React from "react";
import { Code } from "lucide-react";
const Herosection = () => {
  return (
    <div className="mt-30 flex justify-center items-center space-x-4  flex-wrap space-y-4">
      <div className="flex flex-col  space-y-5 max-w-2xl">
        <div className="space-x-4 flex items-center justify-center">
          <span className="text-black font-black text-5xl">
            {" "}
            Software Developer
          </span>
          <div className="p-2 bg-blue-400 rounded-full outline-1 outline-offset-2 outline-blue-600">
            <Code color="white" />
          </div>
        </div>
        <span className="text-black font-semibold text-xl">
          Software development is the process of designing, coding, testing, and
          maintaining applications or systems that run on computers or devices.
          It involves understanding user needs, writing efficient and reliable
          code, and continuously improving the software through updates. The
          field combines creativity, problem-solving, and technical skills to
          build tools that enhance productivity, entertainment, communication,
          and more. Key concepts include programming languages, development
          methodologies, version control, and testing.
        </span>
      </div>
      <div className="w-100 rounded-full overflow-hidden h-100 shadow-2xl">
        <img src="/images/profilePic.jpg"  className="w-full h-full object-cover "/>
      </div>
    </div>
  );
};

export default Herosection;
