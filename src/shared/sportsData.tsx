import { type SportData } from "./types";

export const allSports: Record<string, SportData> = {
  bulbasaur: {
    id: "jfoJDiw8df.sdf",
    name: "Bulbasaur",
    image: "/img/bulbasaur.png",
    color: "#BF4B4B",
    tricks: [
      {
        name: "Tail Grind",
        type: "Grind",
        points: 45,
      },
      {
        name: "Drop",
        type: "Air",
        points: 60,
      },
      {
        name: "Curb Hop",
        type: "Street",
        points: 30,
      },
      {
        name: "Space Tornado",
        type: "Spin",
        points: 75,
      },
    ],
  },
  charmander: {
    id: "osdiCjew.s8efsz",
    image: "/img/charmander.png",
    name: "Charmander",
    color: "#ADAD31",
    tricks: [
      {
        name: "Air to Fakie",
        type: "Air",
        points: 45,
      },
      {
        name: "Kangaroo Flip",
        type: "Flip",
        points: 60,
      },
      {
        name: "Misty Flip",
        type: "Flip",
        points: 70,
      },
      {
        name: "Alley-Oop",
        type: "Spin",
        points: 80,
      },
      {
        name: "Cab 1440 Mute",
        type: "Spin",
        points: 90,
      },
      {
        name: "Box Slide",
        type: "Grind",
        points: 30,
      },
    ],
  },
  jigglypuff: {
    id: "sdfj8sdfj.sdfj8sdfj",
    image: "/img/jigglypuff.png",
    name: "Jigglypuff",
    color: "#3B5AB4",
    tricks: [
      {
        name: "Butter",
        type: "Slide",
        points: 25,
      },
      {
        name: "Tripod",
        type: "Slide",
        points: 40,
      },
      {
        name: "Melon Grab",
        type: "Grab",
        points: 55,
      },
      {
        name: "Backflip",
        type: "Flip",
        points: 70,
      },
      {
        name: "Tail Press",
        type: "Grind",
        points: 65,
      },
    ],
  },
  meowth: {
    id: "rix38.sfjgihxl",
    image: "/img/meowth.png",
    name: "Meowth",
    color: "#676767",
    tricks: [
      {
        name: "Rabona",
        type: "Pass",
        points: 25,
      },
      {
        name: "Scissor",
        type: "Dribble",
        points: 40,
      },
      {
        name: "Rainbow",
        type: "Dribble",
        points: 55,
      },
      {
        name: "El Tornado",
        type: "Shot",
        points: 70,
      },
    ],
  },
};
