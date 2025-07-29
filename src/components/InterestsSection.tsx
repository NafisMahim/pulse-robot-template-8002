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
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technology</h3>
            <p className="text-gray-700">
              Since childhood, I've always wondered how machines work, technology works, and how phones work. 
              Carrying this mindset, I became interested in the works of the two tech giants, Apple and Google, 
              of which I want to work in some day.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Computer Science</h3>
            <p className="text-gray-700">
              I have experience with CSS, Python, JavaScript, and HTML, and am planning on majoring in Computer Science. 
              I also have expertise in Adobe Photoshop, Illustrator, Canva, and Microsoft Office 365.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Business</h3>
            <p className="text-gray-700">
              My father had heavy influence on me when it came to business interests. He studied finance and had a business major. 
              From a young age, I've learned about the stock market, investments, and became interested in entrepreneurship. 
              As a result, I also plan on majoring in Finance alongside CS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;