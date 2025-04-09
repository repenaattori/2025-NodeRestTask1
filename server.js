import express from 'express';

const app = express();

app.listen(3001, ()=> {
    console.log('Server started');
});

app.get('/', (req,res) => {
    //res.status(200).send('Hello world')
});

export {app};