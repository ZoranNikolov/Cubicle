const express = require("express");

const app = express();
const config = require("./config");
const setupViewEngine = require("./config/viewEngine");

setupViewEngine(app);

app.get("/", (req, res) => {
	res.render("home");
});

app.listen(config.PORT, () =>
	console.log(`Server is running on port ${config.PORT}...`)
);
