import React from "react";

const EducationSection = () => {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-16 left-20 w-44 h-44 bg-gradient-to-br from-violet-300/20 to-purple-300/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-24 w-52 h-52 bg-gradient-to-br from-blue-300/15 to-cyan-300/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-gradient-to-br from-indigo-300/25 to-blue-300/25 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 left-10 w-28 h-28 bg-gradient-to-br from-teal-300/20 to-cyan-300/20 rounded-full blur-lg"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Education/Awards
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn also about hobbies, lifestyle, experiences, etc.
          </p>
          <blockquote className="text-lg italic text-gray-700 mt-6 border-l-4 border-pulse-500 pl-4 max-w-3xl mx-auto">
            "It is during our darkest moments that we must focus to see the light." - Aristotle
          </blockquote>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Different Achievements and Positions</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Elementary School */}
            <div className="relative bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/40 rounded-3xl shadow-xl p-6 border border-white/50 backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-cyan-400/15 to-blue-400/15 rounded-full blur-md"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-blue-600 mb-4">Elementary School</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div>• Code.org Course 1-5 Certificates</div>
                <div>• NY Chesskids 2nd & 5th Place</div>
                <div>• 1st Place Art & Writing Competition</div>
                <div>• Johns Hopkins Talent Search Recognition</div>
                <div>• Mighty Milers Marathon Medals</div>
                <div>• NYCUDL Debate Tournament Awards</div>
                <div>• International Martial Arts Certificates</div>
                <div>• Best Fighter Award (2018, 2019)</div>
              </div>
              </div>
            </div>

            {/* Middle School */}
            <div className="relative bg-gradient-to-br from-white via-green-50/60 to-emerald-50/40 rounded-3xl shadow-xl p-6 border border-white/50 backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-18 h-18 bg-gradient-to-br from-teal-400/15 to-green-400/15 rounded-full blur-lg"></div>
              <div className="relative z-10">
                
                <h4 className="text-xl font-bold text-green-600 mb-4">Middle School</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div>• NYCUDL City Championships 1st & 2nd Place</div>
                <div>• Multiple Local Championships wins</div>
                <div>• NYCUDL Gold Medals (State Championships)</div>
                <div>• Middle School Debate MVP</div>
                <div>• MOEMS Math Olympiad Champion</div>
                <div>• Sigma & CML Math Competition Champion</div>
                <div>• 1st Degree Black Belt (Shotokan Karate)</div>
                <div>• Honors Graduation Diploma</div>
              </div>
              </div>
            </div>

            {/* High School */}
            <div className="relative bg-gradient-to-br from-white via-orange-50/60 to-yellow-50/40 rounded-3xl shadow-xl p-6 border border-white/50 backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-3 -right-8 w-28 h-28 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-4 w-20 h-20 bg-gradient-to-br from-amber-400/15 to-orange-400/15 rounded-full blur-lg"></div>
              <div className="relative z-10">
                
                <h4 className="text-xl font-bold text-orange-600 mb-4">High School</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div>• NYPDL Parliamentary Top 5 Speaker</div>
                <div>• BevHacks 6th Place Hackathon</div>
                <div>• NY Open Tournament Kata Gold Champion</div>
                <div>• Advanced Honors Regents Diploma</div>
                <div>• AP Scholar Award</div>
                <div>• Captain of Karate Team</div>
                <div>• Harvard STRIPED Youth Advocate</div>
              </div>
              </div>
            </div>
          </div>

          {/* Positions and Extracurriculars */}
          <div className="relative bg-gradient-to-br from-white via-purple-50/50 to-pink-50/30 rounded-3xl shadow-xl p-8 border border-white/50 backdrop-blur-sm overflow-hidden">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-6 w-24 h-24 bg-gradient-to-br from-rose-400/15 to-purple-400/15 rounded-full blur-xl"></div>
            <div className="relative z-10">
              
              <h4 className="text-xl font-bold text-gray-900 mb-6">Positions, Extracurriculars, and Experiences</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                
              <div>• Captain and Co-Coach of Karate Team</div>
              <div>• Harvard University STRIPED Youth Advocate</div>
              <div>• Public Forum Debate Team</div>
              <div>• Stuyvesant Muslim Students Association</div>
              <div>• Stuyvesant DECA</div>
              <div>• Stuyvesant Science Olympiad Team</div>
              <div>• AllStarCode Intern (JavaScript, CSS, HTML, Git)</div>
              <div>• SHSAT/SAT Firm Volunteer (Teaching & Tutoring)</div>
              <div>• Marketing Campaign (Pediatric Cancer Foundation)</div>
              <div>• Community Service</div>
              <div>• Weekend Religious Education</div>
              <div>• Stuyvesant RedCross</div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;