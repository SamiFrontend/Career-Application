import { View, Text } from "react-native";
import React, { useState , useContext } from "react";
import Input from "../UI/Input";
import UploadInput from "../UI/UploadInput";
import { colors, spacing } from "../../utils";
import Button from "../../components/UI/Button";
import StaticBottom from "../UI/StaticBottom";
import { useNavigation , useRoute } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from 'yup'
import { ApplyToJob } from '../../services/Apply' ; 
import Error from "../UI/Error";
import {NotificationContext} from '../../store/Notification' ; 
import { AuthContext } from "../../store/Auth";


const ApplySchema = Yup.object().shape({
   firstname : Yup.string().required('first name is required ') ,
   lastname : Yup.string().required('last name is required ') ,
   linkedin : Yup.string().required('linkedin url is required ') ,
})


export default function Apply({ style = { paddingVertical: spacing.xl } }) {

  const route = useRoute() ; 
  const navigation = useNavigation();
  const [ fileUpload , setFileUpload ] = useState(null);
  const [ errorMessage , setErrorMessge ] = useState(false) ; 
  const  notification = useContext(NotificationContext) ; 
  const { user } = useContext(AuthContext) ; 

  const setResumeFile = (response) => {
    setFileUpload(response);
  };

  const onSubmit = ( values ) => {
      let formData = {...values , resume : fileUpload , skills : [] ,  jobId : route.params.id , userId :  user.id  }  ; 
      ApplyToJob( formData )
      .then(({ data }) => {

        notification.showMessage('Success to Apply Job !')
        navigation.navigate("HomeScreen", {
              screen: "Home",
              params: "Hello world",
        });

      })
      .catch( error => {
        setErrorMessge(error.message )
      })
  }

  return (
    <Formik initialValues={{ firstname : "" , lastname : "" , linkedin : "" , resume : null }} validationSchema={ApplySchema} onSubmit={onSubmit}>
      {({ handleSubmit , values , errors , touched , handleChange }) => (
        <View style={[{ position: "relative" }, style]}>
          <Input
            placeholder="enter your first name"
            label="First name"
            onChangeText={handleChange('firstname')}
            value={values.firstname}
            error={(errors.firstname && touched.firstname )}
            errorText={errors.firstname}
          />
          <Input
            placeholder="enter your first name"
            label="Last Name"
            onChangeText={handleChange('lastname')}
            value={values.lastname}
            error={(errors.lastname && touched.lastname )}
            errorText={errors.lastname}
          />
          <Input
            placeholder="enter url your account in linked in"
            label="LinkedIn"
            onChangeText={handleChange('linkedin')}
            value={values.linkedin}
            error={(errors.linkedin && touched.linkedin )}
            errorText={errors.linkedin}
          />
          <UploadInput setFile={setResumeFile} label="upload Resume" />
          { errorMessage && <Error text={errorMessage} align="center" /> }
          <StaticBottom
            bottom={-50}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              title={"Cancel"}
              width={"30%"}
              secondry={true}
              colorText={colors.danger}
              onPress={() => navigation.goBack()}
            />
            <Button title={"Apply Now"} width={"65%"} onPress={handleSubmit} />
          </StaticBottom>
        </View>
      )}
    </Formik>
  );
}
