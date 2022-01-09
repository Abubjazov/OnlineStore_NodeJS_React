import Jwt  from 'jsonwebtoken'

export function checkRoleHandler (role) {
    return function(req, res, next) {
        if (req.method === 'OPTIONS') {
            next()
        }

        try {
            const token = req.headers.authorization.split(' ')[1]

            if (!token) {
                return res.status(401).json({ message: 'User not logged in' })
            }

            const decodedToken = Jwt.verify(token, process.env.SECRET_KEY)

            if (decodedToken.role !== role) {
                return res.status(403).json({ message: 'Access denied' })
            }

            req.user = decodedToken
            next()
        } catch (error) {
            return res.status(401).json({ message: 'User not logged in' })
        }
    }  
}
