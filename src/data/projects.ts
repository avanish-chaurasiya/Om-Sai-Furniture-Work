
import { ProjectType } from "@/components/Projects/ProjectGrid.tsx";

// Sample project data
const projectsData: ProjectType[] = [
  {
    id: "ajmera-i-land",
    title: "Ajmera I-Land",
    category: "Residential",
    featured: true,
    imageUrl: "/wadala-3bhk/hall-4.jpg",
    gallery: [
      "/wadala-3bhk/hall-4.jpg",
      "/wadala-3bhk/hall1.jpg",
      "/wadala-3bhk/hall-2.jpg",
      "/wadala-3bhk/hall-3.jpg",
      "/wadala-3bhk/master-bedroom1.jpg",
      "/wadala-3bhk/master-bedroom2.jpg",
      "/wadala-3bhk/master-bedroom3.jpg",
      "/wadala-3bhk/parent-room.jpg",
      "/wadala-3bhk/children-bedroom-1.jpg",
      "/wadala-3bhk/children-bedroom-2.jpg",
      "/wadala-3bhk/children-bedroom-3.jpg",
      "/wadala-3bhk/children-bedroom-4.jpg",
      "/wadala-3bhk/entrance1.jpg",
      "/wadala-3bhk/entrance2.jpg",
      "/wadala-3bhk/balcony.jpg",
      "/wadala-3bhk/mandir.jpg"
    ],
    description: "This project at Ajmera I-Land showcases our complete turnkey capabilities in creating a personalized home for a multi-generational family. Our team managed the entire scope for this 3 BHK residence—comprising a serene master bedroom, a tranquil parent's bedroom, and a vibrant children's room—providing a single point of contact for a seamless transformation. We handled all foundational civil changes and interior finishing, including a sophisticated color palette and a multi-layered lighting scheme that creates warmth and highlights key features, such as the textured living room wall. From the elegant entrance foyer to the custom-crafted mandir, every detail was considered. All furniture, including the dual-study unit in the children's room and the integrated cabinetry throughout, was custom-designed and built by our craftsmen. The result is a cohesive, beautifully realized home that seamlessly blends practicality with personal style, reflecting the unique needs of the entire family.",
    details: {
      location: "Wadala, Mumbai",
      year: 2021,
      size: "3 BHK (1,200 sq ft)",
      services: ["Carpentry", "Painting", "Civil Work", "All Interior Work"]
    }
  },
  {
    id: "lodha-new-cuffe-parade",
    title: "Lodha New Cuffe Parade",
    category: "Residential",
    featured: true,
    imageUrl: "/lodha-2BHK/hall2.jpeg",
    gallery: [
      "/lodha-2BHK/hall2.jpeg",
      "/lodha-2BHK/hall1.jpeg",
      "/lodha-2BHK/hall3.jpeg",
      "/lodha-2BHK/hall4.jpeg",
      "/lodha-2BHK/master-bedroom1.jpeg",
      "/lodha-2BHK/master-bedroom2.jpeg",
      "/lodha-2BHK/bedroom1.jpeg",
      "/lodha-2BHK/bedroom2.jpeg",
      "/lodha-2BHK/kitchen1.jpeg",
      "/lodha-2BHK/kitchen2.jpeg",
      "/lodha-2BHK/kitchen3.jpeg",
      "/lodha-2BHK/bathroom1.jpeg",
      "/lodha-2BHK/bathroom2.jpeg",
      "/lodha-2BHK/bathroom3.jpeg",
      "/lodha-2BHK/bathroom4.jpeg",
      "/lodha-2BHK/bathroom5.jpeg",
      "/lodha-2BHK/bathroom6.jpeg",
      "/lodha-2BHK/Dinning-table.jpeg"
    ],
    description: "This Lodha New Cuffe Parade transformation combines industrial elements with warm, modern touches. We preserved the original brick walls and concrete floors while introducing custom built-ins and carefully selected furnishings to create a sophisticated city dwelling.",
    details: {
      location: "Wadala, Mumbai",
      year: 2024,
      size: "700 sq ft",
      services: ["Carpentry", "Painting", "Civil Work", "All Interior Work"]
    }
  },
  {
    id: "lodha-wadala",
    title: "Lodha New Cuffe Parade",
    category: "Residential",
    featured: false,
    imageUrl: "/2-BHK/hall1.jpg",
    gallery: [
      "/2-BHK/hall1.jpg",
      "/2-BHK/hall2.jpg",
      "/2-BHK/hall3.jpg",
      "/2-BHK/bedroom1.jpg",
      "/2-BHK/bedroom2.jpg",
      "/2-BHK/children-room.jpg",
      "/2-BHK/kitchen1.jpg",
      "/2-BHK/kitchen2.jpg",
      "/2-BHK/bathroom1.jpg",
      "/2-BHK/bathroom2.jpg",
      "/2-BHK/gallery.jpg",
      "/2-BHK/mandir.jpg",
      "/2-BHK/wall-photo.jpg"
    ],
    description: "This project showcases our ability to deliver a complete, move-in-ready home. For this 2 BHK flat, our team managed all aspects of the interior work, from space planning to the final coat of paint. Every piece of furniture was custom-designed and built by our craftsmen to perfectly fit the space and the client's lifestyle, creating a beautiful and cohesive living environment.",
    details: {
      location: "Wadala , Mumbai",
      year: 2023,
      size: "700 sq ft",
      services: ["Carpentry", "Painting", "Civil Work", "All Interior Work"]
    }
  },
  {
    id: "commercial-office",
    title: "Commercial Office",
    category: "Commercial",
    featured: true,
    imageUrl: "/office-1/Reception-area.png",
    gallery: [
      "/office-1/Reception-area.png",
      "/office-1/Manager-office.png",
      "/office-1/manager-office2.png",
      "/office-1/kitchen-area.png",
      "/office-1/work-space-1.png",
      "/office-1/work-space-2.png",
      "/office-1/work-space-3.png",
      "/office-1/multi-work-space.png"
    ],
    description: "This 1200 sqft commercial project highlights our expertise in delivering complete turnkey solutions for modern workspaces. Our team managed every aspect of the build-out, from initial civil work to the final finishes. The scope included all custom carpentry for workstations and storage, a professional painting scheme, and a strategic lighting plan designed for productivity. By handling all elements in-house, we ensured a seamless, efficient process and delivered a high-quality, functional office space ready for business.",
    details: {
      
      location: "Chembur, Mumbai",
      year: 2022,
      size: "1,200 sq ft",
      services: ["Carpentry", "Painting", "Civil Work", "All Interior Work"]
    }
  },
  {
    id: "modern-office",
    title: "Agency Office- Parel",
    category: "Commercial",
    featured: false,
    imageUrl: "/office-2/Meeting_area.png",
    gallery: [
      "/office-2/Meeting_area.png",
      "/office-2/Manager_office.png",
      "/office-2/Multi_work_space1.png",
      "/office-2/Multi_work_space2.png",
      "/office-2/work_space_1.png",
      "/office-2/work_space_2.png",
      "/office-2/work_space3.png"
    ],
    description: "For this 900 sqft creative agency office, we provided a complete start-to-finish solution. Our team handled everything from the basic construction to the final touches. We built all the custom desks and storage, applied a modern color scheme, and installed smart lighting to create a vibrant and productive atmosphere. By managing the entire job ourselves, the project was finished smoothly, resulting in a stylish and practical workspace perfect for a busy agency.",
    details: {
      location: "Parel, Mumbai",
      year: 2021,
      size: "900 sq ft",
      services: ["Carpentry", "Painting", "Civil Work", "All Interior Work"]
    }
  },
  {
    id: "dhannu-villa",
    title: "Dhannu Villa",
    category: "Residential",
    featured: false,
    imageUrl: "/Digras-Villa/3d villa.jpg",
    gallery: [
      "/Digras-Villa/3d villa.jpg",
      "/Digras-Villa/Day-front.jpg",
      "/Digras-Villa/Outside-villa1.jpg",
      "/Digras-Villa/Outside-villa2.jpg",
      "/Digras-Villa/Outside-villa3.jpg",
      "/Digras-Villa/Outside-villa4.jpg",
      "/Digras-Villa/Living-room1.jpg",
      "/Digras-Villa/Living-room2.jpg",
      "/Digras-Villa/Living-room3.jpg",
      "/Digras-Villa/kitchen1.png"
    ],
    description: "For the large 3600 sqft Dhanu Villa in Digras, Akola, our team provided a complete start-to-finish service for both the inside and outside of the house. Our work included all the basic construction, detailed woodwork, and all the plumbing and electrical wiring. We handled all the interior jobs, from the floors to the ceilings, and painted the entire house beautifully. By managing every part of this big project, we made sure everything went smoothly and delivered a wonderful home built with top quality.",
    details: {
      location: "Digras, Akola",
      year: 2023,
      size: "3,600 sq ft",
      services: ["Carpentry", "Painting", "Civil Work", "All Interior Work", "Electrical Work", "Plumbing Work"]
    }
  }
];

export default projectsData;
