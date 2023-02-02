const Notification = (props) => {
    const { img1, color, text } = props;
    return (
      <div style={{ backgroundColor: color }} className="NotificationContd">
        <div className="NotificationContdImg">
          <img src={img1} alt="hello"></img>
        </div>
        <p>{text}</p>
      </div>
    );
  };
  
  const Element = () => (
    <div className="MainContd">
      <div className="MainContd1">
        <h1>Notifications</h1>
        <Notification
          img1="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          color="#0b69ff"
          text="Information Message"
        />
        <Notification
          img1="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          color="#2dca73"
          text="Information Message"
        />
        <Notification
          img1="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          color="#ffb800"
          text="Information Message"
        />
        <Notification
          img1="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          color="#ff0b37"
          text="Information Message"
        />
      </div>
    </div>
  );
  
  ReactDOM.render(<Element />, document.getElementById("root"));
  