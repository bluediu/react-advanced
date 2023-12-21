import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

const RegisterPage = () => {
  const {
    name,
    email,
    password1,
    password2,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>RegisterPage</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>This field is required.</span>}
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>No valid email. Try again</span>}
        <input
          type="password"
          name="password1"
          placeholder="Password "
          value={password1}
          className={`${password1.trim().length <= 0 && 'has-error'}`}
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>This field is required.</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>Password must have at lest 6 characters.</span>
        )}
        <input
          type="password"
          name="password2"
          placeholder="Repeat password "
          value={password2}
          className={`${password2.trim().length <= 0 && 'has-error'}`}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>This field is required.</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Password are not the same. Try again.</span>
        )}
        <button type="submit">Create</button>
        <button onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};

export default RegisterPage;
