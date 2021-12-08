import { logos } from "../components/logo.svelte";

export const projects: Array<category> = [
  {
    title: "Electronics",
    array: [
      {
        name: "Crossfader",
        source: {
          path: "img/projects/xfader/fader_thumb",
          multiformat: true,
        },
        link: "Xfader",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "Alarm Clock",
        source: {
          path: "img/projects/clock/clock_thumb",
          multiformat: true,
        },
        link: "Clock",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "USB/Midi Pedal",
        source: {
          path: "img/projects/pedal/pedal_thumb",
          multiformat: true,
        },
        link: "Pedal",
        logos: [logos.arduino, logos.c],
      },
      {
        name: "Dog Feeder",
        source: {
          path: "img/icons/underconstruction.png",
          multiformat: false,
        },
        link: "Feed",
        logos: [logos.arduino, logos.c, logos.rpi, logos.node],
      },
      {
        name: "Bus Bell",
        source: {
          path: "img/icons/underconstruction.png",
          multiformat: false,
        },
        link: "Bell",
        logos: [logos.arduino, logos.c],
      },
    ],
  },
  {
    title: "Coding",
    array: [
      {
        name: "Metronome",
        source: {
          path: "img/icons/underconstruction.png",
          multiformat: false,
        },
        link: "DeskMetro",
        logos: [logos.rpi, logos.rust],
      },
    ],
  },
  {
    title: "Building",
    array: [
      {
        name: "Kolibri PC",
        source: {
          path: "img/icons/underconstruction.png",
          multiformat: false,
        },
        link: "Kolibri",
        logos: [logos.tools],
      },
      {
        name: "Tiny House",
        source: {
          path: "img/icons/underconstruction.png",
          multiformat: false,
        },
        link: "Tiny",
        logos: [logos.tools],
      },
    ],
  },
];
