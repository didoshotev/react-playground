// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length > 10) {
    errors.title = "Must be 10 characters or less";
  }

  if (!values.author) {
    errors.author = "Required";
  } else if (values.author.length > 10) {
    errors.author = "Must be 10 characters or less";
  }

  if (!values.category) {
    errors.category = "Required";
  } else if (values.category.length > 10) {
    errors.category = "Invalid category address";
  }
  return errors;
};

export default validate;
