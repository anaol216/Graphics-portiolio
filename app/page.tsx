import React from 'react';
import { FaPalette, FaDraftingCompass, FaLaptopCode } from 'react-icons/fa';
import { FaPencilRuler } from 'react-icons/fa';
import styles from './page.module.css';
import Header from './components/header';
const Resume = () => {
  const graphicSkills = [
    { icon: <FaPalette />, name: 'Graphics Design', color: '#FF6B6B' },
    { icon: <FaPencilRuler />, name: 'Logo Design', color: '#6A89CC' },
    { icon: <FaDraftingCompass />, name: 'Branding', color: '#FDD835' },
    { icon: <FaLaptopCode />, name: 'UI/UX Design', color: '#A1887F' },
  ];
  return (
    <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-[80%] mx-auto font-sans text-white">
      <Header />
      <div className="flex flex-col md:flex-row mt-12 items-start justify-between">
        <div className="md:w-[50%] mr-10"> {/* Wider left side */}
          <img
            src="/path/to/your/image.jpg" // Replace with your image path
            alt="Anaol Atinafu"
            className="rounded-full w-48 h-48 object-cover mb-4"
          />
          <h2 className="text-4xl font-bold mb-2 text-[#FFD700]">Anaol Atinafu</h2> {/* Strong hexadecimal color */}
          <p className="text-gray-400 mb-4 ml-4 ">Graphics and UI/UX Designer</p>

          <div className="mb-4 py-4 px-6 tracking-wide border-spacing-8 border-2 border-dashed rounded-lg border-gray-400 mt-6"   > {/* Increased border width */}
            <h3 className="text-lg font-bold mb-2 rounded text-black bg-[#c60797] justify-self-center p-1">EDUCATION</h3> {/* Strong hexadecimal color */}
            <p className="text-sm">TOP TRAINING</p>
            <p className="text-sm text-gray-400">Graphics Design and UI/UX</p>
            <p className="text-sm mt-2">2023-2026 Addis Ababa University</p>
            <p className="text-sm text-gray-400">Information Science(Bsc)</p>
            <p className="text-sm mt-2">2019-2022 - HIGH SCHOOL</p>
            <p className="text-sm text-gray-400">Studied from grade 9 to 12</p>
          </div>
          <div className="mb-4 py-4 h-[400px] px-6 "> {/* Fixed height and flex added here */}
            
          </div>
          

        </div>

        <div className="md:w-[80%] ml-8"> {/* Wider right side */}
          <p className="mb-4 text-2xl">
              I am a <span className="text-xl font-bold mb-3 text-[#c60797]">creative</span> and 
              <span className="text-xl font-bold mb-3 text-[#e336d7]"> passionate</span> graphic 
              <span className="text-xl font-bold mb-3 text-[#e3e036]"> designer</span> with expertise in 
              <span className="text-xl font-bold mb-3 text-[#e3e036]"> UI/UX design</span> and a strong background in educational and community-focused projects.
          </p>
          <div className="mb-4 py-4 px-6 tracking-wide border-spacing-8 border-2 border-dashed rounded-lg border-gray-400">
            <h3 className="text-lg font-bold mb-2 rounded text-black bg-[#FFD700] justify-self-center p-1">Experience</h3>
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
            <div className="mb-2">
              <p className="font-semibold text-[#FFD700]">The World Lutheran Federation</p>
              <p className="text-sm text-gray-400">2019-2020 - COMMUNITY FACILITATOR</p>
              <p className="text-sm text-gray-400">Implement communication and ...</p>
            </div>
          </div>
          <div className="mb-4 py-4 px-6 tracking-wide border-spacing-8 border-2 border-dashed rounded-lg border-gray-400">
            <h3 className="text-lg font-bold mb-2 rounded text-black bg-white justify-self-center py-1 px-4">My Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {graphicSkills.map((skill, index) => (
                <div key={index} className="relative overflow-hidden flex flex-col items-center justify-center py-6 px-3 rounded-md bg-gray-800"> {/* Square structure added */}
                  <span className="relative z-10 text-3xl mb-2">{skill.icon}</span>
                  <span className="relative z-10 font-serif text-lg">{skill.name}</span> {/* Font style changed */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-70 blur-lg transform scale-110"></div>
                  <div className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 ${styles.reflectiveEffect}`}></div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#FFD700]">Contact</h3> {/* Strong hexadecimal color */}
            <p className="text-sm">atinafuanaol@gmail.com</p>
            <p className="text-sm">+251 (0) 9788967912</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="mb-4 py-4 px-6 tracking-wide border-spacing-8 border-2 border-dashed rounded-lg border-gray-400 mt-6">
          <h3 className="text-lg font-bold mb-2 rounded text-white bg-[#0753c6] justify-self-center p-1">Software</h3> {/* Strong hexadecimal color */}
          <div className="flex flex-wrap gap-2">
            <div className="bg-gray-800 p-2 rounded">Id</div>
            <div className="bg-gray-800 p-2 rounded">Ai</div>
            <div className="bg-gray-800 p-2 rounded">Ps</div>
          </div>
        </div>
      </div>    
    </div>
  );
};

export default Resume;