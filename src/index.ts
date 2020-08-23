import { app } from "./config/express";
import { connectToMongo } from "./config/mongoose";
import { vars } from "./config/vars";

connectToMongo();

const port = 8080;

app.listen(port, () => console.log(`Server running on ${vars.server.uri}`));

export {};
