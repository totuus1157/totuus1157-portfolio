import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Totuus1157 Portfolio', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Totuus1157',
  subtitle: "I'm the Web App(apprentice) Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'anzuote.jpg',
  paragraphOne: '●Web開発技術の習得に強い情熱を持ち、日々学習に励んでいます。',
  paragraphTwo: '●ピアノちょっと弾けます。',
  paragraphThree: '●自転車で日本一周した事あります。',
  resume: 'https://findy-code.io/share_profiles/6WP99bYouHa1o', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Apple Music Hi-Res Albums Database',
    info: '制作時期：2021/10/18〜2022/2/5',
    info2: ['React(Next.js)', 'Firebase', 'React-Bootstrap', 'TypeScript'],
    url: 'https://www.applemusichirezdb.com',
    repo: 'https://github.com/totuus1157/apple-music-hi-res-album-database', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'メモのできるカレンダー',
    info: '制作時期：2021/7/5〜2021/9/12',
    info2: ['React(Next.js)', 'Firebase', 'React-Bootstrap', 'Docker Compose', 'TypeScript'],
    url: 'http://next-calendar-app.vercel.app/',
    repo: 'https://github.com/totuus1157/next-calendar-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: '20世紀シンセサイザーギャラリー',
    info: '制作時期：2021/3/2〜2021/3/23',
    info2: ['React(Create React App)', 'Material UI', 'Docker Compose', 'TypeScript'],
    url: 'https://totuus1157.github.io/20th-synthesizers-gallery/',
    repo: 'https://github.com/totuus1157/20th-synthesizers-gallery', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: '年賀状当選番号チェッカー',
    info: '制作時期：2021/1/18〜2021/1/29',
    info2: ['React(Next.js)'],
    url: 'https://new-years-card-winner-number-checker.vercel.app',
    repo: 'https://github.com/totuus1157/new-years-card-winner-number-checker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'ご連絡はこちらからどうぞ。',
  btn: '📭️ E-Mail',
  email: 'totuus1157.forbusiness@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/totuus_tweet',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/totuus1157',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
