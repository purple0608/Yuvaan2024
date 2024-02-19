// import { lazy } from 'react';
// const treasure = lazy(() => import("./images_cards/treasure.jpg"));
// const cid = lazy(() => import("./images_cards/cid6.jpg"));
// const ygt = lazy(() => import("./images_cards/yuvaantalent1.jpg"));
// const symphony = lazy(() => import("./images_cards/symphony4.jpg"));
// const riff = lazy(() => import("./images_cards/riff4.jpg"));
// const trivia = lazy(() => import("./images_cards/trivizaquiz1.jpg"));
// const mun = lazy(() => import("./images_cards/mun1.png"));
// const movie = lazy(() => import("./images_cards/movemania2.jpg"));
// const cosplay = lazy(() => import("./images_cards/cosplay.jpg"));

// import treasure from "./images_cards/treasure.jpg";
// import cid from "./images_cards/cid6.jpg";
// import ygt from "./images_cards/yuvaantalent1.jpg";
// import symphony from "./images_cards/symphony4.jpg";
// import riff from "./images_cards/riff4.jpg";
// import trivia from "./images_cards/trivizaquiz1.jpg";
// import mun from "./images_cards/mun1.png";
// import movie from "./images_cards/movemania2.jpg";
// import cosplay from "./images_cards/cosplay.jpg";

export interface EventData {
  title: string;
  date: string;
  time: string;
  venue: string;
  info: string;
    link: string;
    forms: string[];
  bg: string;
}

export const Data: EventData[] = [
  {
    title: "Treasure Hunt",
    date: "02.03.2024",
    time: "10:00am-12:00-pm, 02:00pm-03:00pm",
    venue: "Ground",
    info: "Treasure hunt, the idea of hunting for hidden treasures has always been exciting and adventurous. In treasure hunts, participants work in small teams to find the treasure with the help of given clues. The team who decodes the clue and finds the treasure first will win the game.",
    link: "https://unstop.com/p/treasure-hunt-yuvaan24-indian-institute-of-information-technology-iiit-guwahati-891123",
    forms: [],
    bg: "images_cards/treasure.jpg",
  },
  {
    title: "Mock CID",
    date: "03:03:2024",
    time: "10:00am-12:00pm, 02:00pm-04:00pm",
    venue: "Ground",
    info: "Dive into the intrigue of Mock CID, a riveting event challenging teams of 3-5 to solve a murder mystery in two gripping rounds.",
    link: "https://unstop.com/p/mock-cid-yuvaan24-indian-institute-of-information-technology-iiit-guwahati-891072",
    forms: [],
    bg: "images_cards/cid6.jpg",
  },
  {
    title: "Yuvaans Got Talent",
    date: "01:03:2024",
    time: "12:00pm-03:00pm",
    venue: "Stage",
    info: "Welcome to 'Yuvaan's Got Talent,' an extraordinary showcase of diverse talents! Participants will have the opportunity to present two captivating performances - one in the initial round and another in the final round. Don't miss this chance to witness incredible talents and be part of the excitement!",
    link: "https://unstop.com/p/yuvaans-got-talent-yuvaan24-indian-institute-of-information-technology-iiit-guwahati-890544",
    forms: ["https://forms.gle/KN1Zr1iMGzj12p4W9"],
    bg: "images_cards/yuvaantalent1.jpg",
  },
  {
    title: "Symphony",
    date: "02:03:2024",
    time: "03:00pm-04:30pm",
    venue: "Stage",
    info: "Welcome to Symphony, an electrifying solo/group singing battle open to all music enthusiasts! Are you ready to showcase your vocal prowess or band's musical harmony? Embrace the stage, unleash your creativity, and let your music transcend boundaries. Whether you're a solo virtuoso or part of a harmonious ensemble, Symphony invites you to be part of a vibrant community celebrating the magic of music. Join us for an exhilarating journey of melodies and rhythms, where talent knows no boundaries.",
    link: "https://unstop.com/p/symphony-solo-and-duo-indian-institute-of-information-technology-iiit-guwahati-896117",
      forms: ["https://forms.gle/etDrxF7CZ1szL2dm6", "https://forms.gle/etDrxF7CZ1szL2dm6"],
    bg: "images_cards/symphony4.jpg",
  },
  {
    title: "Riff",
    date: "03:03:2024",
    time: "03:00pm-04:00pm",
    venue: "Stage",
    info: 'Embark on a musical journey with "Riff" - an online instrumental competition hosted on Instagram! In Round 1, participants showcase their talent with a 1.30-minute solo performance of any genre or language, judged on factors like reel popularity and rhythm. Round 2 beckons the top contenders to an offline stage, where 5-7 finalists will captivate audiences with a 3-minute solo on their instrument of choice, sans accompaniment. Precision, passion, and musical finesse await those ready to make their mark in this symphony of talent!',
    link: "https://unstop.com/p/riff-yuvaan24-indian-institute-of-information-technology-iiit-guwahati-891048",
    forms: ["https://forms.gle/MgV2Bda9GCGVXJsi6"],
    bg: "images_cards/riff4.jpg",
  },

  {
    title: "Move Mania",
    date: "02:03:2024",
    time: "05:00pm-06:30pm",
    venue: "Stage",
    info: "Where dreams twirl, emotions pirouette, and the stage becomes a canvas of expression, showcase your moves and jalwa in Move Mania.",
    link: "https://unstop.com/p/move-mania-indian-institute-of-information-technology-iiit-guwahati-891189",
    forms: ["https://forms.gle/kHEcAfsBbe8kpYen7"],
    bg: "images_cards/movemania2.jpg",
  },
  {
    title: "Cosplay",
    date: "02:03:2024",
    time: "04:00pm-05:30pm",
    venue: "Townhall",
    info: "Participants will dress in costumes and make-up, representing characters from    anime, video games, television and film. The cosplayers will also have to act in character and put on a performance on stage.",
    link: "https://unstop.com/events/cosplay-indian-institute-of-information-technology-iiit-guwahati-895338",
    forms: [],
    bg: "images_cards/cosplay.jpg",
  },
  {
    title: "Trivia Quiz",
    date: "03:03:2024",
    time: "02:30pm-04:00pm",
    venue: "C56",
    info: "Embark on an enchanting adventure at Fantasy Trivia Night! Unleash your expertise on fantasy series, movies, and anime. Don't miss this magical event!",
    link: "https://unstop.com/p/trivia-quiz-yuvaan24-indian-institute-of-information-technology-iiit-guwahati-895352",
    forms: ["https://forms.gle/XDb74hiWD2zgGqxy9"],
    bg: "images_cards/trivizaquiz1.jpg",
  },
  {
    title: "Model united Nations",
    date: "02:03:2024-03:03:2024",
    time: "09:00am-05:00pm",
    venue: "IIITG Academic Block",
    info: "",
    link: "https://georgerahul24.github.io/MUN-Website-2024/",
    forms: [],
    bg: "images_cards/mun1.png",
  },
];
