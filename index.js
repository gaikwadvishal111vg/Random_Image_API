import axios from 'axios';
import express from 'express';
const app = express();

// const PORT = 3000;
app.use(express.json());
const imageUrls = [
        'https://picsum.photos/200',
        'https://source.unsplash.com/random',
        'https://randomfox.ca/images/1'
    ];
app.get('/api/image/random', async (req, res) => {
    try {
        const response = await axios.get("https://picsum.photos/200", { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/jpeg'); // Adjust content type based on image format
        res.send(response.data);
    } catch(error){
        console.log(error.message);
        res.status(500).send("Error Fetching Image Random Image");
        
    }
});
app.listen(3002, () => {
    console.log("Server is Running on Port");
    
});