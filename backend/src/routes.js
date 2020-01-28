const {Router} = require('express');

const routes = new Router();

routes.get(('/'),(req, res)=>{
    res.json({message: "Hello Gostack"});
})

module.exports = routes;