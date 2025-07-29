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
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <div className="text-4xl mb-4 text-center">🧮</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Calculator App (Kivy)</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Created a basic, Android version of the vertical-faced Apple iPhone Calculator using Python and Kivy. 
              It serves as a baseline for future Kivy projects and can do all the basic operations of arithmetic, as well as percents.
            </p>
          </div>

          {/* User Database Website */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <div className="text-4xl mb-4 text-center">🌐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">User Database Website (Flask)</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Created a Flask-plugin website using Python, JavaScript, HTML, and CSS. The website's goal was to serve as a 
              practice/sample project for web development. Users are able to sign up, log in with an account, and write a 
              specific note that is saved in the database that they can access later.
            </p>
          </div>

          {/* Cancer Awareness Campaign */}
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6">
            <div className="text-4xl mb-4 text-center">🎗️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cancer Awareness Campaign</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Started a Campaign while partnering with DECA, and competing in a Business competition to raise awareness about cancer. 
              The procedure was to create social media pages, conduct door-to-door marketing, and publish videos for donations to the 
              National Cancer Pediatric Association.
            </p>
          </div>

          {/* Coming Soon Projects */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
            <div className="text-4xl mb-4 text-center">🚧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">TBD</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Coming Soon!
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
            <div className="text-4xl mb-4 text-center">🚧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">TBD</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Coming Soon!
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
            <div className="text-4xl mb-4 text-center">🚧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">TBD</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Coming Soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;