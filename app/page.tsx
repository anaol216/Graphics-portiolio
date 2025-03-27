import React from 'react';
import Image from 'next/image';
import GraphicsProjectsPage from './pages/Projects';
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

const Skills :React.FC=() => {
  const graphicSkills = [
    { icon: <FaPalette />, name: 'Graphics Design', color: '#FF6B6B' },
    { icon: <FaPencilRuler />, name: 'Logo Design', color: '#6A89CC' },
    { icon: <FaDraftingCompass />, name: 'Branding', color: '#FDD835' },
    { icon: <FaLaptopCode />, name: 'UI/UX Design', color: '#A1887F' },
  ];

  return (
    <div className="mb-4 py-4 px-4 ">
            <h3 className="text-lg font-bold mb-2 rounded text-black bg-white justify-self-center py-1 px-4">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {graphicSkills.map((skill, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden flex flex-col items-center justify-center py-6 px-3 rounded-md bg-gray-800 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-purple-500"
                >
                  <span className="relative z-10 text-3xl mb-2">{skill.icon}</span>
                  <span className="relative z-10 font-serif text-lg">{skill.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-70 blur-lg transform scale-110"></div>
                  <div className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 ${styles.reflectiveEffect}`}></div>
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
      <div className="flex flex-col md:flex-row mt-6 md:mt-12 items-start justify-between">
        <AboutMeSection />
        <div className="md:w-[80%] md:ml-12 relative"> {/* Added relative positioning */}
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

          <div className="md:hidden mb-4 py-6 h-[200px] px-4 z-[20]">
            <Image src={middlebg} alt="middlebg.jpg" />
          </div>

          <div className="hidden md:block  py-4 px-4 tracking-wide border-spacing-8 border-2 border-dashed rounded-lg border-gray-400 mt-6 mb-10">
            <h3 className="text-lg font-bold mb-2 rounded text-[#c9c8c9]  bg-transparent justify-self-center p-1">EDUCATION-MOBILE</h3>
            <p className="text-sm">TOP TRAINING</p>
            <p className="text-sm text-gray-400">Graphics Design and UI/UX</p>
            <p className="text-sm mt-2">2023-2026 Addis Ababa University</p>
            <p className="text-sm text-gray-400">Information Science(Bsc)</p>
            <p className="text-sm mt-2">2019-2022 - HIGH SCHOOL</p>
            <p className="text-sm text-gray-400">Studied from grade 9 to 12</p>
          </div>

          <div className="z-[20]">
            <ExperienceSection />
          </div>
          <div className="hidden md:block absolute bottom-4 left-[-75%] w-[350px] h-[350px]">
            <Image src={design} alt="Left Side Image" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
      <CoolSoftwareList />
      <GraphicsProjectsPage />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Resume;