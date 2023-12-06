const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const Product = require('./product.model')
app.use(express.json())
const conn = mongoose.connection;
conn.once('open', () => {
    console.log('successfully connected to database');
})
conn.on('error', (err) => {
    console.log('failed to connect to database');
})


dotenv.config();
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`applicartion is running on port ${port}`);
});
console.log(`Your port is ${process.env.PORT}`);


// /saving a product using promise
// app.post('/', (req, res, next) => {
//     console.log(req.body);
//     const newItem = new Product({
//         name: req.body.name,
//         price: req.body.price,
//         unit: req.body.unit
//     })
//     newItem.save()
//         .then(result => {
//             console.log(result);
//             res.send(result);
//         })
//         .catch(err => {
//             console.log(err.message);
//         })

// })


//saving a product using async and await
// app.post('/', async (req, res, next) => {
//     try {
//         const newItem = new Product(req.body);
//         const result = await newItem.save()
//         res.send(result)
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// })


//Fetching a product by id
// app.get('/test/:id', async (req, res, next) => {
//     const id = req.params.id;
//     try {
//         // const newItem = await Product.findById(id) //getting id from req.params
//         const newItem = await Product.findOne({ _id: id }); //getting direct id
//         res.send(newItem);
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// });

// app.get('/swati/courses/:id', (req, res) => {
//     res.send(req.params.id);
// })

// app.get('/test/courses', (req, res) => {
//     console.log(req.body);
//     res.send(req.body );
// });

// //finding all products
// app.all('/test/', async (req, res, next) => {
//     //  const id = req.params.id;
//     try {
//         // const productItem = await Product.find({}, { __v: 0 }); //for omitting some fields in the client response
//         //const productItem = await Product.find({}, { name: 1 });  //For showing selected fields in client response
//         const productItem = await Product.find({ price: 60000 });  //for fetching particular items
//         res.send(productItem);
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// });

//deleting a product
// app.delete('/test/:id', async (req, res, next) => {
//     const id = req.params.id;
//     try {
//         const newItem = await Product.findByIdAndDelete(id); //getting id from req.params
//         console.log(newItem);
//         res.send(newItem);
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// });

app.patch('/test/:id', async (req, res, next) => {
    const id = req.params.id;
    const updates=req.body;
    try {
        const newItem = await Product.findByIdAndDelete(id); //getting id from req.params
        console.log(newItem);
        res.send(newItem);
    }
    catch (error) {
        console.log(error.message);
    }
});