import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput} from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput('', (value) => isNotEmpty(value) && isEmail(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return false;
    }

    console.log(emailValue || passwordValue)

  }

  return (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="control-row">
          <Input
              label="email"
              id="email"
              type="email"
              name="email"
              onBlur={handleEmailBlur}
              onChange={handleEmailChange}
              value={emailValue}
              error={emailHasError && 'Please enter a valid email!'}
          ></Input>

          <Input
              label="Password"
              id="password"
              type="password"
              name="password"
              onBlur={handlePasswordBlur}
              onChange={handlePasswordChange}
              value={passwordValue}
              error={passwordHasError && 'Please enter a valid password.'}
          ></Input>
        </div>

        <p className="form-actions">
          <button className="button button-flat">Reset</button>
          <button type="button" className="button">Login</button>
        </p>
      </form>
  );
}