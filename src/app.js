import express from "express";
import "dotenv/config"

const app = express();
app.use(express.json());
    
const PORT = process.env.PORT || 3000   

app.get('/funfando', (req, res) => {
    return res.json("Bora Bil")
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
});

export default app