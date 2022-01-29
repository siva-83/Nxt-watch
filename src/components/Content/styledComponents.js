import styled from 'styled-components'

export const ContentMainContainer = styled.div`
  width: 100vw;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
`
export const ContentMenu = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.l ? ' #1e293b' : '#ffffff')};
  padding: 10px;
  margin: 0;
  padding: 5px;
  font-size: 12px;
`
export const MenuContainer = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  background-color: ${props => (props.k ? '#ffffff' : ' #1e293b')};
`
export const ContentDisplayContainer = styled.div`
  background-color: ${props => (props.j ? '#ffffff' : ' #0f0f0f')};
  width: 85vw;
  height: 90vh;
  overflow: auto;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  background-size: cover;
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
