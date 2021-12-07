const express = require("express");
const router = express.Router();
let Contacts = require("../Model/User");

//CRUD:
// @role: testing
//url:http://localhost:5000/api/user/test
router.get("/test", (req, res) => {
  res.send(`it works `);
});

//Create
// @role: ADD A NEW USER TO THE DATABASE 
//url:http://localhost:5000/api/user/add
router.post("/add", async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const newContact = new Contacts({ name, email, phone });
    const contact = await newContact.save();
    res
      .status(200)
      .json({ msg: ` ${name} has been added to your contacts`, contact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//READ
// @role: RETURN ALL USERS
//url:http://localhost:5000/api/user/all
router.get("/all", async (req, res) => {
  try {
    const contacts = await Contacts.find();
    res.status(200).json({ contacts });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//Update
// @role: EDIT A USER BY ID 
//url:http://localhost:5000/api/user/edit/:id
router.put("/edit/:id", async (req, res) => {
  const ID = req.params.id; //reading the value of the id from the url
  try {
    const contact = await Contacts.findByIdAndUpdate(ID, { $set: req.body }); // find the element and update it
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//Delete
// @role: REMOVE A USER BY ID
//url:http://localhost:5000/api/user/delete/:id

router.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const contact = await Contacts.findByIdAndDelete(ID);
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;