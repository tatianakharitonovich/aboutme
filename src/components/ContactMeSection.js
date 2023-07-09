import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const initialValues = {
    firstName: "",
    email: "",
    type: "hireMe",
    comment: "",
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      submit("", values);
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .required("Required"),
      email: Yup.string()
        .required("Required")
        .email("Invalid email address"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
  });  

  useEffect(()=>{
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  const blurHandler = (e) => {
    formik.setFieldTouched(e.target.name);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  }

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="rgb(164, 122, 104)"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={submitHandler}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={e => {blurHandler(e)}}
                  focusBorderColor={"black"}
                />
                <FormErrorMessage>{formik.touched.firstName &&  formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={e => {blurHandler(e)}}
                  focusBorderColor={"black"}
                />
                <FormErrorMessage>{formik.touched.email && formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  color={"black"}
                  focusBorderColor={"black"}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment &&  formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  value={formik.values.comment}                  
                  onChange={formik.handleChange}
                  onBlur={e => {blurHandler(e)}}
                  focusBorderColor={"black"}
                />
                <FormErrorMessage>{formik.touched.comment &&  formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="blackAlpha"
                width="full"
                isDisabled={formik.dirty===false || Object.keys(formik.errors).length !== 0}
                isLoading={formik.isSubmitting && isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
