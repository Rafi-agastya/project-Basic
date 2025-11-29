import express from "express";
import {countHewan, deleteHewanById, updateHewan, getHewanById, getAllHewan, createHewan} from"../Control/Controllers.js";
const router = express.Router();

router.get("/animals/count", countHewan);
router.get("/animals/:id", getHewanById);
router.get("/animals", getAllHewan);
router.post("/animals", createHewan);
router.patch("/animals/:id", updateHewan);
router.delete("/animals/:id", deleteHewanById);
export default router;