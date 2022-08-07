import mongoose from 'mongoose'
const PostSchema = mongoose.Schema(
        {
  nickname: {
    type: String,
    required: true, // обязательность заполнения
  },
  value: {
    type: String,
    required: true, // обязательность заполнения
  },
  avatar: String
},
)
export default mongoose.model('Post', PostSchema)