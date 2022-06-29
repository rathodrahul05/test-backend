const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const User = require("../models/user");

const getAllUsers = async () => {
  return User.find();
};

const createUser = async (body) => {
  const user = new User({
    name: body.name,
    email:body.email,
    phone:body.phone,
    technology: body.technology,
    isSubscribed: body.isSubscribed,
  });
  const user1 = await user.save();
  return user1;
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};
const updateUser = async (req) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  });
  const u1 = await User.findById(req.params.id);
  return u1;
};

const deleteUser = async (id) => {
  const users = await User.findByIdAndRemove(id);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
