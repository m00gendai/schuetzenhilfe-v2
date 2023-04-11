interface Target {
  designation: string;
  name: string;
  distance: integer;
  type: string;
}

interface Targets extends Array<Target> {}

export const targetList: Target[] = [
  {
    designation: "300m_A",
    name: "300m A-Scheibe",
    distance: 300,
    type: "300m Rifle",
  },
  {
    designation: "300m_B",
    name: "300m B-Scheibe",
    distance: 300,
    type: "300m Rifle",
  },
  {
    designation: "25m_Präzision",
    name: "25m Präzisionsscheibe",
    distance: 25,
    type: "25m Pistol",
  },
  {
    designation: "25m_Schnellfeuer",
    name: "25m Schnellfeuerscheibe",
    distance: 25,
    type: "25m Pistol",
  },
  {
    designation: "50m_B",
    name: "50m B-Scheibe",
    distance: 50,
    type: "50m Pistol",
  },
  {
    designation: "50m_P",
    name: "50m P-Scheibe",
    distance: 50,
    type: "50m Pistol",
  },
  {
    designation: "50m_Präzision",
    name: "50m Präzisionsscheibe",
    distance: 50,
    type: "50m Pistol",
  },
  {
    designation: "10m_Lupi_ISSF",
    name: "10m Luftpistole SSV/ISSF",
    distance: 10,
    type: "10m Air Pistol",
  },
  {
    designation: "50m_Morgarten",
    name: "50m Morgartenscheibe",
    distance: 50,
    type: "50m Pistol",
  },
];
