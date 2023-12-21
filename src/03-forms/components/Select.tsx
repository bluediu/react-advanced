/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, useField } from 'formik';

interface IProps {
  label: string;
  name: string;
  [x: string]: any;
}

const Select = ({ label, ...props }: IProps) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};

export default Select;
