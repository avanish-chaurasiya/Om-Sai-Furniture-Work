import { ProjectType } from "@/components/Projects/ProjectGrid";

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
    intro:"Complete 3 BHK Home Transformation at Ajmera I-Land, Wadala",
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
    description: "A cozy yet spacious Lodha New Cuffe Parade retreat that celebrates its natural surroundings. Heavy timber beams, natural stone, and a warm color palette create an inviting sanctuary that frames stunning mountain views.",
    details: {
      client: "Williams Family",
      location: "Wadala , Mumbai",
      year: 2023,
      size: "700 sq ft",
      services: ["Carpentry", "Painting", "Civil Work", "All Interior Work"]
    }
  },
  {
    id: "boutique-cafe",
    title: "Artisan Café",
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
    description: "This café design balances functionality with aesthetic appeal, creating a welcoming atmosphere for customers. Custom lighting fixtures, handcrafted tiles, and carefully selected furnishings create a distinctive brand experience.",
    details: {
      client: "Artisan Coffee Co.",
      location: "Portland, OR",
      year: 2021,
      size: "1,200 sq ft",
      services: ["Space Planning", "Interior Design", "Lighting Design", "Furniture Selection"]
    }
  },
  {
    id: "modern-office",
    title: "Creative Agency Office",
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
    description: "This office design balances practical work requirements with inspiring creative spaces. A mix of private areas and collaborative zones encourages both focused work and team interaction.",
    details: {
      client: "Pixel Creative Agency",
      location: "Austin, TX",
      year: 2021,
      size: "5,800 sq ft",
      services: ["Space Planning", "Interior Design", "Furniture Selection", "Branding Integration"]
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
    description: "This Dhannu Villa blends traditional architectural elements with contemporary furnishings. The design emphasizes indoor-outdoor living with flowing spaces that open to lush gardens and terraces.",
    details: {
      client: "Garcia Family",
      location: "Santa Barbara, CA",
      year: 2023,
      size: "600 sq ft",
      services: ["Carpentry", "Painting", "Civil Work", "All Interior Work"]
    }
  }
];

export default projectsData;
