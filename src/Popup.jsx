import {} from './popup.css';


export default function Popup({ id, header, body, footer,handlePopup }) {
  return (
    <div>
    <div id={id || "modal"} className="model">
      <div className="content">
        <div className="Header">
          <span onClick={handlePopup} className="close-icon">&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is Body</p>
            </div>
          )}
        </div>
        <div className="footer">
          {" "}
          {footer ? (
            footer
          ) : (
            <div>
              <p>This is footer</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
