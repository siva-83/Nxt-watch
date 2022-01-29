import styled from 'styled-components'

export const Trend = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin: 10px;
  width: 80vw;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 10px;
  color: ${props => (props.p ? '#1e293b' : '#ffffff')};
`
export const TitleHead = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 10px;
  color: ${props => (props.p ? '#1e293b' : '#ffffff')};
`
