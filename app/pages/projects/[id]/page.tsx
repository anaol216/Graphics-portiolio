import { graphicsProjects } from '../../../data/ProjectsData/projectsData';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = graphicsProjects.find(p => p.id === params.id);

  if (!project) {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-6 text-[#FFD700]">Project Not Found</h1>
          <Link 
            href="/projects" 
            className="bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#e6c000] transition-colors duration-300 inline-block"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      {/* Background animations (same as your listing page) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-gradient-to-l from-green-500 to-purple-500 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="container mx-auto p-8 pt-20 relative z-10">
        <Link 
          href="/projects" 
          className="text-[#FFD700] hover:underline mb-8 inline-flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Projects
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Project Images Column */}
          <div>
            <div className="relative rounded-2xl shadow-2xl overflow-hidden group">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {project.galleryImages && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-[#FFD700]">Project Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.galleryImages.map((img, index) => (
                    <div 
                      key={index} 
                      className="relative aspect-square rounded-lg overflow-hidden group"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - Variation ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Project Details Column */}
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#FFD700] text-black px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
              {project.tags.map(tag => (
                <span key={tag} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold mb-4 text-[#FFD700]">{project.title}</h1>
            
            {project.client && (
              <p className="text-gray-400 mb-2">
                <span className="font-medium">Client:</span> {project.client}
              </p>
            )}
            
            {project.year && (
              <p className="text-gray-400 mb-6">
                <span className="font-medium">Year:</span> {project.year}
              </p>
            )}

            <div className="prose prose-invert max-w-none mb-8">
              {project.detailedDescription.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-4 text-gray-300">{paragraph}</p>
              ))}
            </div>

            <div className="space-y-4">
              <a
                href={project.googleDriveDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#e6c000] transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Project Files
              </a>

              {project.client && (
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-medium text-[#FFD700] mb-2">Client Testimonial</h4>
                  <p className="text-gray-300 italic">"Working with this designer was exceptional. They delivered beyond our expectations and helped elevate our brand."</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}