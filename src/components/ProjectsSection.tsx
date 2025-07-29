import React from "react";

const ProjectsSection = () => {
  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-rose-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-16 w-48 h-48 bg-gradient-to-br from-rose-300/20 to-pink-300/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-br from-orange-300/25 to-yellow-300/25 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-gradient-to-br from-amber-300/15 to-orange-300/15 rounded-full blur-lg"></div>
      <div className="absolute bottom-16 left-1/3 w-28 h-28 bg-gradient-to-br from-yellow-300/20 to-amber-300/20 rounded-full blur-lg"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {/* Aether/AutoNova Project */}
          <div className="relative bg-gradient-to-br from-white via-purple-50/70 to-indigo-50/50 rounded-3xl p-6 shadow-xl border border-white/60 backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-3">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-400/25 to-indigo-400/25 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-violet-400/15 to-purple-400/15 rounded-full blur-lg"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4 text-center">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Aether - FinTech & EdTech Startup</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-purple-600 mb-3">AutoNova Platform</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Currently developing an AI-powered EdTech platform with 6,000+ opportunities for high schoolers including internships, 
                    grants, scholarships, volunteering opportunities, and jobs. The platform uses advanced AI matching to connect students 
                    with their top 5 best opportunities based on their academic profile.
                  </p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div>• AI-powered opportunity matching system</div>
                    <div>• Profile strength analysis and improvement suggestions</div>
                    <div>• Essay analysis comparing against T20/T10 accepted students</div>
                    <div>• College admission percentage calculator</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-indigo-600 mb-3">Business Development</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Aether focuses on creating FinTech and EdTech SaaS tools for both B2B and B2C clients. Currently competing with 
                    Ultra (YC-backed company) and in acquisition talks with a larger company preparing for Y-Combinator application.
                  </p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div>• Competing with YC-backed companies</div>
                    <div>• In acquisition/merger discussions (NDA)</div>
                    <div>• Preparing for Y-Combinator application</div>
                    <div>• B2B and B2C SaaS solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Calculator App */}
          <div className="relative bg-gradient-to-br from-white via-blue-50/70 to-cyan-50/50 rounded-3xl p-6 shadow-xl border border-white/60 backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-4 -right-4 w-18 h-18 bg-gradient-to-br from-blue-400/25 to-cyan-400/25 rounded-full blur-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-14 h-14 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-md"></div>
            <div className="relative z-10">
            <div className="text-4xl mb-4 text-center">🧮</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Calculator App (Kivy)</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Created a basic, Android version of the vertical-faced Apple iPhone Calculator using Python and Kivy. 
              It serves as a baseline for future Kivy projects and can do all the basic operations of arithmetic, as well as percents.
            </p>
            </div>
          </div>

          {/* User Database Website */}
          <div className="relative bg-gradient-to-br from-white via-green-50/70 to-emerald-50/50 rounded-3xl p-6 shadow-xl border border-white/60 backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-6 -left-6 w-22 h-22 bg-gradient-to-br from-green-400/25 to-emerald-400/25 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-lg"></div>
            <div className="relative z-10">
              
            <div className="text-4xl mb-4 text-center">🌐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">User Database Website (Flask)</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Created a Flask-plugin website using Python, JavaScript, HTML, and CSS. The website's goal was to serve as a 
              practice/sample project for web development. 
              Users are able to sign up, log in with an account, and write a 
              specific note that is saved in the database that they can access later.
            </p>
            </div>
          </div>

          {/* Cancer Awareness Campaign */}
          <div className="relative bg-gradient-to-br from-white via-pink-50/70 to-rose-50/50 rounded-3xl p-6 shadow-xl border border-white/60 backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-3 -right-8 w-24 h-24 bg-gradient-to-br from-pink-400/25 to-rose-400/25 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-2 w-18 h-18 bg-gradient-to-br from-red-400/15 to-pink-400/15 rounded-full blur-lg"></div>
            <div className="relative z-10">
              
            <div className="text-4xl mb-4 text-center">🎗️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cancer Awareness Campaign</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Started a Campaign while partnering with DECA, and competing in a Business competition to raise awareness about cancer. 
              The procedure was to create social media pages, conduct door-to-door marketing, and publish videos for donations to the 
              National Cancer Pediatric Association.
            </p>
            </div>
          </div>

          {/* Coming Soon Projects */}
          <div className="relative bg-gradient-to-br from-white via-gray-50/70 to-slate-50/50 rounded-3xl p-6 shadow-xl border border-white/60 backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gray-400/20 to-slate-400/20 rounded-full blur-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-zinc-400/15 to-gray-400/15 rounded-full blur-md"></div>
            <div className="relative z-10">
            <div className="text-4xl mb-4 text-center">🚧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">TBD</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Coming Soon!
            </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-white via-gray-50/70 to-slate-50/50 rounded-3xl p-6 shadow-xl border border-white/60 backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-6 -left-6 w-22 h-22 bg-gradient-to-br from-gray-400/20 to-slate-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-18 h-18 bg-gradient-to-br from-zinc-400/15 to-gray-400/15 rounded-full blur-lg"></div>
            <div className="relative z-10">
            <div className="text-4xl mb-4 text-center">🚧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">TBD</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Coming Soon!
            </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-white via-gray-50/70 to-slate-50/50 rounded-3xl p-6 shadow-xl border border-white/60 backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-3 -right-8 w-24 h-24 bg-gradient-to-br from-gray-400/20 to-slate-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-4 w-20 h-20 bg-gradient-to-br from-zinc-400/15 to-gray-400/15 rounded-full blur-lg"></div>
            <div className="relative z-10">
            <div className="text-4xl mb-4 text-center">🚧</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">TBD</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Coming Soon!
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;