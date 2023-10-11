import "../Wrapper/Wrapper.css";
import Logo from "../Logo/Logo";
import Field from "../Field/Field";
import Button from "../Button/Button";
import { useState } from "react";
function Wrapper() {
  const [login, setLogin] = useState(false);

  function click(){
    setLogin(!login)
  }
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <Logo src="../src/assets/insta-logo.jfif" alt="Instagram logo" />
          <div className="fields-wrapper">
            {!login && (
              <>
                <Field type="text" placeholder="Mobile number or email" />
                <Field type="text" placeholder="Full name" />
              </>
            )}
            <Field type="text" placeholder="Phone number, username or email" />
            <Field type="password" placeholder="Password" />
            <Button text={login ? "Sign in" : "Sign up"} onClick={click} />
          </div>
          <span className="login-text">
            {login ?'Don not have an account':'Already have an account'}? <a onClick={click}>{login ?'Sign up':'Sign in'}</a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Wrapper;
