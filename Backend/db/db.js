
const mongoose =require('mongoose')
mongoose.connect("mongodb+srv://CodeSoftic:Remote123!@cluster0.rmtba.mongodb.net/dishdasha?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
})
  .then(()=>{
      console.log(`Data is connect sucessfully`)
  })
  .catch((err)=>{
      console.log('Not connnected',err)
  })

module.exports  = mongoose 