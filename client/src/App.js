import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { Context } from '.'

import { AppRouter } from './components/AppRouter'
import { check } from './http/userAPI'
import { SHOP_ROUTE } from './utils/consts'

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check()
      .then(() => {
        user.setUser(user)
        user.setIsAuth(true)
      })
      .catch(error => {
        alert(error.response.data.message)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation='grow' />
  }

  return (
    <AppRouter />
  )
})

export default App
