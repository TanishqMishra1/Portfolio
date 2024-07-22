// entities.ts
export interface Company {
    id: number;
    img: string;
    nameImg: string;
    name: string;
  }
  
  export interface Testimonial {
    id: number;
    role: string;
    company: string;
    quote: string;
    name: string;
    title: string;
  }
  
  export const companies: Company[] = [
    {
      id: 1,
      img: "/path/to/logo1.png",
      nameImg: "/path/to/name1.png",
      name: "Company One",
    },
    {
      id: 2,
      img: "/path/to/logo2.png",
      nameImg: "/path/to/name2.png",
      name: "Company Two",
    },
    // Add more companies as needed
  ];
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      title: "This is a testimonial text.",
      name: "John Doe",
      role: "CEO",
      company: "Company One",
      quote: "Demo"
    },
    {
      id: 2,
      title: "Another testimonial text.",
      name: "Jane Smith",
      role: "CTO",
      company: "Company Two",
      quote: "Demo"

    },
    // Add more testimonials as needed
  ];
  