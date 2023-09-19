import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";
// import snapdeal from "../Images/assets/snapdeal.png";

const ProjectCard = ({
  title,
  type,
  image,
   description,
  techStack,
  github,
  liveDemo,
  }) => {
  return (
    <Flex flexDirection="column" className="ProjectCard project-card">
      <Box className="cardImg" />
      
      <img src={image} alt="iamge"/>
      {/* <image> src={image} alt="Img" </image> */}
      <Box>
        <Flex>
          <Heading className="project-title" size="md">
            {title}
          </Heading>
          <Badge variant="outline" colorScheme="green">
            {type}
          </Badge>
        </Flex>
        <Text className="project-tech-stack">
          <span style={{ fontWeight: 700 }}>Tech Stacks:</span>{" "}
          {techStack.join(", ")}
        </Text>
        <Text className="project-description">{description}</Text>
      </Box>
      <Box>
        <HStack>
          <Link className="project-deployed-link" href={liveDemo} target="_blank">
            <Button>
              Live Demo <BiLinkExternal />
            </Button>
          </Link>
          <Link className="project-github-link" href={github} target="_blank">
            <Button>
              {" "}
              Code Base <VscGithub />
            </Button>
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
