import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const patternName =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const messageName =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";

const patternNumber =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const messageNumber =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

let schema = yup.object().shape({
  name: yup.string().required().matches(patternName, messageName),
  number: yup.string().required().matches(patternNumber, messageNumber),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactsForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    onSubmit(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label htmlFor="name">
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <br />
        <label htmlFor="number">
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};
