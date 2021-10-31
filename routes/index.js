const express = require("express");
const router = express.Router();
const {Users, Posts, Contacts, Ideates, Sharecons} = require("../db/mongoConnection");

//users
router.post("/users/findOne/email", async (req, res) => {
	let email = req.body.email;
	try {
		let data = await Users.findOne({email});
		res.send(data);
	} catch (error) {
		throw error;
	}
})

router.post("/users/findOne/wissId", async (req, res) => {
	let wissId = req.body.wissId;
	try {
		let data = await Users.findOne({wissId: wissId.toLowerCase()});
		res.send(data);
	} catch (error) {
		throw error;
	}
})

router.post("/users/findOneAndUpdate/email", async (req, res) => {
	try {
		let userDoc = await Users.findOne({email: req.body.userDoc.email});
		for(let key of Object.keys(req.body.userDoc)){
			userDoc[key] = req.body.userDoc[key];
		}
		await userDoc.save();
		res.send(userDoc);
	} catch (error) {
		throw error;
	}
});

router.post("/users/findOneAndUpdate/wissId", async (req, res) => {
	try {
		let userDoc = await Users.findOne({wissId: req.body.userDoc.wissId});
		for(let key of Object.keys(req.body.userDoc)){
			userDoc[key] = req.body.userDoc[key];
		}
		await userDoc.save();
		res.send(userDoc);
	} catch (error) {
		throw error;
	}
})

router.post("/users/find/email", async (req, res) => {
	console.log(req.body);
	let email = req.body.email;
	try {
		let data = await Users.find({email});
		res.send(data);
	} catch (error) {
		throw error;
	}
});

router.get("/users/find", async (req, res) => {
	try {
		let data = await Users.find();
		res.send(data);
	} catch (error) {
		throw error;
	}
})

router.post("/users/create", async (req, res) => {
	try {
		let userInfo = new Users(req.body.userInfo);
		await Users.create(userInfo);
		res.send(userInfo);
	} catch (error) {
		throw error;
	}
})

router.post("/users/bulkSave", async (req, res) => {
	try {
		await Users.bulkSave(req.body.users);
		res.send("done");
	} catch (error) {
		throw error;
	}
})

//posts
router.get("/posts/find", async (req, res) => {
	try {
		let data = await Posts.find();
		res.send(data);
	} catch (error) {
		throw error;
	}
})

router.post("/posts/create", async (req, res) => {
	try {
		let newPost = new Posts({
			postId: req.body.postId
		});
		await Posts.create(newPost);
		res.send(newPost);
	} catch (error) {
		throw error;
	}
})

//contacts
router.post("/contacts/create", async (req, res) => {
	try {
		let contact = new Contacts(req.body.contact);
		await Contacts.create(contact);
		res.send(contact);
	} catch (error) {
		throw error;
	}
})

//ideate
router.post("/ideate/create", async (req, res) => {
	try {
		let ideate = new Ideates(req.body.ideate);
		await Ideates.create(contact);
		res.send(ideate);
	} catch(error) {
		throw error;
	}
});

router.post("/sharecon/create", async (req, res) => {
	try {
		let sharecon = new Sharecons(req.body.sharecon);
		await Sharecons.create(sharecon);
		res.send(sharecon);
	} catch (error) {
		throw error;
	}
})

module.exports = router;