
// This is where I hanldle all the errors (the ones I dont throw have a status code of 500)
function errorHandler (err, req, res, next){
   
    let status = err.status || 500;
    let message = err.message || 'Something went wrong!';
    
    console.log({message, status})
    res.status(status).json(message)
}

export default errorHandler