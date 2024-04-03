const bcrypt = require("`bcrypt`");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("..models/User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, "YOUR_ACCESS_TOKEN", {
      expiresIn: "24h"
    });
    res.status(201).send({ token });
  } catch (err) {
      res.status(400).send(error);
  }
});

router.post('/login', async (req, res) => {
      try{
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user || !await bcrypt.compare(password, user.password)) {
                  return res.status(401).send({error: 'Login Failed!' });
            }
            const token = jwt.sign({ userId: user._id }, "YOUR_ACCESS_TOKEN", {
                  expiresIn: "24h"
            });
            res.send({ token });

      } catch (error) {
            res.status(400).send(error);
      }
});
module.exports = router;