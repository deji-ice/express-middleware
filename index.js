import express from "express";

const app = express();
const PORT = 2222;

app.use(express.json());

const personObj = {
  name: "John Doe",
  userName: "JonDoezzy",
  age: "25",
  email: "johndoe123@gmail.com",
};

//middleware to validate user
const validateUser = (req, res, next) => {
  const ourApiKey = "qwertyuiop";
  const { apiKey } = req.query;
  if (apiKey === ourApiKey) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

app.get("/person", validateUser, (req, res) => {
  res.status(200).json(personObj);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
