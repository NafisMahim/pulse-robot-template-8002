import React from "react";

const ProjectsSection = () => {
  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Calculator App */}
          <div className="bubbly-card project-card-calc text-center group">
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🧮</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide">Calculator App (Kivy)</h3>
            <p className="text-gray-700 leading-relaxed">
              Created a basic, Android version of the vertical-faced Apple iPhone Calculator using Python and Kivy. 
              It serves as a baseline for future Kivy projects and can do all the basic operations of arithmetic, as well as percents.
            </p>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/40 rounded-full blur-md"></div>
          </div>

          {/* User Database Website */}
          <div className="bubbly-card project-card-web text-center group">
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🌐</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide">User Database Website (Flask)</h3>
            <p className="text-gray-700 leading-relaxed">
              Created a Flask-plugin website using Python, JavaScript, HTML, and CSS. The website's goal was to serve as a 
              practice/sample project for web development. Users are able to sign up, log in with an account, and write a 
              specific note that is saved in the database that they can access later.
            </p>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/40 rounded-full blur-md"></div>
          </div>

          {/* Cancer Awareness Campaign */}
          <div className="bubbly-card project-card-cancer text-center group">
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🎗️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide">Cancer Awareness Campaign</h3>
            <p className="text-gray-700 leading-relaxed">
              Started a Campaign while partnering with DECA, and competing in a Business competition to raise awareness about cancer. 
              The procedure was to create social media pages, conduct door-to-door marketing, and publish videos for donations to the 
              National Cancer Pediatric Association.
            </p>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/40 rounded-full blur-md"></div>
          </div>

          {/* Coming Soon Projects */}
          <div className="bubbly-card project-card-tbd text-center group">
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🚧</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide">TBD</h3>
            <p className="text-gray-700 leading-relaxed">
              Coming Soon!
            </p>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/40 rounded-full blur-md"></div>
          </div>

          <div className="bubbly-card project-card-tbd text-center group">
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🚧</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide">TBD</h3>
            <p className="text-gray-700 leading-relaxed">
              Coming Soon!
            </p>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/40 rounded-full blur-md"></div>
          </div>

          <div className="bubbly-card project-card-tbd text-center group">
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🚧</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide">TBD</h3>
            <p className="text-gray-700 leading-relaxed">
              Coming Soon!
            </p>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/40 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;