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
  background-color: ${props => (props.k ? '#ffffff' : '#21211f')};
`
