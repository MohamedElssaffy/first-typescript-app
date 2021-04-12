import { Document } from "mongoose";

interface IStory extends Document {
  title: string;
  body: string;
  author?: string;
}

export { IStory };
