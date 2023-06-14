require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const router = express.Router();



// Will be used for cors preferences
app.use(cors({
    origin: "http://localhost:3000"
}));



const projectRoutes = require('./routes/projects/projects');
const forumRoutes = require('./routes/projects/forum/forum');
const expenseTrackerRoutes = require('./routes/projects/expense-tracker/expense-tracker');
const userRoutes = require('./routes/projects/forum/user/user')

app.use('/api/project', projectRoutes)
app.use('/api/projects/forum', forumRoutes)
app.use('/api/projects/forum', userRoutes)
app.use('/api/project/expense-tracker', expenseTrackerRoutes)

app.use(express.json());




app.listen(5000, ()=>{
    console.log('listening')
});