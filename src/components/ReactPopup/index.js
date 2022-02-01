import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      trigger={
        <button className="trigger-button" type="button">
          Trigger
        </button>
      }
    >
      <div>
        <p>React is a popular and widely used programming language</p>
      </div>
    </Popup>
  </div>
)
export default ReactPopUp
