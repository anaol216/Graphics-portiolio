// data/graphicsProjectsData.ts

export interface GraphicsProject {
    title: string;
    description: string;
    imageUrl: string;
    detailsUrl: string; // URL to the detailed project page
  }
  
  export const graphicsProjects: GraphicsProject[] = [
    {
      title: 'Logo Design: Modern Minimalist',
      description: 'A minimalist logo design for a tech startup, focusing on clean lines and a modern aesthetic.',
      imageUrl: '/images/logo-design-1.jpg',
      detailsUrl: '/projects/logo-design-1', // Replace with your actual details URL
    },
    {
      title: 'Brand Identity: Cafe Branding',
      description: 'Complete brand identity package for a local cafe, including logo, color palette, and typography.',
      imageUrl: '/images/cafe-branding.jpg',
      detailsUrl: '/projects/cafe-branding', // Replace with your actual details URL
    },
    {
      title: 'Poster Design: Music Festival',
      description: 'Vibrant poster design for a music festival, capturing the energy and excitement of the event.',
      imageUrl: '/images/music-poster.jpg',
      detailsUrl: '/projects/music-poster', // Replace with your actual details URL
    },
    // Add more graphics projects as needed
  ];