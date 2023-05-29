import Cam from "../assets/images/cam.png";
import Add from "../assets/images/add.png";
import More from "../assets/images/more.png";
import Messages from "./Messages";
import Input from "./Input"
const Chat = () => {
  return (
    <div className="chat">
        <div className="chatInfo">
          <span>Sahil</span>
          <div className="chatIcons">
            <img src={Cam} alt="video_cam_icon" />
            <img src={Add} alt="add_icon" />
            <img src={More} alt="more_icon" />
          </div>
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat