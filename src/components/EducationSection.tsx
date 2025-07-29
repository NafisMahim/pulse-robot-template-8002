import React from "react";

const EducationSection = () => {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Different Achievements and Positions</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Elementary School */}
            <div className="bubbly-card education-card-elementary group">
              <div className="text-5xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">🎓</div>
              <h4 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide text-center">Elementary School</h4>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <div>• Code.org Course 1-5 Certificates</div>
                <div>• NY Chesskids 2nd & 5th Place</div>
                <div>• 1st Place Art & Writing Competition</div>
                <div>• Johns Hopkins Talent Search Recognition</div>
                <div>• Mighty Milers Marathon Medals</div>
                <div>• NYCUDL Debate Tournament Awards</div>
                <div>• International Martial Arts Certificates</div>
                <div>• Best Fighter Award (2018, 2019)</div>
              </div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/40 rounded-full blur-md"></div>
            </div>

            {/* Middle School */}
            <div className="bubbly-card education-card-middle group">
              <div className="text-5xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">🏆</div>
              <h4 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide text-center">Middle School</h4>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <div>• NYCUDL City Championships 1st & 2nd Place</div>
                <div>• Multiple Local Championships wins</div>
                <div>• NYCUDL Gold Medals (State Championships)</div>
                <div>• Middle School Debate MVP</div>
                <div>• MOEMS Math Olympiad Champion</div>
                <div>• Sigma & CML Math Competition Champion</div>
                <div>• 1st Degree Black Belt (Shotokan Karate)</div>
                <div>• Honors Graduation Diploma</div>
              </div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/40 rounded-full blur-md"></div>
            </div>

            {/* High School */}
            <div className="bubbly-card education-card-high group">
              <div className="text-5xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h4 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide text-center">High School</h4>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <div>• NYPDL Parliamentary Top 5 Speaker</div>
                <div>• BevHacks 6th Place Hackathon</div>
                <div>• NY Open Tournament Kata Gold Champion</div>
                <div>• Advanced Honors Regents Diploma</div>
                <div>• AP Scholar Award</div>
                <div>• Captain of Karate Team</div>
                <div>• Harvard STRIPED Youth Advocate</div>
              </div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/40 rounded-full blur-md"></div>
            </div>
          </div>

          {/* Positions and Extracurriculars */}
          <div className="mt-12 bubbly-card education-card-positions group">
            <div className="text-5xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">🌟</div>
            <h4 className="text-2xl font-bold text-gray-800 mb-8 tracking-wide text-center">Positions, Extracurriculars, and Experiences</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 leading-relaxed">
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
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/40 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;