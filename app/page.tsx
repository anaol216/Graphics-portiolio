import React from 'react';

const Resume = () => {
  return (
    <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-[80%] mx-auto font-sans text-white"> 
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="md:w-[40%] mr-10"> {/* Wider left side */}
          <img
            src="/path/to/your/image.jpg" // Replace with your image path
            alt="Anaol Atinafu"
            className="rounded-full w-48 h-48 object-cover mb-4"
          />
          <h2 className="text-4xl font-bold mb-2 text-[#FFD700]">Anaol Atinafu</h2> {/* Strong hexadecimal color */}
          <p className="text-gray-400 mb-4 ml-4 ">Graphics and UI/UX Designer</p>

          <div className="mb-4 py-4 px-6 border-spacing-8 border-4 border-dashed border-gray-400"> {/* Increased border width */}
            <h3 className="text-lg font-semibold mb-2 text-[#FFD700]">Education</h3> {/* Strong hexadecimal color */}
            <p className="text-sm">TOP TRAINING</p>
            <p className="text-sm text-gray-400">UI/UX Design</p>
            <p className="text-sm mt-2">2016-2021 Addis Ababa University</p>
            <p className="text-sm text-gray-400">Fullstack Web Developer (Bac)</p>
            <p className="text-sm mt-2">2012-2015 - HIGH SCHOOL</p>
            <p className="text-sm text-gray-400">Studied from grade 9 to 12</p>
          </div>
        </div>

        <div className="md:w-[75%] ml-10"> {/* Wider right side */}
          <p className="mb-4">
            I am a creative and passionate graphic designer with expertise in UI/UX design and a strong background in educational and community-focused projects.
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-[#FFD700]">Experience</h3> {/* Strong hexadecimal color */}
            <div className="mb-2">
              <p className="font-semibold text-[#FFD700]">Palladium</p> {/* Strong hexadecimal color */}
              <p className="text-sm text-gray-400">Present - GRAPHICS DESIGN SERVICE PROVIDER</p>
              <p className="text-sm text-gray-400">Provide graphic design services for ...</p>
            </div>
            <div className="mb-2">
              <p className="font-semibold text-[#FFD700]">Whiz Kids Workshop</p> {/* Strong hexadecimal color */}
              <p className="text-sm text-gray-400">Present (Full Time) - GRAPHICS AND UI/UX DESIGNER</p>
              <p className="text-sm text-gray-400">Add details about your role here.</p>
            </div>
            <div className="mb-2">
              <p className="font-semibold text-[#FFD700]">Save the Children International</p> {/* Strong hexadecimal color */}
              <p className="text-sm text-gray-400">2021-2022 - EMERGENCY SHELTER + HH OFFICER</p>
              <p className="text-sm text-gray-400">Construction comes supervising ...</p>
            </div>
            <div className="mb-2">
              <p className="font-semibold text-[#FFD700]">The World Lutheran Federation</p> {/* Strong hexadecimal color */}
              <p className="text-sm text-gray-400">2019-2020 - COMMUNITY FACILITATOR</p>
              <p className="text-sm text-gray-400">Implement communication and ...</p>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-[#FFD700]">My Skills</h3> {/* Strong hexadecimal color */}
            <ul className="list-disc list-inside">
              <li>Graphics Design</li>
              <li>Branding</li>
              <li>Logo Design</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-[#FFD700]">Software</h3> {/* Strong hexadecimal color */}
            <div className="flex flex-wrap gap-2">
              <div className="bg-gray-800 p-2 rounded">Id</div>
              <div className="bg-gray-800 p-2 rounded">Ai</div>
              <div className="bg-gray-800 p-2 rounded">Ps</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#FFD700]">Contact</h3> {/* Strong hexadecimal color */}
            <p className="text-sm">atinafuanaol@gmail.com</p>
            <p className="text-sm">+251 (0) 9788967912</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;