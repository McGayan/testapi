const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const my_val = process.env.MY_VAL_STR;

dataString = "hello world2";

app.get("/", (req, res) => {
  res.send("Hello, Worlds!: Node:server\ndataString: \n" + dataString + "\nmy_val: " + my_val);
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
