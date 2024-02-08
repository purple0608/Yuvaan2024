import hero1 from "./images_cards/hero1.jpg";
import hero2 from "./images_cards/hero2.jpg";
import riff from "./images_cards/riff4.jpg";
import mun from "./images_cards/mun1.png";
import cid from "./images_cards/cid5.jpg";
import got from "./images_cards/yuvaantalent1.jpg"

export interface EventData {
  title: string;
  date: string;
  time: string;
  venue: string;
  info: string;
  bg: typeof hero1;
}

export const Data: EventData[] = [
    {
    title: "Treasure Hunt",
    date: "02.03.2024",
    time: "10:00am-12:00-pm, 02:00pm-03:00pm",
    venue: "Ground",
    info: "Treasure hunt, the idea of hunting for hidden treasures has always been exciting and adventurous. In treasure hunts, participants work in small teams to find the treasure with the help of given clues. The team who decodes the clue and finds the treasure first will win the game.",
    bg: hero1,
  },
    {
    title: "Mock CID",
    date: "03:03:2024",
    time: "10:00am-12:00pm, 02:00pm-04:00pm",
    venue: "Ground",
    info: "Dive into the intrigue of Mock CID, a riveting event challenging teams of 3-5 to solve a murder mystery in two gripping rounds.",
    bg: cid,
  },
    {
    title: "Model united Nations",
    date: "dd:mm:yyyy",
    time: "hh:mmpm/am",
    venue: "IIITG Academic Block",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper orci dolor, eget tincidunt purus finibus vitae. Praesent posuere purus sed massa tempor, eget sollicitudin tortor fermentum. Nam eget enim quis ante finibus iaculis. Nulla libero eros, tincidunt nec felis eu, convallis tempus diam. Nam ornare at nunc a pharetra. Pellentesque blandit vestibulum tortor ut accumsan. Pellentesque tincidunt felis ut ante interdum volutpat. Quisque eu ullamcorper nunc. Ut at leo finibus enim hendrerit accumsan vehicula vitae velit. Donec dui enim, elementum auctor consectetur accumsan, semper sit amet nisi. In efficitur hendrerit augue nec dignissim.",
    bg: mun,
  },{
    title: "Yuvaans Got Talent",
    date: "01:03:2024",
    time: "12:00pm-03:00pm",
    venue: "Stage",
    info: "Welcome to 'Yuvaan's Got Talent,' an extraordinary showcase of diverse talents! Participants will have the opportunity to present two captivating performances - one in the initial round and another in the final round. Don't miss this chance to witness incredible talents and be part of the excitement!",
    bg: got,
  },
  {
    title: "Riff",
    date: "03:03:2024",
    time: "03:00pm-04:00pm",
    venue: "Stage",
    info: "Embark on a musical journey with \"Riff\" - an online instrumental competition hosted on Instagram! In Round 1, participants showcase their talent with a 1.30-minute solo performance of any genre or language, judged on factors like reel popularity and rhythm. Round 2 beckons the top contenders to an offline stage, where 5-7 finalists will captivate audiences with a 3-minute solo on their instrument of choice, sans accompaniment. Precision, passion, and musical finesse await those ready to make their mark in this symphony of talent!",
    bg: riff,
  },
  {
    title: "Symphony",
    date: "02:03:2024",
    time: "03:00pm-04:30pm",
    venue: "Stage",
    info: "Welcome to Symphony, an electrifying solo/group singing battle open to all music enthusiasts! Are you ready to showcase your vocal prowess or band's musical harmony? Embrace the stage, unleash your creativity, and let your music transcend boundaries. Whether you're a solo virtuoso or part of a harmonious ensemble, Symphony invites you to be part of a vibrant community celebrating the magic of music. Join us for an exhilarating journey of melodies and rhythms, where talent knows no boundaries.",
    bg: "hero5.jpg",
  },
  {
    title: "Move Mania",
    date: "02:03:2024",
    time: "05:00pm-06:30pm",
    venue: "Stage",
    info: "Where dreams twirl, emotions pirouette, and the stage becomes a canvas of expression, showcase your moves and jalwa in Move Mania.",
    bg: "hero5.jpg",
  },
  {
    title: "Cosplay",
    date: "02:03:2024",
    time: "04:00pm-05:30pm",
    venue: "Townhall",
    info: "Participants will dress in costumes and make-up, representing characters from    anime, video games, television and film. The cosplayers will also have to act in character and put on a performance on stage.",
    bg: "hero5.jpg",
  },
  {
    title: "Trivia Quiz",
    date: "03:03:2024",
    time: "02:30pm-04:00pm",
    venue: "C56",
    info: "Embark on an enchanting adventure at Fantasy Trivia Night! Unleash your expertise on fantasy series, movies, and anime. Don't miss this magical event!",
    bg: "hero5.jpg",
  },
];
