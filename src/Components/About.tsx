import { Box, chakra, Flex, Link } from '@chakra-ui/react'
import React from 'react'

function About() {
    
  return (
    <>
    <br></br>
    
    <Box id="about">
    <chakra.h1
    fontSize={{ base: "2xl", md: "3xl" }}
    color="gray.800"
    _dark={{ color: "white" }}
    fontWeight="bold"
    textAlign={"center"}
    >About</chakra.h1>

    <chakra.h3
    mt={4} color="gray.600" _dark={{ color: "gray.400" }} textAlign={"center"}
    >Who are in extremely love with eco friendly system.</chakra.h3>
    </Box>

    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}>
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            style={{
              backgroundImage:
                "url('https://loveincorporated.blob.core.windows.net/contentimages/gallery/03211459-0607-4d07-8a6c-9966e3820a7d-Mount-Kirkjufell-Iceland.jpg')",
            }}
          ></Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
            We Realize that
            there are reduced
            Wastege Stand out{" "}
          </chakra.h2>
          <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
          inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women.
          </chakra.p>
          <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
          inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women. inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women.
          </chakra.p>
          <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
          inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards – especially in the workplace. That’s why it’s crucial that, as women.
          </chakra.p>
        </Box>
      </Box>
    </Flex>
    </>
  )
}

export default About