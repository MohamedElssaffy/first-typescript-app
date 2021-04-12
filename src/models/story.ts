import mongoose, { Schema } from "mongoose";
import { IStory } from "src/interfaces/story";

const StorySchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

StorySchema.pre<IStory>("save", function (next) {
  console.log(this.title);
  next();
});

const Story = mongoose.model<IStory>("Story", StorySchema);

export { Story };
