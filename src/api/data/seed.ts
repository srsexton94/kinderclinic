import { getItem, setItem } from "../localStorage";
import { patients } from "./patients";

export const DB_KEY = crypto.randomUUID();

export const seedLocalDatabase = () => {
  const database = getItem(DB_KEY);
  if (database) return;
  setItem(DB_KEY, { patients });
};
