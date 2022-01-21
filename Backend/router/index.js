const router =require('express').Router()
const customcontroller =require('../Controllers/IndexControlres')



router
    .route('/')
    .post(customcontroller.Add)



router
    .route('/address')   
    .post(customcontroller.addAdresss) 
    .get(customcontroller.addressGet)
    .patch(customcontroller.UpdateAddress)




    module.exports=router