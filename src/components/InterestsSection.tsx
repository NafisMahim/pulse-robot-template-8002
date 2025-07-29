import React from "react";

const InterestsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Interests
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bubbly-card interest-card-tech text-center group">
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide">Technology</h3>
            <p className="text-gray-700 leading-relaxed">
              Since childhood, I've always wondered how machines work, technology works, and how phones work. 
              Carrying this mindset, I became interested in the works of the two tech giants, Apple and Google, 
              of which I want to work in some day.
            </p>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/40 rounded-full blur-md"></div>
          </div>

          <div className="bubbly-card interest-card-cs text-center group">
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">💻</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide">Computer Science</h3>
            <p className="text-gray-700 leading-relaxed">
              I have experience with CSS, Python, JavaScript, and HTML, and am planning on majoring in Computer Science. 
              I also have expertise in Adobe Photoshop, Illustrator, Canva, and Microsoft Office 365.
            </p>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/40 rounded-full blur-md"></div>
          </div>

          <div className="bubbly-card interest-card-business text-center group">
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">💼</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide">Business</h3>
            <p className="text-gray-700 leading-relaxed">
              My father had heavy influence on me when it came to business interests. He studied finance and had a business major. 
              From a young age, I've learned about the stock market, investments, and became interested in entrepreneurship. 
              As a result, I also plan on majoring in Finance alongside CS.
            </p>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/40 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;