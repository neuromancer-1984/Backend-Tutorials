const asynchandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }

}


// const asynchandler = (func) = (req, res, next )=> {
//     try{

//     }catch(error){
//         req.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

export { asynchandler }