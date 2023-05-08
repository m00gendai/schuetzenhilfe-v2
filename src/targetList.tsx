interface Target {
  designation: string;
  name: string;
  distance: number;
  type: string;
}

interface Targets extends Array<Target> {}

export const targetList: Target[] = [
  {
    designation: "300m_A",
    name: "300m A",
    distance: 300,
    type: "G300",
  },
  {
    designation: "300m_B",
    name: "300m B",
    distance: 300,
    type: "G300",
  },
  {
    designation: "300m_Wildsau_rechts",
    name: "300m Wildsau rechts",
    distance: 300,
    type: "G300",
  },
  {
    designation: "25m_Präzision",
    name: "25m Präzision",
    distance: 25,
    type: "P25",
  },
  {
    designation: "25m_Schnellfeuer",
    name: "25m Schnellfeuer",
    distance: 25,
    type: "P25",
  },
  {
    designation: "25m_Ordonnanz",
    name: "25m Ordonnanz-Schnellfeuer",
    distance: 25,
    type: "P25",
  },
  {
    designation: "25m_Olympia",
    name: "25m O 170/10 (Gangfisch)",
    distance: 25,
    type: "P25",
  },
  {
    designation: "50m_B",
    name: "50m B",
    distance: 50,
    type: "P50",
  },
  {
    designation: "50m_P",
    name: "50m P",
    distance: 50,
    type: "P50",
  },
  {
    designation: "50m_Präzision",
    name: "50m Präzision",
    distance: 50,
    type: "P50",
  },
  {
    designation: "50m_Ruetli",
    name: "50m Rütli-Figur",
    distance: 50,
    type: "P50",
  },
  {
    designation: "10m_Lupi_ISSF",
    name: "10m Luftpistole SSV/ISSF",
    distance: 10,
    type: "P10",
  },
  {
    designation: "10m_LG_ISSF",
    name: "10m Luftgewehr SSV/ISSF",
    distance: 10,
    type: "G10",
  },
  {
    designation: "50m_G_10er_SSV",
    name: "50m Gewehr 10er SSV",
    distance: 50,
    type: "G50",
  },
  {
    designation: "50m_Morgarten",
    name: "50m Morgarten",
    distance: 50,
    type: "P50",
  },
];
