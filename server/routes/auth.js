const router = require("express").Router();
const bcrypt = require("bcrypt");
const Joi = require("Joi");
const pass="superadmin"
const login="superadmin"

router.post("/", async (req, res) => {
	try {

		if (req.body.email!=login || req.body.password!=pass )
			return res.status(401).send({ message: "Invalid Email or Password" });

		res.status(200).send({ message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});



module.exports = router;