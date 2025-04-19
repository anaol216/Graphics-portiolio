// app/data/ProjectsData/projectsData.ts
export interface GraphicsProject {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  detailsUrl: string;
  category: string;
  tags: string[];
  googleDriveDownloadUrl: string;
  galleryImages?: string[];
  client?: string;
  year?: number;
  featured?: boolean;
}

export const graphicsProjects: GraphicsProject[] = [
  {
    id: "modern-minimalist-logo",
    title: "Logo Design: Modern Minimalist",
    description: "A minimalist logo design for a tech startup, focusing on clean lines and modern aesthetic",
    detailedDescription: `This project involved creating a brand identity for TechStart Inc., a cutting-edge technology company. 
    
The logo combines geometric precision with organic flow elements to represent the balance between technology and human-centric design. 

Deliverables included:
- Primary logo (horizontal and vertical layouts)
- Secondary brand marks
- Full color and monochrome versions
- Brand guidelines document
- Stationery suite`,
    imageUrl: "/infinity.png",
    detailsUrl: "/projects/modern-minimalist-logo",
    category: "Logo",
    tags: ["minimalist", "tech", "branding"],
    googleDriveDownloadUrl: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE",
    galleryImages: [
      "/infinity.jpg",
      "/light.jpg",
      "/rec.jpg"
    ],
    client: "TechStart Inc.",
    year: 2023,
    featured: true
  },
  {
    id: "cafe-branding",
    title: "Cafe Brand Identity",
    description: "Complete brand identity for a specialty coffee shop with organic vibes",
    detailedDescription: `Developed a warm, inviting brand identity for "Bean There" cafe that reflects their commitment to organic, fair-trade coffee.

Project components:
- Logo design with custom typography
- Color palette development
- Packaging design for coffee beans
- Menu design system
- Social media templates
- Interior signage system`,
    imageUrl: "/middlebg.jpg",
    detailsUrl: "/projects/cafe-branding",
    category: "Branding",
    tags: ["food", "packaging", "typography"],
    googleDriveDownloadUrl: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE",
    galleryImages: [
      "/profile.jpg",
      "/rec.jpg"
    ],
    client: "Bean There Cafe",
    year: 2022
  },
  {
    id: "music-festival-poster",
    title: "Music Festival Poster",
    description: "Vibrant poster design for an electronic music festival",
    detailedDescription: `Created the main promotional poster for "Neon Pulse" music festival featuring 25+ international DJs.

Design highlights:
- Custom psychedelic illustrations
- Glow-in-the-dark ink effects
- Responsive design system for digital/social media
- Coordinating ticket design
- Merchandise applications`,
    imageUrl: "/light.jpg",
    detailsUrl: "/projects/music-festival-poster",
    category: "Print",
    tags: ["event", "typography", "illustration"],
    googleDriveDownloadUrl: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE",
    client: "Neon Pulse Events",
    year: 2023,
    featured: true
  }
];

// Utility function to get projects by category
export const getProjectsByCategory = (category: string) => {
  return graphicsProjects.filter(project => 
    project.category.toLowerCase() === category.toLowerCase()
  );
};

// Utility function to get featured projects
export const getFeaturedProjects = () => {
  return graphicsProjects.filter(project => project.featured);
};

// Utility to convert Google Drive share links to download links
export const getGoogleDriveDownloadLink = (shareLink: string) => {
  const fileIdMatch = shareLink.match(/\/d\/(.+?)\//) || shareLink.match(/id=(.+?)(&|$)/);
  const fileId = fileIdMatch ? fileIdMatch[1] : shareLink;
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
};