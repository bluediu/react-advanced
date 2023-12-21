import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { TextInput } from '../components';
import '../styles/styles.css';

const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          repeatPassword: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Must have at least 2 characters')
            .max(15, 'Must have 15 characters or least')
            .required('Required'),
          email: Yup.string()
            .email('Must have a valid email address')
            .required('Required'),
          password: Yup.string().min(6, 'Must have at least 6 characters'),
          repeatPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Your passwords do not match')
            .required('Required'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <TextInput label="Name" name="name" />
            <TextInput label="E-mail" name="email" />
            <TextInput label="Password" name="password" type="password" />
            <TextInput
              label="Repeat password"
              name="repeatPassword"
              type="password"
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormikPage;
