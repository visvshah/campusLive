import express from "express";
import { getMarkers, setMarkers} from '../controllers/markerControllers.js'
const router = express.Router()


router.post("/", setMarkers)
router.get("/", getMarkers)

export default router;