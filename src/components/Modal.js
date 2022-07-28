const Modal = ({ isCopied, setCopied }) => {
  //   console.log("isCopied :>> ", isCopied);
  return (
    <div
      className="popup"
      style={isCopied ? {} : { opacity: 0, zIndex: "-999" }}
    >
      <div className="popup-inner">
        <button className="popup-close-btn" onClick={() => setCopied(false)}>
          X
        </button>
        <p>Copied!</p>
      </div>
    </div>
  );
};

export default Modal;
