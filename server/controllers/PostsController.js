import  PostModel  from '../models/Posts.js'

export const addPost = async (req, res) => {
    try{
        const doc = new PostModel({
            nickname: req.body.nickname,
            value: req.body.value,
        })
        const posts = await doc.save()
        res.json(posts)
    } catch(err){
        res.status(500).json({
        message: "Не удалось отправить пост",
        })
    }
}

export const getPost = async (req, res) =>{
    try{
const mess = await PostModel.find(req)
const postData = mess
res.json(postData)
    }
    catch(err){}
}