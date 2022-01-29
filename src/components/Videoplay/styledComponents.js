import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Video = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.a ? '#ffffff' : '#181818')};
  width: 85vw;
  height: 90vh;
  overflow: auto;
  overflow-x: hidden;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.v ? ' #1e293b' : '#ffffff')};
  padding: 0px;
`

export const LikeIconContainer = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //   background-color: blue;
  width: 50vw;
  font-family: 'Roboto';
  font-size: 10px;
  color: ${props => (props.n ? ' #1e293b' : '#ffffff')};
`
export const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${props => (props.b ? ' #1e293b' : '#ffffff')};
`
export const VideoT = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: bold;
  color: ${props => (props.v ? ' #1e293b' : '#ffffff')};
`

// export const Video = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   background-color: ${props => (props.a ? '#ffffff' : '#1e293b')};
//   width: 85vw;
// `
