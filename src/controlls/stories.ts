import { Request, Response, NextFunction } from "express";
import { Story } from "../models/story";
import { IStory } from "../interfaces/story";

interface ExpressArgs {
  req: Request;
  res: Response;
  next: NextFunction;
}

const createStory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);
    const story: IStory = new Story({
      ...req.body,
    });
    await story.save();
    res.status(201).json(story);
  } catch (e) {
    console.error(e);
    res.status(500).json(e.message);
  }
};

const getStories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const stories = await Story.find().lean();

    res.status(200).json({ stories, count: stories.length });
  } catch (e) {
    console.error(e);
    res.status(500).json(e.message);
  }
};

const updateStory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, body, author = "" } = req.body;
    const story = await Story.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ error: "Cant Find" });
    }

    if (title) {
      story.title = title;
    }

    if (body) {
      story.body = body;
    }

    if (author) {
      story.author = author;
    }

    await story.save();

    res.status(200).json({ story });
  } catch (e) {
    console.error(e);
    res.status(500).json(e.message);
  }
};

const deleteStory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const story = await Story.findByIdAndRemove(req.params.id);
    if (!story) {
      return res.status(404).json({ error: "Cant Find" });
    }
    res.status(200).json(story);
  } catch (e) {
    console.error(e);
    res.status(500).json(e.message);
  }
};

export { createStory, getStories, updateStory, deleteStory };
