import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Image,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import logo from "../Images/favicon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

import Resume from "../Resume/Akanksha-Kumari-Resume.pdf";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box className="navbar">
      <Box className="logo">
        <Box>{/* <Image src={logo} /> */}</Box>
        <Box className="name">
          <Heading id="user-detail-name"> Akanksha Kumari</Heading>
          {/* <Heading>  Akanksha Kumari</Heading> */}
        </Box>
      </Box>
      <Box
        display={["none", "none", "none", "flex"]}
        className="nav-options"
        id="nav-menu"
      >
        <Box>
          <Button>
            <Link className="nav-link home" href="#">
              <span>Home</span>
            </Link>
          </Button>
        </Box>
        <Box>
          <Button>
            <Link className="nav-link about" href="#about">
              <span>About me</span>
            </Link>
          </Button>
        </Box>
        <Box>
          <Button>
            <Link className="nav-link skills" href="#skills">
              <span>Skills</span>
            </Link>
          </Button>
        </Box>
        <Box>
          <Button>
            <Link className="nav-link projects" href="#projects">
              <span>Projects</span>
            </Link>
          </Button>
        </Box>
        <Box>
          <Button
            id="resume-button-1"
            className="nav-link resume"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1QYmid4Wm8qmaHdVOcYF8YDK6PVcg_kY5/view?usp=sharing",
                "_blank"
              );
            }}
          >
            <a  id="resume-link-1" href={Resume} download="Akanksha-Kumari-Resume">
              <span>Resume</span>
            </a>
          </Button>
        </Box>
        <Box>
          <Button>
            <Link className="nav-link contact" href="#contact">
              <span>Contact</span>
            </Link>
          </Button>
        </Box>
      </Box>
      <Button
        ref={btnRef}
        display={["block", "block", "block", "none"]}
        onClick={() => {
          isOpen ? onClose() : onOpen();
        }}
      >
        {isOpen ? <VscChromeClose /> : <GiHamburgerMenu />}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent className="drawer">
          <DrawerCloseButton />
          <DrawerHeader>
            <Box display={["flex", "none"]} className="logo">
              <Box>
                <Image src={logo} />
              </Box>
              <Box className="name">
                <Heading>Akanksha Kumari</Heading>
                <Heading>Akanksha Kumari</Heading>
              </Box>
            </Box>
          </DrawerHeader>

          <DrawerBody>
            <Box>
              <Link href="#" onClick={() => onClose()}>
                Home
              </Link>
            </Box>
            <Box>
              <Link href="#about" onClick={() => onClose()}>
                About me
              </Link>
            </Box>
            <Box>
              <Link href="#skills" onClick={() => onClose()}>
                Skills
              </Link>
            </Box>
            <Box>
              <Link href="#projects" onClick={() => onClose()}>
                Projects
              </Link>
            </Box>
            <Box>
              <Link href="#resume" onClick={() => onClose()}>
                Resume
              </Link>
            </Box>
            <Box>
              <Link href="#contact" onClick={() => onClose()}>
                Contact
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
