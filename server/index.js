import express from 'express'
import mongoose from 'mongoose'
import { regiValidation } from './validations/Reg.js'
import checkAuth from './utils/checkAuth.js'
import cors from 'cors'
import * as UserController from './controllers/UserController.js'
import * as PostsController from './controllers/PostsController.js'
import multer from 'multer'

mongoose
  .connect('mongodb+srv://admin:12345@cluster0.f3hdq.mongodb.net/blog?retryWrites=true&w=majority')
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('db error', err))
const app = express()

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null , 'uploads')
  },
  filename: (_, file, cb) => {
    cb(null , file.originalname)
  },
})

const upload = multer({ storage })


app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'));

app.post('/auth/login', UserController.login)

app.post('/auth/register',regiValidation, UserController.register)

app.get('/auth/me', checkAuth, UserController.getMe)

app.post('/posts/addpost', PostsController.addPost)

app.get('/posts/get', PostsController.getPost)


app.post('/uploads', upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});


app.listen(1983, (err) => {
  if (err) {
    return console.log(err)
  }
  return console.log('Serv OK')
})
