import "../styles/style.scss";

const Login = () => {
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Chat App</span>
      <span className="title">Login</span>
      <form>
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter the password" />
        

        <button>Sign in</button>
      </form>
      <p>dont have an account? Register</p>
    </div>
  </div>
  )
}

export default Login