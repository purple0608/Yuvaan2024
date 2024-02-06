import hero1 from "./images_cards/hero1.jpg";
import hero2 from "./images_cards/hero2.jpg";
import hero3 from "./images_cards/hero3.jpg";
import riff from "./images_cards/riff4.jpg";
import mun from "./images_cards/riff3.jpg";
import cid from "./images_cards/cid2.jpg";

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
    date: "dd:mm:yyyy",
    time: "hh:mmpm/am",
    venue: "IIITG Academic Block",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper orci dolor, eget tincidunt purus finibus vitae. Praesent posuere purus sed massa tempor, eget sollicitudin tortor fermentum. Nam eget enim quis ante finibus iaculis. Nulla libero eros, tincidunt nec felis eu, convallis tempus diam. Nam ornare at nunc a pharetra. Pellentesque blandit vestibulum tortor ut accumsan. Pellentesque tincidunt felis ut ante interdum volutpat. Quisque eu ullamcorper nunc. Ut at leo finibus enim hendrerit accumsan vehicula vitae velit. Donec dui enim, elementum auctor consectetur accumsan, semper sit amet nisi. In efficitur hendrerit augue nec dignissim.",
    bg: hero1,
  },
    {
    title: "Mock CID",
    date: "dd:mm:yyyy",
    time: "hh:mmpm/am",
    venue: "IIITG Academic Block",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper orci dolor, eget tincidunt purus finibus vitae. Praesent posuere purus sed massa tempor, eget sollicitudin tortor fermentum. Nam eget enim quis ante finibus iaculis. Nulla libero eros, tincidunt nec felis eu, convallis tempus diam. Nam ornare at nunc a pharetra. Pellentesque blandit vestibulum tortor ut accumsan. Pellentesque tincidunt felis ut ante interdum volutpat. Quisque eu ullamcorper nunc. Ut at leo finibus enim hendrerit accumsan vehicula vitae velit. Donec dui enim, elementum auctor consectetur accumsan, semper sit amet nisi. In efficitur hendrerit augue nec dignissim.",
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
    title: "Cosplay",
    date: "dd:mm:yyyy",
    time: "hh:mmpm/am",
    venue: "IIITG Academic Block",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper orci dolor, eget tincidunt purus finibus vitae. Praesent posuere purus sed massa tempor, eget sollicitudin tortor fermentum. Nam eget enim quis ante finibus iaculis. Nulla libero eros, tincidunt nec felis eu, convallis tempus diam. Nam ornare at nunc a pharetra. Pellentesque blandit vestibulum tortor ut accumsan. Pellentesque tincidunt felis ut ante interdum volutpat. Quisque eu ullamcorper nunc. Ut at leo finibus enim hendrerit accumsan vehicula vitae velit. Donec dui enim, elementum auctor consectetur accumsan, semper sit amet nisi. In efficitur hendrerit augue nec dignissim.",
    bg: hero3,
  },
  {
    title: "Riff",
    date: "dd:mm:yyyy",
    time: "hh:mmpm/am",
    venue: "IIITG Academic Block",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper orci dolor, eget tincidunt purus finibus vitae. Praesent posuere purus sed massa tempor, eget sollicitudin tortor fermentum. Nam eget enim quis ante finibus iaculis. Nulla libero eros, tincidunt nec felis eu, convallis tempus diam. Nam ornare at nunc a pharetra. Pellentesque blandit vestibulum tortor ut accumsan. Pellentesque tincidunt felis ut ante interdum volutpat. Quisque eu ullamcorper nunc. Ut at leo finibus enim hendrerit accumsan vehicula vitae velit. Donec dui enim, elementum auctor consectetur accumsan, semper sit amet nisi. In efficitur hendrerit augue nec dignissim.",
    bg: riff,
  },
  {
    title: "Face Painting",
    date: "dd:mm:yyyy",
    time: "hh:mmpm/am",
    venue: "IIITG Academic Block",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper orci dolor, eget tincidunt purus finibus vitae. Praesent posuere purus sed massa tempor, eget sollicitudin tortor fermentum. Nam eget enim quis ante finibus iaculis. Nulla libero eros, tincidunt nec felis eu, convallis tempus diam. Nam ornare at nunc a pharetra. Pellentesque blandit vestibulum tortor ut accumsan. Pellentesque tincidunt felis ut ante interdum volutpat. Quisque eu ullamcorper nunc. Ut at leo finibus enim hendrerit accumsan vehicula vitae velit. Donec dui enim, elementum auctor consectetur accumsan, semper sit amet nisi. In efficitur hendrerit augue nec dignissim.",
    bg: hero2,
  }, 
  {
    title: "Battle Of Bands",
    date: "dd:mm:yyyy",
    time: "hh:mmpm/am",
    venue: "IIITG Academic Block",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper orci dolor, eget tincidunt purus finibus vitae. Praesent posuere purus sed massa tempor, eget sollicitudin tortor fermentum. Nam eget enim quis ante finibus iaculis. Nulla libero eros, tincidunt nec felis eu, convallis tempus diam. Nam ornare at nunc a pharetra. Pellentesque blandit vestibulum tortor ut accumsan. Pellentesque tincidunt felis ut ante interdum volutpat. Quisque eu ullamcorper nunc. Ut at leo finibus enim hendrerit accumsan vehicula vitae velit. Donec dui enim, elementum auctor consectetur accumsan, semper sit amet nisi. In efficitur hendrerit augue nec dignissim.",
    bg: "hero4.jpg",
  },
  {
    title: "Bihu Dance",
    date: "dd:mm:yyyy",
    time: "hh:mmpm/am",
    venue: "IIITG Academic Block",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper orci dolor, eget tincidunt purus finibus vitae. Praesent posuere purus sed massa tempor, eget sollicitudin tortor fermentum. Nam eget enim quis ante finibus iaculis. Nulla libero eros, tincidunt nec felis eu, convallis tempus diam. Nam ornare at nunc a pharetra. Pellentesque blandit vestibulum tortor ut accumsan. Pellentesque tincidunt felis ut ante interdum volutpat. Quisque eu ullamcorper nunc. Ut at leo finibus enim hendrerit accumsan vehicula vitae velit. Donec dui enim, elementum auctor consectetur accumsan, semper sit amet nisi. In efficitur hendrerit augue nec dignissim.",
    bg: "hero5.jpg",
  },
];
