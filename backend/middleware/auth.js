import jwt from 'jsonwebtoken';

export const ensureAuthenticated = (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        return res.status(403).json({
            msg: "unarthorized, jwt token is required"
        })
    }
    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token,process.env.Jwttoken);
    req.user = decoded;
    next();
}