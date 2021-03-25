import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout"

import Head from "next/head"
import { Image } from "@chakra-ui/image"
import { NextPage } from "next"

const Index: NextPage = () => {
  return (
    <Container mt="20vh">
      <Head>
        <title>Muhamamd Wafa</title>
      </Head>
      <Box shadow="lg" borderWidth="1px" borderRadius={10} p={3}>
        <Flex direction="row" justify="flex-start" alignItems="center">
          <Image
            borderRadius="50%"
            h={[50, 100]}
            mr="3"
            shadow="lg"
            src="//github.com/mwafa.png"
          />
          <Box>
            <Heading pb={2} fontSize={["md", "lg"]}>
              Muhammad Wafa
            </Heading>
            <Image
              h={[4, 5]}
              src="https://www.codewars.com/users/mwafa/badges/micro"
            />
          </Box>
        </Flex>
      </Box>
    </Container>
  )
}

export default Index
