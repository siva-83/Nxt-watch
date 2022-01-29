import styled from 'styled-components'

export const MaincontainerHeader = styled.div`
  background-color: ${props => (props.m ? '#ffffff' : '#21211f')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
export const Icon = styled.button`
  background-color: transparent;
  color: ${props => (props.co ? '#475569' : '#ffffff')};
  border-style: none;
  margin-left: 20px;
`
