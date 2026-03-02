import Express from "express";
import { get } from "https";

const PORT = 3000;
const SERVER = "localhost";

const app = Express();

app.get("/", (_req, res) => {
    res.send("Hello, world!");
}) 
app.get("/suny", (_req, res) => {
    res.send("How did I get here?");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://${SERVER}:${PORT}`);
});
