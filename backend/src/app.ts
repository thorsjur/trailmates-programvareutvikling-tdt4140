import express = require("express");
import { startFavoritesRoutes } from "./resources/trips/favorites/routes";
import { startTripRoutes } from "./resources/trips/routes";
import { startUserRoutes } from "./resources/user/routes";

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

startUserRoutes(app);
startTripRoutes(app);
startFavoritesRoutes(app);

app.listen(3001, () => {
  console.log("Listening on port 3001.");
});
