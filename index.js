import express from "express"

const app = express();
const port = 4000;

const user = [
    {
        id: 1,  
        name: 'Abdiaziiz',
        age: 25,
    },
    {
        id: 1,  
        name: 'Nuur',
        age: 25,
    },
    {
        id: 1,  
        name: 'Abdi',
        age: 25,
    }
]

app.get('/Welcome', (req, res)=>{
    // const names = user.map((user)=>user.name)
    // const ages = user.map((user)=>user.age)
    res.status(200).json(user);
})

app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`);
})