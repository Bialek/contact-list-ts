import { Person } from "types";
import mockData from "./mockData.json";

const size = 10;

function delay(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
}

export default async function apiData(skip: number): Promise<Person[]> {
  await delay(1000);
  if (Math.random() > 0.7) {
    throw new Error("Something went wrong");
  }
  const end = skip + size;
  return mockData.slice(skip, end);
}
