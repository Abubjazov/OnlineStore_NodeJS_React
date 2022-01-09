import Jwt  from 'jsonwebtoken'

export function authHandler (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]

        if (!token) {
            return res.status(401).json({ message: 'User not logged in' })
        }

        const decodedToken = Jwt.verify(token, process.env.SECRET_KEY)

        req.user = decodedToken
        next()
    } catch (error) {
        return res.status(401).json({ message: 'User not logged in' })
    }

    
}
