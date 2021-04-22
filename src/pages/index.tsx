import { Box, Container, Flex } from "@chakra-ui/layout"

import Head from "next/head"
import { Image } from "@chakra-ui/image"
import { NextPage } from "next"
import { UserDetails } from "../components/user-details"

const Index: NextPage = () => {
  return (
    <Container mt="20vh">
      <Head>
        <title>Muhamamd Wafa</title>
        <meta name="title" content="Muhamamd Wafa" />
        <meta
          name="description"
          content="I am Wafa, passionate to create something."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mwafa.net/" />
        <meta property="og:title" content="Muhamamd Wafa" />
        <meta
          property="og:description"
          content="I am Wafa, passionate to create something."
        />
        <meta property="og:image" content="https://github.com/mwafa.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mwafa.net/" />
        <meta property="twitter:title" content="Muhamamd Wafa" />
        <meta
          property="twitter:description"
          content="I am Wafa, passionate to create something."
        />
        <meta property="twitter:image" content="https://github.com/mwafa.png" />
      </Head>
      <Box shadow="lg" borderWidth="1px" borderRadius={10} p={3}>
        <Flex direction="row" justify="flex-start" alignItems="flex-start">
          <Image
            borderRadius="50%"
            h={[50, 100]}
            mr="3"
            shadow="lg"
            src="//github.com/mwafa.png"
            fallbackSrc="https://via.placeholder.com/100ya"
          />
          <UserDetails />
        </Flex>
      </Box>
    </Container>
  )
}

export default Index
