import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the life story of Nafis Mahim.
          </p>
          <blockquote className="text-lg italic text-gray-700 mt-6 border-l-4 border-pulse-500 pl-4 max-w-3xl mx-auto">
            "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." - James Cameron
          </blockquote>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What is this page?</h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Welcome to the Official page of Nafis Mahim, a student currently a Sophomore at Stuyvesant High School. 
            It has details about all of my projects, ideas, skills, and experiences throughout my life. Feel free to look around and explore!
          </p>

          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">The beginning...</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Born and raised in Bangladesh, I was always curious about things. I learned to read and write at a very young age 
                and absolutely loved knowing about things that made me curious. Being at the center of attention allowed me to receive 
                great care from my family, who realized I needed a better environment. Who would've thought I was destined for so much more?
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                As soon as I stepped foot on New York, I knew my life was about to change forever. Being a native Bengali, Hindi, 
                and Urdu speaker, I was quite unfamiliar with life in the Western World. There were so many customs, so many different 
                traditions, and an entirely new language to learn. But being the curious person I was, I was able to grasp it as soon as I began Pre-K.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The funny thing was that no matter where I went, the people were all so friendly. As much as I missed home, I began to 
                become part of this new and unique society that was all new to me. I became Bengali-American, with Indian and Pakistani 
                origins. Just like the pieces of a puzzle, I felt connected to this new place.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Adjusting...</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                I joined a K-8 school, which I was granted admission to after taking the Gifted & Talented exam in New York City. 
                This school had an amazing community and amazing people who genuinely cared about passion, academics, and more. 
                This was the first time I began to gain real childhood friends elsewhere and actually fit into life here.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For 9 years, I studied extremely hard at a place that I finally belonged in, and stood out here as well. Being the first 
                person in my family generation to have an opportunity in America, I knew I had to take my chance seriously. And so, I worked 
                hard, received the highest grades, and stayed at the top.
              </p>
              <p className="text-gray-700 leading-relaxed">
                However, at one point I realized that grades aren't the most important thing in the world. Things that fascinate me were. 
                I began doing extra things, including joining the Chess Team, Debate Team, and Math Team. I even began doing Karate outside 
                of school to teach myself to be the best disciplined version of myself.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">A New Chapter</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At the end of 7th Grade, life took one of the hardest turns. I was preparing for the hardest exam of my life: The SHSAT. 
                Living up to my parents' expectations, I spent months studying to get into my dream high school.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                It was almost like a dream when I came home from school the day results came out. My parents, who had worked their entire 
                lives in our home country to bring me here, were in tears after seeing me get accepted into Stuyvesant. I couldn't believe it, 
                but I also knew that this was the place where I would become the real Nafis Mahim.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At first, I was very overwhelmed by the experience. Everyone here seemed to be extremely smart that I no longer felt like 
                I stood out like I did for my entire life. I began to fall into this deep hole not being able to feel happiness again. 
                Then one day, my dad said something that changed me forever: "The world is like a treadmill. It is made for the people that 
                can run it, not the ones who can't. If you want to create a destiny, you need to run faster than it."
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Desires of Life</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Why do I want to become an Entrepreneur? There are many answers actually. The easy answer is usually profit for most. 
                I don't care about making my own profit, but rather profit for a certain specific purpose. Coming from a 3rd World Country, 
                I've seen poverty up close, and at one point in my life have been in that position before arriving here.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                I have a mission of returning the favor by picking up my hometown from any form of poverty, and then my city, and then my 
                entire country. Then, if possible, I want to carry this purpose to others who also need someone to help them.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My eventual dream job is at Google or Apple, and then I plan to create my own Biotech/Biopharmaceutical Company. 
                With enough profit, I plan on long-term investment which I would use the profits for my cause.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;