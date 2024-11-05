const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const myVal = process.env.MY_VAL || "Secret not set";

dataString = "hello world3";

app.get("/", (req, res) => {
	res.send(`Hello world: Secret Value: ${myVal}`);
});

app.get("/keels", (req, res) => {
	const { strJson } = req.query;
	if (!strJson) {
		return res.status(400).json({ error: 'strJson is required' });
	}
	dataString = strJson;
	res.send(`Parameter 1: ${strJson}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
