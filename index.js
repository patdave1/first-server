const express = require("express")

const app = express ()

app.get("/", (req, res) => {
    res.status(200).send("Welocome to Gate Foundation Ghana");
});


app.post("/", (req, res) => {
    res.status(201).send("your data has been saved")
});

app.put("/", (reg, res) => {
    res.status(200).send("your data has been replaced")

});

app.patch("/", (reg, res) => {
    res.status(200).send("your data has been updated")

});

app.delete("/", (reg, res) => {
    res.status(200).send("your data has been deleted")

});

app.listen(4000, (err) => {
    console.log("server listening on http://localhost:4000")
});