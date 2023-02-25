// import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

// Form, Field, FieldArray

const initialValues = {
  name: '',
  //   number: '',
};

export const ContactForm = ({ onSave }) => {
  const handleSubmit = e => {
    e.preventDefaulte();
    const { values, actions } = e.target.elements;
    console.log(values);
    console.log(actions);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoCompolete="off">
        <label htmlFor="name">
          Name
          <Field type="text" name="name" placeholder="Name" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

// ContactForm.propTypes = {
//   name: PropTypes.string.isRequired,
// };

// <Formik
//   initialValues={{ friends: ['jared', 'ian', 'brent'] }}
//   onSubmit={values =>
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//     }, 500)
//   }
//   render={({ values }) => (
//     <Form>
//       <FieldArray
//         name="friends"
//         render={arrayHelpers => (
//           <div>
//             {values.friends && values.friends.length > 0 ? (
//               values.friends.map((friend, index) => (
//                 <div key={index}>
//                   <Field name={`friends.${index}`} />
//                   <button
//                     type="button"
//                     onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
//                   >
//                     -
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
//                   >
//                     +
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <button type="button" onClick={() => arrayHelpers.push('')}>
//                 {/* show this when user has removed all friends from the list */}
//                 Add a friend
//               </button>
//             )}
//             <div>
//               <button type="submit">Submit</button>
//             </div>
//           </div>
//         )}
//       />
//     </Form>
//   )}
// />

/* <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          /> */
