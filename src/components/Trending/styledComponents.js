import styled from 'styled-components'

export const MaincontainerOfTrending = styled.div`
  display: flex;
  flex-direction: row;
`
export const Trend = styled.div`
  overflow: auto;
  height: 90vh;
  width: 85vw;
  background-color: ${props => (props.o ? '#ffffff' : '#181818')};
`
export const Head = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  text-align: center;
  color: ${props => (props.p ? '#1e293b' : '#ffffff')};
`
export const Final = styled.div`
  overflow: hidden;
`
