import { useFormik } from "formik";
import { createContext } from "react";

const FormikContext = createContext({});

export const Formik = ({ children, ...props }) => {
  const formikStateAndHelpers = useFormik(props);

  return (
    <FormikContext.Provider>
      {typeof children === "function"
        ? children(formikStateAndHelpers)
        : children}
    </FormikContext.Provider>
  );
};
