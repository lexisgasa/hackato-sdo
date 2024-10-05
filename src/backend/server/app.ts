import express from "express";
import morgan from "morgan";
import axios from "axios";

const app = express();

app.use(morgan("dev"));

const category = "";

app.use(category, async (_req, res) => {
  try {
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${category}`
    );

    const activities = response.data;

    const randomActivity =
      activities[Math.floor(Math.random() * activities.length)];

    res.json(randomActivity);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "No se han encontrado actividades" });
  }
});

export default app;
