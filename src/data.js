import img1 from "./assets/tour-1.jpeg";
import img2 from "./assets/tour-2.jpeg";
import img3 from "./assets/tour-3.jpeg";
import img4 from "./assets/tour-4.jpeg";

export const pageLinks = [
  { id: 1, link: "#home", text: "Home" },
  { id: 2, link: "#about", text: "About" },
  { id: 3, link: "#services", text: "Services" },
  { id: 4, link: "#tours", text: "Tour" },
];

export const socialLinks = [
  { id: 1, link: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, link: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, link: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const servicesData = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const toursData = [
  {
    id: 1,
    img: img1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: "6 days",
    cost: "from $2100",
  },
  {
    id: 2,
    img: img2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: "11 days",
    cost: "from $1400",
  },
  {
    id: 3,
    img: img3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: "8 days",
    cost: "from $5000",
  },
  {
    id: 4,
    img: img4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    duration: "20 days",
    cost: "from $3300",
  },
];
