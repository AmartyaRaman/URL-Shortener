import { v4 as uuidv4 } from 'uuid'

import { User } from '../models/user.js'
import { setUser } from '../services/auth.js'


async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body
  await User.create({
    name,
    email, 
    password
  })

  return res.redirect("/")
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body
  const user = await User.findOne({ email, password })

  if (!user) return res.render('login', { error: "Invalid email or password"})

  const sessionID = uuidv4()
  setUser(sessionID, user)
  res.cookie('uid', sessionID)
  return res.redirect("/")
}

export { handleUserSignUp, handleUserLogin }