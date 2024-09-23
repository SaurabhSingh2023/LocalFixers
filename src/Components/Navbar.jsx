import {
  Box,
  Grid,
  Flex,
  Image,
  Button,
  Spacer,
  Show,
  Hide,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Center,
  useColorMode // Import useColorMode
} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons"; // Import SunIcon and MoonIcon
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode(); // Use useColorMode hook

  const handleSideBar = () => {};

  return (
    <Flex
      w="full"
      alignItems="center"
      gap="2"
      p={5}
      pl="40px"
      pr="40px"
      justifyContent="space-between"
      bg="transparent"
    >
     <Box fontSize="5xl">
  <Link to="/">
    LocalFixers
  </Link>
</Box>

      <Spacer />
      <Show breakpoint="(min-width: 1000px)">
        <Flex gap="5">
          <Center>
            <Link>Blog</Link>
          </Center>
          <Center>
            <Link>Register As A Professional</Link>
          </Center>

          <Link>
            <Center>
              <Login />
            </Center>
          </Link>

          {/* Add theme toggle button */}
          <Button onClick={toggleColorMode} ml={4}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Show>
      <Hide above="1000px">
        <Popover>
          <PopoverTrigger>
            <Button>
              <HamburgerIcon w={8} h={8} onClick={handleSideBar} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody color="black">
              <Grid gap="20px" p={8}>
                <Link>Blog</Link>
                <Link>Register As A Professional</Link>
                <Link>
                  <Login />
                </Link>

                {/* Add theme toggle button in mobile view */}
                <Button onClick={toggleColorMode} mt={4}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Grid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Hide>
      <Box></Box>
    </Flex>
  );
}
