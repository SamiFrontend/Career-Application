import { View, Text } from "react-native";
import React , { useState , useContext } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { Formik } from "formik";
import * as Yup from 'yup';
import Error from '../UI/Error' ; 
import { spacing } from "../../utils";
import { AuthContext } from '../../store/Auth' ; 
import { login , saveUserData , getUserData } from '../../services/Auth'  ; 

const LoginSchema = Yup.object().shape({
    email : Yup.string().email('enter a valid email').required('please enter your email ') ,
    password : Yup.string().min(6 , 'password at least 6 charactar').required('please enter your password') 
})

export default  function Login({ navigation }) {
 
  const [ errorMessage , setErrorMessage ] = useState(false)
  const user = useContext(AuthContext) ; 
  const [ lockedButton , setLockedButton ] = useState(false) ; 

  const onSubmit = (values) => {
       
       if(lockedButton) return ; 

       setErrorMessage(false); 
       setLockedButton(true) ; 
       login(values.email).then( async ({ data }) => {
            
            if(data.length === 0 ){
              setErrorMessage('email or password is not correct ') ;
              return ;  
            }else{
              user.setUser(data[0])
              navigation.reset({ index : 0 , routes : [{ name : "HomeScreen"}]})
              // save in localstorage 
              const { id , role , email , avatar , jobTitle } = data[0]  ;
              await saveUserData({ id , role , email , avatar , jobTitle }) ; 
            }

            setLockedButton(false) ; 
       })
       .catch(( error ) => {
         setErrorMessage(error.message)
       })
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit} validationSchema={LoginSchema}>
      {({ handleChange,  handleSubmit , touched , values , errors }) => (
        <View>
          <View>

            <Input error={errors.email && touched.email} errorText={errors.email} label={"Email"} value={values.email} style={{ textAlign : 'left'}} onChangeText={handleChange('email')}  placeholder={"enter your email"} />
                     
            <Input
              type={"password"}
              label={"Password"}
              placeholder={"enter your password"}
              onChangeText={handleChange('password')}
              value={values.password}
              error={errors.password && touched.password}
              errorText={errors.password}
            />
          </View>

          <View>
              { errorMessage && <Error text={errorMessage} align={'center'} /> }
          </View>

          <View style={{ marginTop : spacing.xl }}>
            <Button
              title={"Sign In"}
              onPress={handleSubmit}
            />
            <Button
              secondry={true}
              onPress={() => navigation.replace("Register")}
              title={"Don't have an Account ? Create Account"}
            />
          </View>
        </View>
     )}
      {/* {({ handelChange, handelBlur, handelSubmit, values }) => (
       
      )} */}
    </Formik>
  );
}
