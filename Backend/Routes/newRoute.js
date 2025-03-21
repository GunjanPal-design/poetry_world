const express = require("express")
const newControl = require("../Controller/newControl")
const router = express.Router()
router.post("/Signup", newControl.Signup)
router.post("/Login", newControl.Login)
router.get("/Dashboard", newControl.Dashboard)

router.get("/profile/:id", newControl.getId)
router.put("/Update/:id", newControl.updateUser)
router.delete("/delete/:id", newControl.deleteUser)


module.exports = router

