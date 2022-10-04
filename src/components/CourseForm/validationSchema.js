import * as Yup from "yup";

const validationSchema = () => {
  return Yup.object({
    title: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Required"),
    author: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Required"),
    category: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Required"),
  });
};

export default validationSchema;
