import express from 'express'


const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));

const users = [
  { name: "mehi", password: "mehi1" },
  { name: "zuzu", password: "zuzu1" },
];



// app.get("/login", checkAuthorized, (req, res) => {
//   res.send(" istifadeci daxil oldu");
// });

app.post("/login", (req, res) => {
  const { name, password } = req.body;
  const user = users.find((x) => x.name === name);
  res.send("welcome user");
  if (!user) {
    res.status(404).send("istifadeci tapilmadi");
    
  }
  if (user.password !== password) {
    res.status(403).send("password yanlisdir");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
