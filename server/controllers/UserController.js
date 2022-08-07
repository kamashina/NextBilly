import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import  UserModel  from '../models/User.js'
import { body, validationResult } from 'express-validator'


export const register = async (req, res) => {    // РЕГИСТРАЦИЯ 
    try{
      const error = validationResult(req)
      if (!error.isEmpty()) {
        return res.status(400).json(error.array())
      };
  
      const password = req.body.password
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password, salt)
    
      const doc = new UserModel({
        email: req.body.email,
        nickname: req.body.nickname,
        passwordHash: hash,
        avatarUrl: req.body.avatarUrl,
      })
      const user = await doc.save()
  const token = jwt.sign({
    _id: user._id,
  }, 'secret123', 
  {
    expiresIn: '30d'
  },)
  
  const {passwordHash, ...userData} = user._doc
      res.json({
        ...userData,
        token,
      })
    } catch(err){
  res.status(500).json({
    message: 'Не удалось зарегистрироваться',
  })
    }
  }
  
  export const login = async (req, res) =>{   // АВТОРИЗАЦИЯ
    try{
    const user = await UserModel.findOne({email: req.body.email})
    if (!user){
      return res.status(404).json({
        message: 'Пользователь не найден',
      });
    }
    
    const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)
    if(!isValidPass){
      return res.status(404).json({
        message: 'Неверый логин или пароль',
      });
    }
    
    const token = jwt.sign({
      _id: user._id,
    }, 'secret123', 
    {
      expiresIn: '30d'
    },)
    const {passwordHash, ...userData} = user._doc
        res.json({
          ...userData,
          token,
        })
    }catch(err){
      res.status(500).json({
        message: 'Не удалось аторизоваться',
      })
    }
    }
    
    
    export const getMe = async (req, res) => {   //ПОЛУЧЕНИЕ ИНФЫ О ЧЕЛЕ
        try{
          const user = await UserModel.findById(req.userId)
          if(!user){
            return res.status(404).json({
              message:'пользователь не найден'
            })
          }
          const {passwordHash, ...userData} = user._doc
          res.json(userData) 
        }catch(err){
          res.status(500).json({
            message: 'нет доступа'
          })
        }
      }