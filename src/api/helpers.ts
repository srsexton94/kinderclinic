import { DB_KEY } from "./data/seed";
import { getItem, setItem } from "./localStorage";

export const getDatabaseTable = (entity: string) => getItem(DB_KEY)?.[entity];

export const setDatabaseTable = (entity: string, data: unknown) => {
  const db = getItem(DB_KEY);
  db[entity] = data;
  setItem(DB_KEY, db);
};
