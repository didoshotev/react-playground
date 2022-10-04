import { Form, Formik, useFormik, Field, ErrorMessage } from "formik";
import validate from "./validate";
import validationSchema from "./validationSchema";

const CourseForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      category: "",
    },
    validationSchema,
    // validate,
    onSubmit: (values) => {
      console.log("Formik Submitted...!");
      console.log("values: ", values);
    },
  });

  const handleSubmit = (values) => {
    console.log("values: ", values);
  };

  return (
    <>
      <Formik
        initialValues={{ title: "", author: "", category: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {/* <Form>
          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="author">author</label>
          <Field name="author" type="text" />
          <ErrorMessage name="author" />

          <label htmlFor="category">category</label>
          <Field name="category" type="text" />
          <ErrorMessage name="category" />

          <button type="submit">Submit</button>
        </Form> */}
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                {...formik.getFieldProps("title")}
              />
              {formik.touched.title && formik.errors.title ? (
                <p style={{ color: "red" }}>{formik.errors.title}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="author">Author</label>
              <input
                id="author"
                name="author"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.author}
              />
              {formik.touched.author && formik.errors.author ? (
                <p style={{ color: "red" }}>{formik.errors.author}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                name="category"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
              />
              {formik.touched.category && formik.errors.category ? (
                <p style={{ color: "red" }}>{formik.errors.category}</p>
              ) : null}
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default CourseForm;
