import styled from 'styled-components'

export const Title = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 10px;
  color: ${props => (props.p ? '#1e293b' : '#ffffff')};
`
