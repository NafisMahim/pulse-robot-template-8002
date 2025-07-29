import React from "react";

const InterestsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-300/25 to-purple-300/25 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 left-16 w-36 h-36 bg-gradient-to-br from-pink-300/20 to-rose-300/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-gradient-to-br from-cyan-300/15 to-blue-300/15 rounded-full blur-lg"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Interests
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="relative bg-gradient-to-br from-white via-blue-50/70 to-cyan-50/50 rounded-3xl p-8 text-center shadow-xl border border-white/60 backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-md"></div>
            <div className="relative z-10">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technology</h3>
            <p className="text-gray-700">
              Since childhood, I've always wondered how machines work, technology works, and how phones work. 
              Carrying this mindset, I became interested in the works of the two tech giants, Apple and Google, 
              of which I want to work in some day.
            </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-white via-green-50/70 to-emerald-50/50 rounded-3xl p-8 text-center shadow-xl border border-white/60 backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-400/25 to-emerald-400/25 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-lg"></div>
            <div className="relative z-10">
              
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Computer Science</h3>
            <p className="text-gray-700">
              I have experience with CSS, Python, JavaScript, and HTML, and am planning on majoring in Computer Science. 
              I also have expertise in Adobe Photoshop, Illustrator, Canva, and Microsoft Office 365.
            </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-white via-orange-50/70 to-yellow-50/50 rounded-3xl p-8 text-center shadow-xl border border-white/60 backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-3 -right-8 w-24 h-24 bg-gradient-to-br from-orange-400/25 to-yellow-400/25 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-2 w-18 h-18 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-lg"></div>
            <div className="relative z-10">
              
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
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;