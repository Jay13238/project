"use client";

import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input,
  CheckboxGroup,
  Checkbox,
  Stack,
  Textarea,
  Button,
  Box,
  Heading,
  Container,
  Flex,
  Text,
  useToast,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";

const initValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  services: [],
  inquiryType: [],
};

const initState = {
  values: initValues,
  isLoading: false,
  isFormValid: false,
  error: null,
};

export default function ContactForm() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, isFormValid, error } = state;

  useEffect(() => {
    const formIsValid =
      values.name.trim() !== "" &&
      values.email.trim() !== "" &&
      values.phone.trim() !== "" &&
      touched.services &&
      values.services.length > 0 &&
      touched.inquiryType &&
      values.inquiryType.length > 0 &&
      values.message.trim() !== "";
    setState((prev) => ({ ...prev, isFormValid: formIsValid }));
  }, [values, touched]);

  const onBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  };

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: checked
          ? [...prev.values[name], value]
          : prev.values[name].filter((item) => item !== value),
      },
    }));
  };

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: null,
    }));

    try {
      // Send a POST request to your API endpoint with the form data
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Check if the request was successful
      if (response.ok) {
        // Reset the form and loading state
        setState(initState);
        setTouched({});
        toast({
          title: "message sent.",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        })
      } else {
        // Handle errors
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Reset loading state and set error message
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: "Failed to submit form. Please try again later.",
      }));
    }
  };

  return (
    <Container
      className="bg-white rounded-lg"
      py={7}
      px={6}
      w="100%"
      maxW="650px"
    >
      <Heading as="h2" size="lg" mb={10} textAlign="center">
        Inquire Now
      </Heading>
      {error && (
        <Text textAlign="center" color="red.300">
          {error}
        </Text>
      )}

      <FormControl isRequired isInvalid={touched.name && !values.name} mb={4}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          placeholder="John Doe"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={4}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          name="email"
          type="email"
          placeholder="example@example.com"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>required</FormErrorMessage>
      </FormControl>

      <FormControl mb={4}>
        <FormLabel htmlFor="phone">Phone Number</FormLabel>
        <Input
          name="phone"
          type="number"
          placeholder="000 000 0000"
          value={values.phone}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>required</FormErrorMessage>
      </FormControl>

      <FormControl mb={7}>
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea
          name="message"
          type="text"
          placeholder=""
          value={values.message}
          onChange={handleChange}
        />
      </FormControl>

      <Box mb={4}>
        <Heading as="h4" size="md" mb={3}>
          Which Services Are You Interested In?
        </Heading>
        <CheckboxGroup value={values.services}>
          <Stack spacing={2}>
            <Checkbox
              name="services"
              value="brand-identity"
              onChange={handleCheckboxChange}
            >
              Brand Identity
            </Checkbox>
            <Checkbox
              name="services"
              value="graphic-design"
              onChange={handleCheckboxChange}
            >
              Graphic Design
            </Checkbox>
            <Checkbox
              name="services"
              value="web-design"
              onChange={handleCheckboxChange}
            >
              Website Design & Development
            </Checkbox>
            <Checkbox
              name="services"
              value="ecommerce"
              onChange={handleCheckboxChange}
            >
              eCommerce Website
            </Checkbox>
            <Checkbox
              name="services"
              value="paid-advertising"
              onChange={handleCheckboxChange}
            >
              Paid Advertising
            </Checkbox>
            <Checkbox
              name="services"
              value="photography"
              onChange={handleCheckboxChange}
            >
              Brand Photography
            </Checkbox>
            <Checkbox
              name="services"
              value="Soical Media"
              onChange={handleCheckboxChange}
            >
              Social Media Needs
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>

      <Box mb={6}>
        <Heading as="h4" size="md" mb={3}>
          I Would Like To
        </Heading>
        <CheckboxGroup value={values.inquiryType}>
          <Stack spacing={2}>
            <Checkbox
              name="inquiryType"
              value="discovery-call"
              onChange={handleCheckboxChange}
            >
              Book a discovery call (I know which services I need and want a
              quotation)
            </Checkbox>
            <Checkbox
              name="inquiryType"
              value="consultation"
              onChange={handleCheckboxChange}
            >
              Book a Consultation (I know what I would like to achieve, but not
              sure which services I need)
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>

      <Flex justify="center" mt={5}>
        <Button
          type="submit"
          bg="#d0af7d"
          color="white"
          _hover={{ bg: "#b99664" }}
          isLoading={isLoading}
          disabled={!isFormValid || isLoading}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Flex>
    </Container>
  );
}
