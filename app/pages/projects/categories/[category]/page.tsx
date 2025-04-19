// app/projects/category/[category]/page.tsx
import { graphicsProjects } from '@/data/ProjectsData/projectsData';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const filteredProjects = graphicsProjects.filter(
    p => p.category.toLowerCase() === params.category
  );

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      <div className="container mx-auto p-8 pt-20">
        <Link href="/projects" className="text-[#FFD700] hover:underline mb-8 inline-block">
          ← Back to All Projects
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-[#FFD700] capitalize">
          {params.category} Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative rounded-2xl shadow-2xl overflow-hidden group transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={`/projects/${project.id}`}
                  className="bg-[#FFD700] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#e6c000] transition-colors duration-300"
                >
                  See Details
                </Link>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 tracking-wide">{project.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background animations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-gradient-to-l from-green-500 to-purple-500 rounded-full blur-2xl animate-bounce"></div>
      </div>
    </div>
  );
}