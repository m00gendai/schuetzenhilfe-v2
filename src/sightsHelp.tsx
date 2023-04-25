interface Sight {
    weapon: string;
    shotLeft: string;
    shotRight: string;
    shotBelow: string;
    shotAbove: string;
  }

  interface Sights extends Array<Sight> {}

  export const sightsHelp: Sight[] = [
    {
      weapon: "Sturmgewehr 90",
      shotLeft: "Uhrzeigersinn",
      shotRight: "Gegenuhrzeigersinn",
      shotBelow: "Uhrzeigersinn",
      shotAbove: "Gegenuhrzeigersinn",
    },
    {
        weapon: "Sturmgewehr 57",
        shotLeft: "Uhrzeigersinn",
        shotRight: "Gegenuhrzeigersinn",
        shotBelow: "Gegenuhrzeigersinn",
        shotAbove: "Uhrzeigersinn",
      },
]