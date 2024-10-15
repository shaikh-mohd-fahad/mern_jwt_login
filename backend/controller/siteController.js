import jwt from 'jsonwebtoken';
const SECRET_KEY = 'your_secret_key';
export const home =(req,res)=>{
    res.send("hellow from home controller");
}
export const Login=(req,res)=>{
    // return res.send("login working")
    const {email,password}=req.body;
    try {
        if(email==="fahad@gmail.com" && password==="123"){
            // console.log("body: ",req.body)
            const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1m' });
            return res.json({token,success:true,message:"User is logged in"})
        }
    } catch (error) {
        console.log("errror",error)
    }
    return res.json({success:false,message:"Email or Password is wrong"})
}