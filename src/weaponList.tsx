interface Weapon {
  designation: string;
  windageStep: number;
  elevationStep: number;
  base: number;
}

interface Weapons extends Array<Weapon> {}

export const weaponList: Weapon[] = [
  {
    designation: "G - Sturmgewehr 90",
    windageStep: 4.5,
    elevationStep: 4.5,
    base: 300,
  },
  {
    designation: "G - Sturmgewehr 57/02",
    windageStep: 6.0,
    elevationStep: 8.0,
    base: 300,
  },
  {
    designation: "D - Wyss Flex",
    windageStep: 1.0,
    elevationStep: 1.0,
    base: 300,
  },
  {
    designation: "D - Anschütz 6805",
    windageStep: 1.2,
    elevationStep: 1.2,
    base: 300,
  },
  {
    designation: "D - W+F K31",
    windageStep: 2.0,
    elevationStep: 2.0,
    base: 300,
  },
  {
    designation: "P - Hämmerli SP20",
    windageStep: 0.8,
    elevationStep: 1.0,
    base: 25,
  },
  {
    designation: "P - Hämmerli 280",
    windageStep: 1.0,
    elevationStep: 1.0,
    base: 25,
  },
  {
    designation: "P - Hämmerli 208 / 208S / 215",
    windageStep: 1.0,
    elevationStep: 1.0,
    base: 25,
  },
  {
    designation: "P - Pardini SP",
    windageStep: 0.5,
    elevationStep: 0.5,
    base: 25,
  },
  {
    designation: "P - Walther GSP",
    windageStep: 0.5,
    elevationStep: 0.7,
    base: 25,
  },
  {
    designation: "P - Ruger MK I / II / III",
    windageStep: 1.27,
    elevationStep: 1.27,
    base: 22.86,
  },
  {
    designation: "V - Dobler Mikrometer-Visier zu P210",
    windageStep: 1.5,
    elevationStep: 1.5,
    base: 25,
  },
  {
    designation: "V - CZ Mikrometer-Visier zu SP-01 Shadow",
    windageStep: 1.3,
    elevationStep: 1.3,
    base: 25,
  },
  {
    designation: "V - CZ Mikrometer-Visier zu Shadow 2",
    windageStep: 1.3,
    elevationStep: 1.3,
    base: 25,
  },
  {
    designation: "ZF - 1/4 MOA",
    windageStep: 2.54 / 4,
    elevationStep: 2.54 / 4,
    base: 91.44,
  },
  {
    designation: "ZF - 1 MRAD",
    windageStep: 1.0,
    elevationStep: 1.0,
    base: 100,
  },
  {
    designation: "LP - Feinwerkbau Modell 65",
    windageStep: 1.5,
    elevationStep: 1.5,
    base: 10,
  },
  {
    designation: "LP - FAS 604",
    windageStep: 2.5,
    elevationStep: 3.0,
    base: 10,
  },
  {
    designation: "LG - Anschütz Universal Mikrometerdiopter 7002/20",
    windageStep: 0.02,
    elevationStep: 0.02,
    base: 10,
  },
  {
    designation: "I - Individuelle Verstellschritte (unter 📐 festlegen)",
    windageStep: 0,
    elevationStep: 0,
    base: 0,
  },
];
