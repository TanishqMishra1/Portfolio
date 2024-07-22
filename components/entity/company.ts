// entities.ts
export interface Company {
  id: number;
  img: string;
  nameImg: string;
  name: string;
}

export interface Testimonial {
  id: number;
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
    quote:
      "Collaborating with Tanishq was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Tanishq's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Tanishq is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    id: 2,
    quote:
      "Collaborating with Tanishq was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Tanishq's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Tanishq is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    id: 3,
    quote:
      "Collaborating with Tanishq was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Tanishq's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Tanishq is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    id: 4,
    quote:
      "Collaborating with Tanishq was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Tanishq's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Tanishq is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    id: 5,
    quote:
      "Collaborating with Tanishq was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Tanishq's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Tanishq is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];
