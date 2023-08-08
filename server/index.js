import express from "express";

const the_yellow_submarine_server = express();

the_yellow_submarine_server.use(express.json());

the_yellow_submarine_server.get("/", (req,res) => {
    res.json({
        message: "Server is running"
    });
});

const PORT = 4000;

the_yellow_submarine_server.listen(PORT, () => {
    console.log("Server is running !!!")
});
