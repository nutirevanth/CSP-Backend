const app = require('./require');

const port = process.env.PORT || 7000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});