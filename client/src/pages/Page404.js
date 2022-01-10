import { ErrorMsg } from "../components/errorMsg/errorMsg"
import { Link } from "react-router-dom"

export const Page404 = () => {
    return (
        <>
            <ErrorMsg />
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24' }}>Page doesn't exist</p>
            <Link to='/' style={{ display: 'block', textAlign: 'center', fontWeight: 'bold', fontSize: '24', marginTop: '30', color: '#9f0013' }}>Back to main page</Link>
        </>
    )
}
