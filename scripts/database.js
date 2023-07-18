const database = {
  heroes: [
    {
      id: 1,
      name: "Dynoguy",
      power: "Fire blasts",
    },
    {
      id: 2,
      name: "Hyperspeed",
      power: "Super speed",
    },
  ],
  villains: [
    {
      id: 1,
      name: "Luigi",
      power: "Super strength",
    },
    {
      id: 2,
      name: "Mike",
      power: "Pointing out that you have coffee breath",
    },
  ],
};

export const getHeroes = () => {
  return database.heroes.map((hero) => ({ ...hero }));
};

export const getVillains = () => {
  return database.villains.map((villain) => ({ ...villain }));
};
