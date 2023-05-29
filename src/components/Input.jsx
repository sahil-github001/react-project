import Img from "../assets/images/img.png";
import Attach from "../assets/images/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something" />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display: "none"}} id="file"/>
        <label htmlFor="file"></label>
        <img src={Img} alt="" />
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input