const express = require("express");
const app = express();

function sendWebpage(request, response)
{
    response.sendFile(__dirname + "/index.html");
}

app.get("*", sendWebpage);

app.listen(process.env.PORT);