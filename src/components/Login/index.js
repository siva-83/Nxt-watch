import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {MainContainer, LoginCard} from './StyledComponents'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showstatus: false,
    loginStatus: true,
    error: '',
  }

  //   successLogin = jwtToken => {
  //     Cookies.set('jwt_token', jwtToken, {expires: 30})
  //     const {history} = this.props
  //     history.replace('/')
  //   }

  failedLogin = msg => {
    console.log('heee', msg)
    this.setState(prevState => ({
      loginStatus: !prevState.loginStatus,
      error: msg,
    }))
  }

  loginFun = async event => {
    event.preventDefault()
    console.log('I am In')
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      console.log('heyyyy', data.error_msg)
      this.failedLogin(data.error_msg)
    }
    console.log(response)
  }

  userfun = event => {
    this.setState({username: event.target.value})
  }

  passfun = event => {
    this.setState({password: event.target.value})
  }

  showpassfun = event => {
    this.setState(prevState => ({showstatus: !prevState.showstatus}))
  }

  render() {
    console.log(this.state)
    const {user, password, showstatus, loginStatus, error} = this.state
    console.log(showstatus)
    const jwtToken = Cookies.get('nxt-watch')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <MainContainer onSubmit={this.loginFun}>
        <LoginCard>
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              className="login-logo"
              alt="website logo"
            />
          </div>
          <div className="label-container">
            <label htmlFor="username" className="label-text">
              USERNAME
            </label>
            <input
              type="text"
              placeholder="User Name"
              id="username"
              className="input-element"
              onChange={this.userfun}
              value={user}
            />
            <label htmlFor="password" className="label-text">
              PASSWORD
            </label>
            {showstatus ? (
              <input
                type="text"
                placeholder="Password"
                id="password"
                className="input-element"
                onChange={this.passfun}
                value={password}
              />
            ) : (
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="input-element"
                onChange={this.passfun}
                value={password}
              />
            )}

            {/* <input
              type="password"
              placeholder="Password"
              id="password"
              className="input-element"
              onChange={this.passfun}
              value={password}
            /> */}
            <div className="checkPassword-container">
              <input type="checkbox" id="tick" onChange={this.showpassfun} />
              <label htmlFor="tick" className="label-text">
                Show Password
              </label>
            </div>
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          {loginStatus ? '' : <p className="error-message">* {error}</p>}
        </LoginCard>
      </MainContainer>
    )
  }
}
export default Login
