import { Box, Flex, Heading, Link, Stack } from "@chakra-ui/layout"
import { useEffect, useState } from "react"

import { IUserGithub } from "../interfaces/user"
import { IconFollowers } from "../icons/followers"
import { IconRepo } from "../icons/repo"
import { Image } from "@chakra-ui/image"
import { getUser } from "../services/user"

export const UserDetails = () => {
  const [me, setMe] = useState<IUserGithub | null>(null)
  const username = "mwafa"

  useEffect(() => {
    getUser(username).then(setMe).catch(console.log)
  }, [])

  return (
    <Box>
      <Heading fontSize={["md", "lg"]}>Muhammad Wafa</Heading>
      <Box fontSize="small">{me && me.bio}</Box>
      <Stack spacing={3} direction="row" fontSize="small">
        <Box>
          <IconRepo /> {me && me.public_repos}
        </Box>
        <Box>
          <IconFollowers /> {me && me.followers}
        </Box>
      </Stack>
      <Box mt={4}>
        <Link href="https://www.codewars.com/users/mwafa">
          <Image
            h={[4, 5]}
            src="https://www.codewars.com/users/mwafa/badges/micro"
          />
        </Link>
      </Box>
    </Box>
  )
}
