const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
const industrialModel=require('../models/user-model')

router.use(bodyParser.json())
router.get('/',(req,res)=>{
    res.send("Industrial data page")
})

router.post('/post',(req,res)=>{
    console.log(req.body)
    const newUser=new industrialModel(req.body)

    newUser.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("Industrial data post page")
})

// router.get('/get/:email',(req,res)=>{
//     console.log(req.params.email)
//     UserModel.find({email:req.params.email})
//     .then(response=>res.send(response))
//     .catch(err=>console.log(err))
// })

router.get('/', (req, res)=>{
    res.send('Industrials page')
})
// GET request to fetch firm name and door no based on product name 
router.get('/get', async (req, res) => {
    const productName = req.query.product;

    try {
        const firm = await industrialModel.find({ product: productName }, 'firmname doorno street area city pincode mobile product');
        if (firm.length>0) {
            res.json(firm);
        } else {
            res.status(404).json({ message: 'Firm not found for the specified product' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


module.exports=router