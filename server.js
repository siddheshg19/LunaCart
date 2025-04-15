const express = require("express");
const session = require("express-session");
const app = express();
const port = 3000;

// Session middleware setup
app.use(session({
  secret: 'yourSecretKey123', // Change this to something secure
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true only if using HTTPS
}));

// Serve static files (like your index.html)
app.use(express.static('public'));

// Route to store MetaMask account in session
app.get('/connectWallet', (req, res) => {
  const { account } = req.query;
  if (!account) return res.status(400).send("Missing account");

  req.session.account = account;
  res.send({ message: "Wallet connected", account });
});

// Route to check session
app.get('/checkSession', (req, res) => {
  if (req.session.account) {
    res.send({ loggedIn: true, account: req.session.account });
  } else {
    res.send({ loggedIn: false });
  }
});

// Route to logout and destroy session
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).send("Logout error");
    res.send({ message: "Logged out" });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
