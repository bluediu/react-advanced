import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

const FormikYupPage = () => {
  const { errors, touched, handleSubmit, getFieldProps } = useFormik({
    initialValues: { firstName: '', lastName: '', email: '' },
    onSubmit: (value) => {
      console.log(value);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must have 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(15, 'Must have 15 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Must have a valid email address')
        .required('Required'),
    }),
  });

  return (
    <div>
      <h1>Formik Yup tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input type="text" {...getFieldProps('firstName')} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last name</label>
        <input type="text" {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">E-mail</label>
        <input type="text" {...getFieldProps('email')} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
