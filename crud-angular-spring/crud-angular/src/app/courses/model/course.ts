import { Lesson } from "./lesson";

export interface Course {
  _id: string;
  name: string;
  category: string;
  lessons?: Lesson[];
}
