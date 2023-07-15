import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

function About() {
    return (
        <Box pt={"50px"} bgGradient="linear(to-r, lightblue, orange)" w="100%"
            h="100vh">
            <Heading as={"h1"} fontSize={"3xl"}>
                About Page
            </Heading>
            <Box paddingTop={"30px"} w={'80%'} m={"auto"}>
                <Text fontWeight={"bold"}>
                    This fully functional website is built using React and styled with Chakra UI, a powerful CSS framework for creating beautiful and responsive user interfaces. It consists of seven pages: Home, About, Contact, Movies, Todo, Products, and Cart. Each page is designed and implemented to provide seamless user experience and functionality. With React's component-based architecture and Chakra UI's extensive set of customizable components, this website offers a visually appealing and user-friendly interface. Explore the different pages and enjoy the smooth navigation and interactive features provided by this modern frontend setup.
                </Text>


            </Box>
        </Box>
    )
}

export default About