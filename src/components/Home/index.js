import {Component} from 'react'
import {MainContainer} from './styledComponents'
import Header from '../Header'
import Content from '../Content'

class Home extends Component {
  render() {
    return (
      <MainContainer>
        <Header />
        <Content />
      </MainContainer>
    )
  }
}
export default Home
