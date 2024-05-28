import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import leftImage from "../../assets/image-13.png";

export default function Form() {
  const navigate = useNavigate();

  const [formData, setFormDate] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [error, setError] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });

  const handleChange = e =>
    setFormDate({ ...formData, [e.target.name]: e.target.value });

  const handleCheckbox = e =>
    setFormDate({
      ...formData,
      [e.target.name]: e.target.checked,
    });

  const handleSubmit = e => {
    e.preventDefault();
    let newError = { ...error };
    if (
      formData.name.trim().length === 0 ||
      formData.name === undefined ||
      formData.name === null
    )
      newError.name = "Name is required";
    else newError.name = "";

    if (
      formData.username.trim().length === 0 ||
      formData.username === undefined ||
      formData.username === null
    )
      newError.username = "Username is required";
    else newError.username = "";

    if (
      formData.email.trim().length === 0 ||
      formData.email === undefined ||
      formData.email === null
    )
      newError.email = "Email is required";
    else newError.email = "";

    if (
      formData.mobile.trim().length === 0 ||
      formData.mobile === undefined ||
      formData.mobile === null
    )
      newError.mobile = "Mobile is required";
    else newError.mobile = "";

    if (!formData.checkbox)
      newError.checkbox = "Please accept the terms and conditions";
    else newError.checkbox = "";

    console.log(e);
    console.log(formData.checkbox);
    console.log(newError.checkbox);

    setError({ ...newError });
    if (
      newError.name === "" &&
      newError.username === "" &&
      newError.email === "" &&
      newError.mobile === "" &&
      newError.checkbox === ""
    ) {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/genre");
    }
  };

  return (
    <div className='container'>
      <div className='left-container'>
        <img id='left-image' src={leftImage} alt='left-image' />
        <p>Discover new things on Superapp</p>
      </div>
      <div className='right-container'>
        <div id='heading1'>Super app</div>
        <div id='heading2'>Create your new account</div>
        <form id='form' onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              placeholder='Name'
              id='name'
              className='input'
              name='name'
              onChange={handleChange}
            />
            {error.name !== "" && <p className='error-message'>{error.name}</p>}
          </div>
          <div>
            <input
              type='text'
              placeholder='Username'
              id='user-name'
              className='input'
              name='username'
              onChange={handleChange}
            />
            {error.username !== "" && (
              <p className='error-message'>{error.username}</p>
            )}
          </div>
          <div>
            <input
              type='email'
              placeholder='Email'
              id='email'
              className='input'
              name='email'
              onChange={handleChange}
            />
            {error.email !== "" && (
              <p className='error-message'>{error.email}</p>
            )}
          </div>
          <div>
            <input
              type='number'
              placeholder='Mobile'
              id='mobile'
              className='input'
              name='mobile'
              onChange={handleChange}
            />
            {error.mobile !== "" && (
              <p className='error-message'>{error.mobile}</p>
            )}
          </div>
          <div>
            <input
              type='checkbox'
              id='checkbox'
              name='checkbox'
              onChange={handleCheckbox}
            />
            <label id='form-label' htmlFor='checkbox'>
              Share my registration date with Superapp
            </label>
            {error.checkbox !== "" && (
              <p className='error-message'>{error.checkbox}</p>
            )}
          </div>
          <button id='sign-up-button' className='button' type='submit'>
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
