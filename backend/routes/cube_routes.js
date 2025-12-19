import express from "express";

import { solve3x3Cube} from "../controllers/3x3_controller.js";
import {solve4x4Cube } from "../controllers/4x4_controller.js";

const router = express.Router();

router.get("/3x3_cube",solve3x3Cube);
router.get("/4x4_cube",solve4x4Cube);


// export the router to use it in the server.js file

export default router;