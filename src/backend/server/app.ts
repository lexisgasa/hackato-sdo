import express from "express";
import morgan from "morgan";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(cors());

const categoryMapping: { [key: string]: string } = {
  cuinar: "cooking",
  social: "social",
  educacio: "education",
  caritat: "charity",
};

app.use("/activities/:category", async (req, res) => {
  const { category } = req.params;

  const mappedCategory = categoryMapping[category];

  try {
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${mappedCategory}`
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
