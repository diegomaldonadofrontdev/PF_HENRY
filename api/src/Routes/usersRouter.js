const { Router } = require("express");
const usersRouter = Router();
const jwt = require("jsonwebtoken");

const TOKEN_KEY = "x4TvnErxRt";

const users = [{ username: "usuario1", password: "12345", nombre: "Usuario 1", id: "1", email: "usuario1@gmail.com" }]

usersRouter.post("/login", (req, res) => {
    const { username, password } = req.body;
    let searchUser = users.find(u => u.username === username && u.password === password);
    if (!searchUser) return res.status(400).send("Usuario no registrado!");
    const token = jwt.sign(
        { userId: searchUser.id, email: searchUser.email },
        TOKEN_KEY,
        { expiresIn: "2h" }
    )
    let user = { ...searchUser, token }
    res.status(200).json(user)
});

usersRouter.get("/", (req, res) => {
    res.status(200).json(users);
})

usersRouter.post("/sigin", (req, res) => {
    const { username, password, nombre, id, email } = req.body;
    let user = { username, password, nombre, id, email};
    const token = jwt.sign(
        {userId: id, email: email},
        TOKEN_KEY,
        {expiresIn: "2h"}
    )
    let userJWT = { ...user, token};
    res.status(200).json(userJWT)
})

module.exports = usersRouter;