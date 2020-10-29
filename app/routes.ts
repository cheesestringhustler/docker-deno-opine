import { Opine } from "../deps.ts";
import moviesController from "./controllers/moviesController.ts";

const router = Opine.Router();

/** Artist Routes */

router.get("/movies", moviesController.get);

export default router;
