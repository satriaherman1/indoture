import { Box, BoxProps, Button, Checkbox, Divider, Flex, FormControl, FormLabel, HStack, Heading, Image, Input, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import FormDecorator from "@src/components/containers/Login/FormDecorator";
import { logoSrc, mediumBreakpoints } from "@src/definitions/variables";
import { useAuth } from "@src/lib/context/firebase/useAuth";
import { Formik } from "formik";
import { Link } from "react-router-dom";

export default function LoginForm(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);

  const descBg = useColorModeValue("white", "gray.800");
  const textSecondaryColor = useColorModeValue("gray.600", "white");

  const { signInWithGoogle, signIn } = useAuth() as any;

  return (
    <Box {...props} pos="fixed" top="0" h="100vh" w="100vw" bg="blue.800">
      <Box pos="fixed" zIndex={2} top="50%" left="50%" transform="translate(-50%, -50%)" w="90%" maxW="450px" bg="white" rounded="md" p="20px 25px">
        <Image display="block" mx="auto" src={logoSrc} w="50px" h="50px" />
        <Heading mt="20px" size="md" textAlign="center">
          Masuk Ke akun Indoture
        </Heading>

        <Formik initialValues={{ email: "", password: "" }} onSubmit={(values) => signIn(values.email, values.password)}>
          <Box mt="20px" display="flex" flexDir="column" gap="12px">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="email" />
            </FormControl>

            <Flex justifyContent="space-between" alignItems="center">
              <Checkbox>Ingat Saya</Checkbox>

              <Link to="/forgot-password">
                <Text fontSize="16px" color="teal">
                  Lupa Password
                </Text>
              </Link>
            </Flex>

            <Button mt="12px" colorScheme="teal">
              Login
            </Button>

            <Box pos="relative">
              <Divider bg="gray.800" pos="absolute" w="38%" top="50%" transform="translateY(-50%)" />
              <Text textAlign="center" color="gray.500">
                Atau
              </Text>
              <Divider right="0" bg="gray.800" pos="absolute" w="38%" top="50%" transform="translateY(-50%)" />
            </Box>

            <HStack justifyContent="center">
              <Button variant="outline" size="md" onClick={signInWithGoogle}>
                <Image w="18px" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" />
              </Button>
              <Button variant="outline" size="md">
                <Image w="18px" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" />
              </Button>
              <Button variant="outline" size="md">
                <Image w="18px" src="https://upload.wikimedia.org/wikipedia/commons/3/39/Logo_of_Twitter%2C_Inc..svg" />
              </Button>
            </HStack>

            <Text mt="12px" textAlign="center">
              Belum punya akun?{" "}
              <Box as="span" color="teal">
                Daftar
              </Box>
            </Text>
          </Box>
        </Formik>
      </Box>

      <FormDecorator />
    </Box>
  );
}
