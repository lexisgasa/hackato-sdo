import app from "./app.js";
import chalk from "chalk";

const startServer = (port: number): void => {
  app.listen(port, () => {
    console.log(chalk.cyan(`Now listening on port ${port}..`));
  });
};

export default startServer;
