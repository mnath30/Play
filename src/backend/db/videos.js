import { v4 as uuid } from "uuid";
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    title: "JavaScript Tutorial for Beginners",
    description:
      "Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. ",
    creator: "Programming with Mosh",
    views: "7,000",
    category: "Programming",
    thumbnail: "../../asset/thumbnail_1.jpg",
    url: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
  },
  {
    _id: uuid(),
    title: "JavaScript Crash Course For Beginners",
    description:
      "In this crash course we will go over the fundamentals of JavaScript including more modern syntax like classes, arrow functions, etc. This is the starting point on my channel for learning JS.",
    creator: "Traversy Media",
    views: "6,500",
    category: "Programming",
    thumbnail: "../../asset/thumbnail_2.jpg",
    url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
  },
  {
    _id: uuid(),
    title: "JavaScript Higher Order Functions & Arrays",
    description:
      "In this video we will look at some of the very powerful higher order functions and working with arrays. We will look at forEach, map, filter, reduce and sort.",
    creator: "Traversy Media",
    views: "500",
    category: "Programming",
    thumbnail: "../../asset/thumbnail_2.jpg",
    url: "https://www.youtube.com/watch?v=rRgD1yVwIvE",
  },
  {
    _id: uuid(),
    title: "JavaScript Array Reduce",
    description: "JavaScript Array Reduce",
    creator: "Programming with Mosh",
    views: "4,000",
    category: "Programming",
    thumbnail: "../../asset/thumbnail_1.jpg",
    url: "https://www.youtube.com/watch?v=g1C40tDP0Bk",
  },
  {
    _id: uuid(),
    title: "Cheentiyan || Hindi Story || Yaadon Ka Idiot Box",
    description:
      "India’s leading and most loved storyteller Neelesh Misra, also the founder of the Gaon Connection rural media enterprise, a prolific lyricist, scriptwriter, author, singer, speaker, journalist and Mentor.",
    creator: "Neelesh Misra",
    views: "2000",
    category: "Story",
    thumbnail: "../../asset/thumbnail_3.jpg",
    url: "https://www.youtube.com/watch?v=YGLvhoRGW-0&list=PLchqgSDLaRB_7kere6clt84mtsIwbxE_o",
  },
  {
    _id: uuid(),
    title: "Lucknow v/s Kanpur || Yaadon Ka Idiot Box",
    description:
      "India’s leading and most loved storyteller Neelesh Misra, also the founder of the Gaon Connection rural media enterprise, a prolific lyricist, scriptwriter, author, singer, speaker, journalist and Mentor.",
    creator: "Neelesh Misra",
    views: "2000",
    category: "Story",
    thumbnail: "../../asset/thumbnail_3.jpg",
    url: "https://www.youtube.com/watch?v=G7apFazVBbI&list=PLchqgSDLaRB_7kere6clt84mtsIwbxE_o&index=4",
  },
  {
    _id: uuid(),
    title: "Ek Kahani Aisi Bhi - Episode 43",
    description:
      "Mohan ek behad alag kism ka writer thha aur uski kahaniyon mein sachchai thhi. Toh kya thhi uski nayi kitaab ki kahani ki sachchai?",
    creator: "Red FM India",
    views: "900",
    category: "Story",
    thumbnail: "../../asset/thumbnail_4.jpg",
    url: "https://www.youtube.com/watch?v=P5rpIGv5hdA",
  },
  {
    _id: uuid(),
    title: "Hakka Noodles Recipe",
    description: "Full recipe for Veg Hakka Noodles",
    creator: "Your Food Lab",
    views: "8000",
    category: "Food",
    thumbnail: "../../asset/thumbnail_5.jpg",
    url: "https://www.youtube.com/watch?v=4Q12_scB6AY",
  },
  {
    _id: uuid(),
    title: "Chicken Dum Biryani Recipe",
    description: "Full recipe for Chicken Biryani",
    creator: "Your Food Lab",
    views: "8000",
    category: "Food",
    thumbnail: "../../asset/thumbnail_5.jpg",
    url: "https://www.youtube.com/watch?v=uygb9O-MDPw",
  },
  {
    _id: uuid(),
    title: "Pop Hits 2021",
    description: "Pop Hits 2021 (top songs)",
    creator: "Pop Songs Official",
    views: "8000",
    category: "Music",
    thumbnail: "../../asset/thumbnail_6.jpg",
    url: "https://www.youtube.com/watch?v=aJOTlE1K90k",
  },
];
