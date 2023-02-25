import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { FormField, Form, Field, SubmitBtn } from './ContactForm.module';

const initialValues = {
  name: '',
  number: '',
};

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'must be at least 3 characters long')
    .max(15, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('A phone number is required'),
});

export const ContactForm = ({ onSave }) => {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    // actions.preventDefaulte();
    // { values, actions } = e.target.elements;
    console.log(values);
    console.log(actions);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <Form autoCompolete="off">
        <FormField htmlFor="name">
          Name
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" />
        </FormField>
        <FormField htmlFor="name">
          Number
          <Field type="tel" name="number" placeholder="Phon number" />
          <ErrorMessage name="number" />
        </FormField>
        <SubmitBtn type="submit">
          <span className="text">Add contact</span>
        </SubmitBtn>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSave: PropTypes.func,
};
