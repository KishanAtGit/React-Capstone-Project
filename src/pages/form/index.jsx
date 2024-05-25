import "./index.css";
import leftImage from "../../assets/image-13.png";

export default function Form() {
  return (
    <div className='container'>
      <div className='left-container'>
        <img id='left-image' src={leftImage} alt='left-image' />
        <p>Discover new things on Superapp</p>
      </div>
      <div className='right-container'>
        <div id='heading1'>Super app</div>
        <div id='heading2'>Create your new account</div>
        <form id='form' action=''>
          <input type='text' placeholder='Name' id='name' className='input' />
          <input
            type='text'
            placeholder='Username'
            id='user-name'
            className='input'
          />
          <input type='text' placeholder='Email' id='email' className='input' />
          <input
            type='text'
            placeholder='Mobile'
            id='mobile'
            className='input'
          />
          <div>
            <input type='checkbox' id='checkbox' />
            <label id='form-label' htmlFor='checkbox'>
              Share my registration date with Superapp
            </label>
          </div>
          <button id='sign-up-button' className='button'>
            SIGN UP
          </button>
          <div className='bottom-text'>
            By clicking on Sign up. you agree to Superapp{" "}
            <span style={{ color: "#72db73" }}>
              Terms and Conditions of Use
            </span>
          </div>
          <div className='bottom-text'>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <span style={{ color: "#72db73" }}>Privacy Policy</span>
          </div>
        </form>
      </div>
    </div>
  );
}
