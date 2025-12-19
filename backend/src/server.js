import express from "express"
import cubeRoutes from "../routes/cube_routes.js"


const app = express();


app.use("/api/cube",cubeRoutes); // until /api/cube we will use cubeRoutes



// nodemon is used to restart the server automatically when the code is changed
app.listen(3000, (req,res)=>{
    console.log("Server is running on port 3000");
});
