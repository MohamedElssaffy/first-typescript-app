import { Router } from "express";
import {
  createStory,
  deleteStory,
  getStories,
  updateStory,
} from "../controlls/stories";

const router = Router();

//  Route For Create Story

router.post("/create", createStory);

//  Route For Get Stories

router.get("/", getStories);

//  Route For Update Story

router.put("/:id", updateStory);

//  Route For Delete Story

router.delete("/:id", deleteStory);

export = router;
