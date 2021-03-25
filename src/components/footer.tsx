import { Box, Container, Divider, Flex, Link } from "@chakra-ui/layout"

export const Footer = ({ ...rest }) => {
  const links = [
    {
      url: "https://github.com/mwafa",
      label: "Github",
    },
    {
      url: "https://www.linkedin.com/in/muhammad-wafa-587440126/",
      label: "Linkedin",
    },
  ]
  return (
    <Container>
      <Divider my="2" />
      <Flex direction="column" alignItems="center">
        <Box>
          {links.map(({ url, label }) => (
            <Link mx="3" key={url} href={url}>
              {label}
            </Link>
          ))}
        </Box>
        <Box fontSize="small" my="3">
          Copyright {new Date().getFullYear()} &copy; mwafa.net
        </Box>
      </Flex>
    </Container>
  )
}
