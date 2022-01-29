import './index.css'
import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('nxt_watch')
  console.log(jwtToken)
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  console.log('jeffffffffffa')
  return <Route {...props} />
}

export default ProtectedRoute
