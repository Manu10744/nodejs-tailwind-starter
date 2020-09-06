const express = require("express");
const routes = require("./routes/routes.js");
const app = express();

app.use(routes);

const PORT = 1337;
app.listen(PORT, () => {
    console.log(`Application has started on port ${PORT}.`)
});