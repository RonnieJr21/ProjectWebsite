const express = require("express");
const router = express.Router();
router.use(express.json());
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const client = new MongoClient(process.env.DATABASE_URL);
console.log(client);

const postDB = client.db();
const result = postDB.collection("users");

let numUsers;
let users = result.countDocuments({}, (err, count) => {
	if (err) {
		return err;
	} else {
		numUsers = count + 1;
		console.log(`users stored in database: ${count}`);

		return numUsers;
	}
});
console.log(numUsers);

const addUser = async (req, res, next) => {
	console.log(req.body);
	const user = {
		_id: req.body._id,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		age: req.body.age,
		country: req.body.country,
		profilePicture: req.body.profilePicture,
	};

	try {
		await client.connect();
		await result.insertOne(user);
	} catch (e) {
		return res.json({ message: e });
	}
	console.log(`users stored in database: ${numUsers}`);
	res.json({ message: "success" });
	next();
};

const getUser = async (req, res, next) => {
	let paramData = req.params.id;
	let compareData = {
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	};

	try {
		const data = await result.findOne({ username: paramData });
		if (
			data.username === compareData.username &&
			data.password === compareData.password &&
			data.email === compareData.email
		) {
			return res.json({
				message: "Authorized",
				code: 205,
			});
		} else {
			return res.json({ message: "Something went wrong" });
		}
	} catch (e) {
		console.log(e);
		return res.json({ message: e });
	}

	next();
};

const getNumUsers = async (req, res, next) => {
	try {
		return res.json({ message: `${numUsers}` });
	} catch (e) {
		console.log(e);
	}
};

router.get("/num-users", getNumUsers, (req, res, next) => {});

router.post("/name-:id", getUser, (req, res, next) => {});

router.post("/add-user", addUser, (req, res) => {});

module.exports = router;
