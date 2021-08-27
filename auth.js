module.exports.isAuth = (req,res,next) =>{
    if(req.isAuthenticated()){
        next()
    }else{
        res.redirect('/signin')
        // res.status(401).json({msg: "You are not authorised to view it"});
    }
}