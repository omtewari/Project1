// src/components/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-green-300 to-blue-500 py-16 px-8 text-center md:text-left">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Unlock Your Potential with World-Class Courses
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-xl mb-8">
            Whether you're looking to enhance your skills, switch careers, or fuel your passion, our curated online courses will help you achieve your goals. Learn at your own pace, with expert guidance, and join a global community of learners.
          </p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition">
            Explore Courses
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://i.imgur.com/g3WdrVm.png"
            alt="Online Learning"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
