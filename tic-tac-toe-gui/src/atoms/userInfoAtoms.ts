import { atom } from "jotai";

export interface UserInput {
  age: number;
  gender: string;
  height: number;
  weight: number;
  bodyFat?: number;
  fitnessLevel: string;
}

export const userInfoAtom = atom<UserInput>({
  age: 20,
  gender: "",
  height: 170,
  weight: 70,
  bodyFat: undefined,
  fitnessLevel: "beginner",
});
