import { useFormik, FormikErrors } from 'formik';
import '../styles/styles.css';

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const FormikPage = () => {
  const validate = ({ firstName, lastName, email }: IFormValues) => {
    const errors: FormikErrors<IFormValues> = {};

    if (!firstName.trim()) {
      errors.firstName = 'Required';
    } else if (firstName.length > 6) {
      errors.firstName = 'Must be 6 characters or less.';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Required';
    } else if (lastName.length > 6) {
      errors.lastName = 'Must be 6 characters or less.';
    }

    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: { firstName: '', lastName: '', email: '' },
      onSubmit: (value) => {
        console.log(value);
      },
      validate,
    });

  return (
    <div>
      <h1>Formik basic tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikPage;
