/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import formJSON from '../data/custom-form.json';
import { Select, TextInput } from '../components';

const initialValues: {
  [key: string]: any;
} = {};

const requiredFields: {
  [key: string]: any;
} = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('This field is required.');
    }
    if (rule.type === 'minLength') {
      schema = schema.min(
        (rule.value as any) || 1,
        `Must have at least ${rule.value} characters.`
      );
    }
    if (rule.type === 'email') {
      schema = schema.email();
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
        noValidate
      >
        {(formik) => (
          <Form>
            {formJSON.map(({ type, name, placeholder, label, options }) => {
              if (type === 'input' || type === 'password' || type === 'email') {
                return (
                  <TextInput
                    key={name}
                    type={type as any}
                    name={name}
                    placeholder={placeholder}
                    label={label}
                  />
                );
              } else if (type === 'select') {
                return (
                  <Select key={name} label={name} name={name}>
                    <option value="">Select an option</option>
                    {options?.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </Select>
                );
              }
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
