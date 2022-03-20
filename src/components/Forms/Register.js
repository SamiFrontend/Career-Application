import { View, Text } from "react-native";
import React, { useState, useContext } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "../UI/Error";
import { spacing } from "../../utils";
import { register , saveUserData } from "../../services/Auth";
import { AuthContext } from "../../store/Auth";

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("enter a valid email")
    .required("please enter your email "),
  password: Yup.string()
    .min(6, "password at least 6 charactar")
    .required("please enter your password"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  jobTitle: Yup.string().required("please enter your job title"),
});

export default function Register({ navigation }) {

  const [errorMessage, setErrorMessage] = useState(false);
  const user = useContext(AuthContext);
  const [ lockedButton , setLockedButton ] = useState(false) ; 

  const onSubmit = (values) => {

    if( lockedButton ) return ; 

    let data = {
      role: "user",
      email: values.email,
      jobTitle: values.jobTitle,
      password: values.password,
    };

    setLockedButton(true) ; 
    register(data)
      .then( async (response) => {
        user.setUser(response.data);
        navigation.reset({ index: 0, routes: [{ name: "HomeScreen" }] });
        // save in localstorage
        const { id, role, email, avatar, jobTitle } = data[0];
        await saveUserData({ id, role, email, avatar, jobTitle });
        setLockedButton(false)
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLockedButton(false)
      });
  };

  return (
    <Formik
      initialValues={{
        email: "",
        jobTitle: "",
        password: "",
        passwordConfirmation: "",
      }}
      onSubmit={onSubmit}
      validationSchema={RegisterSchema}
    >
      {({ handleChange, handleSubmit, touched, values, errors }) => (
        <View>
          <Input
            error={errors.jobTitle && touched.jobTitle}
            errorText={errors.email}
            label={"Job Title"}
            value={values.job}
            onChangeText={handleChange("jobTitle")}
            placeholder={"enter your job title"}
          />
          <View>
            <Input
              error={errors.email && touched.email}
              errorText={errors.email}
              label={"Email"}
              value={values.email}
              onChangeText={handleChange("email")}
              placeholder={"enter your email"}
            />

            <Input
              type={"password"}
              label={"Password"}
              placeholder={"enter your password"}
              onChangeText={handleChange("password")}
              value={values.password}
              error={errors.password && touched.password}
              errorText={errors.password}
            />
            <Input
              error={
                errors.passwordConfirmation && touched.passwordConfirmation
              }
              errorText={errors.passwordConfirmation}
              type={"password"}
              label={"Confirm Password"}
              placeholder={"confirm your password"}
              onChangeText={handleChange("passwordConfirmation")}
              value={values.passwordConfirmation}
            />
          </View>

          <View>
            {errorMessage && <Error text={errorMessage} align={"center"} />}
          </View>

          <View style={{ marginTop: spacing.xl }}>
            <Button title={"Create Account"} onPress={handleSubmit} />
            <Button
              secondry={true}
              onPress={() => navigation.replace("Login")}
              title={"Already have an Account ? Login"}
            />
          </View>
        </View>
      )}
      {/* {({ handelChange, handelBlur, handelSubmit, values }) => (
       
      )} */}
    </Formik>
  );
}
