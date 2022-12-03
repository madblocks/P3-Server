const { User } = require('../models')
const auth = require('../middleware/auth')

// url: /api/auth/login
const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username},
      raw: true
    })
    if (
      user && (await auth.comparePassword(req.body.password, user.passwordDigest))
    ) {
      let payload = {
        username: user.username,
        email: user.email
      }
      let token = auth.createToken(payload)
      return res.send({ user: payload, token})
    }
    res.status(401).send({status: 'Error', msg: 'Unauthorized: Login Failed'})
  } catch (error) {
    throw error
  }
}