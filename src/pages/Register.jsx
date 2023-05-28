import "../styles/style.scss";
import addAvarar from "../assets/images/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter the password" />

          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={addAvarar} alt="" />
            <span>Add an avatar</span>
          </label> 
          

          <button>Sign Up</button>
        </form>
        <p>already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
