import React from 'react';
import Image from 'next/image';
import GraphicsProjectsPage from './pages/projects/page';
import ContactPage from './pages/Contact';
import { FaPalette, FaDraftingCompass, FaLaptopCode } from 'react-icons/fa';
import { FaPencilRuler } from 'react-icons/fa';
import styles from './page.module.css';
import Header from './components/header';
import Footer from './components/Footer';
import { SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiAdobeindesign, SiAdobelightroom, SiBlender } from 'react-icons/si'; // Import icons
import imageSrc from "@/public/profile.jpg";
import middlebg from "@/public/middlebg.jpg";
import design from "@/public/design.png";

import { FiExternalLink } from 'react-icons/fi';
import {  SiUnsplash, SiYoutube } from 'react-icons/si';
import { MdColorLens, MdPalette, MdDesignServices } from 'react-icons/md';


const CoolSoftwareList:React.FC = () => {
  return (
    <div className="flex justify-center mt-6 md:mt-8"  >
      <div className="mb-4 py-6 px-6 md:px-8 bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-2xl transition-all duration-300 transform hover:scale-105">
        <h3 className="text-lg font-bold mb-4 rounded text-black bg-[#FFD700] justify-self-center p-2 text-center">
          Software
        </h3>
        <div className="flex flex-wrap justify-around gap-6">
          {[
            { Icon: SiAdobeillustrator, label: 'Ai' },
            { Icon: SiAdobephotoshop, label: 'Ps' },
            { Icon: SiFigma, label: 'Figma' },
            { Icon:  SiAdobeindesign, label: 'InDesign' },
            { Icon:  SiAdobelightroom, label: 'Lightroom' },
            { Icon: SiBlender, label: 'Blender' },
          ].map((item, index) => {
            const randomRotation = Math.random() * 20 - 10;
            const randomYOffset = Math.random() * 10 - 5;

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-900 bg-opacity-70 transition-transform duration-300 hover:scale-110"
                style={{
                  transform: `rotate(${randomRotation}deg) translateY(${randomYOffset}px)`,
                  margin: '1rem',
                }}
              >
                <item.Icon size={32} className="text-blue-400 mb-1" />
                <span className="text-xs text-gray-300">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


const ExperienceSection: React.FC = () => {
  return (
    <div className="mb-4  px-4 tracking-wide border-spacing-8 border-2 border-dashed rounded-lg border-gray-400 z-[9000]">
      <h3 className="text-lg font-bold mb-2 rounded text-[#FFD700] bg-transparent justify-self-center p-1 ">
        Experience
      </h3>
      <div className="mb-2">
        <p className="font-semibold text-[#FFD700]">Palladium</p>
        <p className="text-sm text-gray-400">Present - GRAPHICS DESIGN SERVICE PROVIDER</p>
        <p className="text-sm text-gray-400">Provide graphic design services for ...</p>
      </div>
      <div className="mb-2">
        <p className="font-semibold text-[#FFD700]">Whiz Kids Workshop</p>
        <p className="text-sm text-gray-400">Present (Full Time) - GRAPHICS AND UI/UX DESIGNER</p>
        <p className="text-sm text-gray-400">Add details about your role here.</p>
      </div>
      <div className="mb-2">
        <p className="font-semibold text-[#FFD700]">Save the Children International</p>
        <p className="text-sm text-gray-400">2021-2022 - EMERGENCY SHELTER + HH OFFICER</p>
        <p className="text-sm text-gray-400">Construction comes supervising ...</p>
      </div>
      <div className="mb-6 md:mb-12">
        <p className="font-semibold text-[#FFD700]">The World Lutheran Federation</p>
        <p className="text-sm text-gray-400">2019-2020 - COMMUNITY FACILITATOR</p>
        <p className="text-sm text-gray-400">Implement communication and ...</p>
      </div><div className="mb-8"></div> {/* Added extra bottom space here */}
    </div>
  );
};



const AboutMeSection: React.FC= () => {
  return (
    <div className="md:w-[50%] md:mr-10 mb-6 md:mb-0 mx-auto">
      <div className="flex flex-col items-center">
        <div>
          <Image
            src={imageSrc}
            alt="Anaol Atinafu"
            width={200}
            height={200}
            className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover mb-4 md:mb-8"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#FFD700] text-center md:text-left">Anaol Atinafu</h2>
        <p className="text-gray-400 mb-4 text-center md:text-left">Graphics and UI/UX Designer</p>
      </div>

      <div className="hidden md:block mb-4 py-4 px-4 md:px-6 tracking-wide border-spacing-8 border-2 border-dashed rounded-lg border-gray-400 mt-6">
        <h3 className="text-lg font-bold mb-2 rounded text-black bg-[#c60797] justify-self-center p-1">EDUCATION</h3>
        <p className="text-sm">TOP TRAINING</p>
        <p className="text-sm text-gray-400">Graphics Design and UI/UX</p>
        <p className="text-sm mt-2">2023-2026 Addis Ababa University</p>
        <p className="text-sm text-gray-400">Information Science(Bsc)</p>
        <p className="text-sm mt-2">2019-2022 - HIGH SCHOOL</p>
        <p className="text-sm text-gray-400">Studied from grade 9 to 12</p>
      </div>
    </div>
  );
};


const LearningResources = () => {
  const resourceCategories = [
    {
      title: "Design Systems",
      icon: <MdDesignServices className="text-2xl" />,
      resources: [
        { name: "Material Design", url: "https://material.io", description: "Google's design system", free: true },
        { name: "Apple HIG", url: "https://developer.apple.com/design/", description: "Human Interface Guidelines", free: true },
        { name: "IBM Carbon", url: "https://carbondesignsystem.com", description: "Enterprise design system", free: true }
      ]
    },
    {
      title: "Color Tools",
      icon: <MdColorLens className="text-2xl" />,
      resources: [
        { name: "Adobe Color", url: "https://color.adobe.com", description: "Create color schemes", free: true },
        { name: "Coolors", url: "https://coolors.co", description: "Color palette generator", free: true },
        { name: "Color Hunt", url: "https://colorhunt.co", description: "Trending palettes", free: true }
      ]
    },
    {
      title: "Stock Assets",
      icon: <SiUnsplash className="text-2xl" />,
      resources: [
        { name: "Unsplash", url: "https://unsplash.com", description: "Free high-res photos", free: true },
        { name: "Freepik", url: "https://freepik.com", description: "Vectors & PSDs", free: false },
        { name: "Pexels", url: "https://pexels.com", description: "Free stock photos", free: true }
      ]
    },
    {
      title: "Learning Platforms",
      icon: <SiYoutube className="text-2xl" />,
      resources: [
        { name: "Flux Academy", url: "https://flux-academy.com", description: "Design courses", free: false },
        { name: "The Futur", url: "https://thefutur.com", description: "Design business", free: false },
        { name: "DesignCourse", url: "https://designcourse.com", description: "UI/UX tutorials", free: true }
      ]
    },
    {
      title: "Design Challenges",
      icon: <MdPalette className="text-2xl" />,
      resources: [
        { name: "DailyUI", url: "https://www.dailyui.co", description: "Daily design prompts", free: true },
        { name: "Sharpen", url: "https://sharpen.design", description: "Random design briefs", free: true },
        { name: "UI Jar Challenges", url: "https://uijar.com/challenges", description: "Community challenges", free: true }
      ]
    },
    {
      title: "Software Mastery",
      icon: <SiFigma className="text-2xl" />,
      resources: [
        { name: "Figma Learn", url: "https://figma.com/resources/learn-design/", description: "Official tutorials", free: true },
        { name: "Photoshop Training", url: "https://helpx.adobe.com/photoshop/tutorials.html", description: "Adobe's guides", free: true },
        { name: "Sketch App Sources", url: "https://www.sketchappsources.com", description: "Templates & plugins", free: true }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Design Resources</h2>
        <p className="text-gray-400">Essential tools and references I use daily</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resourceCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-gray-600 transition-all"
          >
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-md bg-gray-800 mr-3">
                {React.cloneElement(category.icon, { className: "text-lg" })}
              </div>
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>
            
            <ul className="space-y-2">
              {category.resources.map((resource, idx) => (
                <li key={idx} className="group">
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-between items-center py-2 px-2 hover:bg-gray-800 rounded-md transition-colors text-sm"
                  >
                    <div className="truncate">
                      <span className="font-medium block truncate">{resource.name}</span>
                      <span className="text-gray-400 text-xs truncate">{resource.description}</span>
                    </div>
                    <div className="flex items-center ml-2">
                      {!resource.free && (
                        <span className="text-xs bg-gray-700 text-white px-1.5 py-0.5 rounded">
                          PRO
                        </span>
                      )}
                      <FiExternalLink className="ml-1 text-gray-500 group-hover:text-white transition-colors text-sm" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        Last updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};


const Skills: React.FC = () => {
  const graphicSkills = [
    { icon: <FaPalette />, name: 'Graphics Design' },
    { icon: <FaPencilRuler />, name: 'Logo Design' },
    { icon: <FaDraftingCompass />, name: 'Branding' },
    { icon: <FaLaptopCode />, name: 'UI/UX Design' },
  ];

  return (
    <div className="mb-4 py-4 w-full flex flex-col items-center">
      <h3 className="text-lg font-bold mb-6 rounded text-black bg-white py-1 px-4 text-center">
        My Skills
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-md md:max-w-xl mx-auto px-2">
        {graphicSkills.map((skill, index) => (
          <div
            key={index}
            className="relative overflow-hidden flex flex-col items-center justify-center aspect-square rounded-md bg-gray-800 transition-all duration-300 hover:shadow-lg"
            style={{ 
              width: '100%',
              maxWidth: '140px' 
            }}
          >
            <span className="relative z-10 text-2xl mb-2">{skill.icon}</span>
            <span className="relative z-10 font-serif text-sm md:text-base text-center px-1">{skill.name}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-90"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
const Resume: React.FC = () => {
  return (
    <div
      className="p-4 md:p-8 rounded-lg shadow-lg w-full max-w-[95%] md:max-w-[80%] mx-auto font-sans text-white"
      style={{
        backgroundImage: "url('/infinity.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'linear-gradient(to bottom, indigo-900, purple-800)',
      }}
    >
      <Header />
      
      {/* Home Section */}
      <section id="home" className="flex flex-col md:flex-row mt-6 md:mt-12 items-start justify-between">
        <AboutMeSection />
        <div className="md:w-[80%] md:ml-12 relative">
          <p className="mb-6 md:mb-12 text-2xl md:text-4xl ml-8">
            I am a{' '}
            <span className="text-lg md:text-xl font-bold mb-3 text-[#c60797] hover:text-white transition-colors duration-300">
              creative
            </span>{' '}
            and{' '}
            <span className="text-lg md:text-xl font-bold mb-3 text-[#e336d7] hover:text-white transition-colors duration-300">
              passionate
            </span>{' '}
            graphic{' '}
            <span className="text-lg md:text-xl font-bold mb-3 text-[#e3e036] hover:text-white transition-colors duration-300">
              designer
            </span>{' '}
            with expertise in{' '}
            <span className="text-lg md:text-xl font-bold mb-3 text-[#e3e036] hover:text-white transition-colors duration-300">
              UI/UX design
            </span>{' '}
            and a strong background in educational and community-focused projects.
          </p>

          {/* Show middlebg image on larger screens */}
          <div className="hidden md:block mb-6  h-[400px] px-4 z-[20]">
            <Image 
              src={middlebg} 
              alt="middle background" 
              className="w-full h-full object-cover rounded-lg"
              priority
            />
          </div>

          {/* Show middlebg image on mobile screens */}
          <div className="md:hidden mb-6 py-6 h-[400px] px-4 z-[20]">
            <Image 
              src={middlebg} 
              alt="middle background" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Experience Section with increased padding */}
          <div className="z-[20] py-6 px-6 md:px-8">
            <ExperienceSection />
          </div>
          
          <div className="hidden md:block absolute bottom-4 left-[-75%] w-[350px] h-[350px]">
            <Image src={design} alt="Left Side Image" layout="fill" objectFit="contain" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
        <CoolSoftwareList />
      </section>
      
      {/* Learning Resources Section */}
      <section id="learning-resources">
        <LearningResources />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <GraphicsProjectsPage />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactPage />
      </section>
      
      <Footer />

    </div>
  );
};
export default Resume;