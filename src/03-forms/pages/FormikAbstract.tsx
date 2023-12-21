import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { TextInput, Select, Checkbox } from '../components';

import '../styles/styles.css';

const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract tutorial</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          jobType: '',
          terms: false,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must have 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(15, 'Must have 15 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Must have a valid email address')
            .required('Required'),
          terms: Yup.boolean().oneOf([true], 'Must accept the conditions.'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Option not available')
            .required('Required'),
        })}
      >
        {(formik) => (
          <Form>
            <TextInput label="First name" name="firstName" />
            <TextInput label="Last name" name="lastName" />
            <TextInput label="E-mail" name="email" type="email" />
            <Select label="Job type" name="jobType">
              <option value="">Pick a option...</option>
              <option value="developer">Development</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT senior</option>
              <option value="it-jr">IT junior</option>
            </Select>
            <Checkbox label="Terms and conditions" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikAbstract;
