import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Link,
  Tooltip,
  Image,
  Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoCloudDownload } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { projects, skills } from "../Utils/data";

import ProjectCard from "../Components/Card";
import Svg1 from "../Components/Svg1";
// import Svg2 from "../Components/Svg2";
import Svg3 from "../Components/Svg3";
import Slider from "react-slick";
import Resume from "../Resume/Akanksha-Kumari-Resume.pdf";

const Home = () => {
  const form = useRef();
  const toast = useToast();

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: matchMedia("(max-width: 425px)").matches
      ? 1
      : matchMedia("(max-width: 1024px)").matches
      ? 2
      : 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // * it's from Aos library to to use scroll designing
    Aos.init();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ot57meh",
        "template_82m6hki",
        form.current,
        "s7qxzSHyvTMO1qNhD"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            position: "top-right",
            title: "Email Sent ✔",
            description: `Thank You ${
              form.current.from_name.value.split(" ")[0]
            } for the message!`,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          form.current.from_name.value = "";
          form.current.user_email.value = "";
          form.current.message.value = "";
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Email Not sent.",
            description: "There is some error",
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <Box>
      <Box id="home">
        <Flex
          flexDirection={["column-reverse", "column-reverse", "row"]}
          m="auto"
          justifyContent="space-around"
          alignItems="center"
          h="100%"
        >
          <Box data-aos="fade-down">
            <Heading>
              Hey! <span className="themeText">I'm</span>
            </Heading>
            <Box className="content">
              <Heading
                fontSize="3.3em"
                className="text"
                data-text="Akanksha Kumari"
              >
                <span className="themeText">Akanksha Kumari</span>
              </Heading>
            </Box>
            <Text>
              I am a Full Stcak Web Developer passionate and experienced in
              building Web applications.
            </Text>
            <HStack
              className="hireMe"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1SNaSntIlnT9VgMg_zyhagyw7Br740a4s/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              <a
                id="resume-link-2"
                href={Resume}
                download="Akanksha-Kumari-Resume"
              >
                <Button id="resume-button-2">
                  Resume <GoCloudDownload />
                </Button>
              </a>
            </HStack>
          </Box>
          <Box data-aos="fade-down">
            <Svg1 />
          </Box>
        </Flex>
      </Box>

      {/* About me */}

      <Box id="about" className="about section">
        <Heading>
          About <span className="themeText">me</span>
        </Heading>
        <Flex
          flexDirection={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
          alignItems="center"
          h="100%"
        >
          <div data-aos="fade-right" className="aboutImg">
            <Svg3 />
          </div>

          <Flex data-aos="fade-left">
            <Flex w="100%" gap="10%" justifyContent="center">
              <Image
                className="home-img"
                borderRadius="full"
                boxSize="300px"
                src="https://avatars.githubusercontent.com/u/112841772?v=4"
                alt="Dan Abramov"
              />
            </Flex>

            <Box>
              <Text id="user-detail-intro">
                An ambitious and self-motivated Full-stack web Developer with a
                considerable technical skils in React.js. A quick learner with the ability to design
                website, using MongoDB, Express.js, React, Node.js, JavaScript.  A focused and
                efficient leraner with 1200+ hours of coding experience in web
                development..
                {/* An ambitious and self-motivated Full-stack Developer, skilled in React.js. 
                Developing websites using MongoDB, Expressjs, React, Nodejs, JavaScript. 
                An optimistic person, always ready to take a critical decision, ready to work under pressure.
                 Always ready to try some new things for optimization. */}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <hr></hr>
      {/* Technical Skills section */}
      <Box id="skills">
        <Heading>
          Technical
          <span className="themeText"> Skills</span>
        </Heading>
        <Flex className="skills">
          <Flex>
            <Heading size="lg">
              Front<span className="themeText">end</span>
            </Heading>
            <Box>
              {skills
                .filter((el) => el.tag === "frontend")
                .map((skill) => (
                  <Box
                    key={skill.id}
                    className="skill skills-card"
                    data-aos="zoom-in-up"
                  >
                    <Box>
                      <Image className="skills-card-img" src={skill.icon} />
                    </Box>
                    <Text className="skills-card-name">{skill.title}</Text>
                  </Box>
                ))}
            </Box>
          </Flex>
          <Flex>
            <Heading size="lg">
              Back<span className="themeText">end</span>
            </Heading>
            <Box>
              {skills
                .filter((el) => el.tag === "backend")
                .map((skill) => (
                  <Box key={skill.id} className="skill" data-aos="zoom-in-down">
                    <Box>
                      <Image src={skill.icon} />
                    </Box>
                    <Text>{skill.title}</Text>
                  </Box>
                ))}
            </Box>
          </Flex>
          <Flex>
            <Heading size="lg">
              Platforms <span className="themeText">& Tools</span>
            </Heading>
            <Box>
              {skills
                .filter((el) => el.tag === "platform")
                .map((skill) => (
                  <Box key={skill.id} className="skill" data-aos="zoom-in">
                    <Box>
                      <Image src={skill.icon} />
                    </Box>
                    <Text>{skill.title}</Text>
                  </Box>
                ))}
            </Box>
          </Flex>
        </Flex>
      </Box>

      <hr></hr>

      {/* show projects */}
      <Box id="projects">
        <Heading textAlign="center">
          {" "}
          <span className="themeText">Projects</span>
        </Heading>
        <Slider {...settings}>
          {projects.map((project, i) => (
            <ProjectCard key={PromiseRejectionEvent.id} {...project} />
          ))}
        </Slider>
      </Box>

      <hr></hr>

      {/* Github Statistics */}
      <Box id="githubStats">
        <Heading textAlign="center">
          Github <span className="themeText">stats</span>
        </Heading>
        <Center className="github-stats">
          <Image
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Akkukumari&layout=compact&hide_border=true&theme=radical"
            alt="Most used languages"
          />
          <Image
            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Akkukumari&theme=radical"
            alt="Github profile summary"
          />
        </Center>

        <Center className="github-stats">
          <Image
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=Akkukumari&show_icons=true&locale=en&layout=compact&hide_border=true&theme=radical"
            alt="Github stats"
          />
          <Image
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Akkukumari&layout=compact&hide_border=true&theme=radical"
            alt="Current Streaks"
          />
        </Center>

        <Center>
          <GitHubCalendar
            username="Akkukumari"
            color="#4a8af4"
            children={<ReactTooltip html />}
          />
        </Center>
      </Box>

      <hr></hr>

      {/* Contact me */}
      <Box id="contact">
        <Heading textAlign="center">
          Contact <span className="themeText">Me</span>
        </Heading>
        <Flex
          flexDirection={["column", "column", "column", "row"]}
          alignItems="center"
        >
          {/* <Box>
                        <Svg2 />
                    </Box> */}

          <Box className="form-section">
            <form ref={form} onSubmit={sendEmail}>
              <div className="inputBox">
                <input type="text" name="from_name" required />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="email" name="user_email" required />
                <span>Email</span>
              </div>
              <div>
                <textarea placeholder="Message 📧" name="message" />
              </div>
              <input type="submit" value="Send Message" />
            </form>
            <Flex className="contact-info">
              <HStack>
                <SiGmail color="#e34133" />
                <Text id="contact-email">akanksha28sbg@gmail.com</Text>
              </HStack>
              <HStack>
                <FaPhoneAlt color="#00a14f" />
                <Text id="contact-phone">+91 6203190814</Text>
              </HStack>
            </Flex>
            <Flex gap={["10px", "20px", "20px", "40px"]}>
              <Link href="https://wa.me/916203190814" target="_blank">
                <Tooltip label="+91 6203190814">
                  <Box className="social-icons">
                    <Box>
                      <Image
                        w="100%"
                        src="https://brandlogos.net/wp-content/uploads/2018/10/whatsapp-logo.png"
                      />
                    </Box>
                  </Box>
                </Tooltip>
              </Link>

              <Link
                id="contact-linkedin"
                href="https://www.linkedin.com/in/akanksha-kumari-274698265/"
                target="_blank"
              >
                <Tooltip label="Akanksha Kumari">
                  <Box className="social-icons">
                    <Box>
                      <Image
                        w="100%"
                        src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png"
                      />
                    </Box>
                  </Box>
                </Tooltip>
              </Link>

              <Link
                id="contact-github"
                href="https://github.com/Akkukumari"
                target="_blank"
              >
                <Tooltip label=" u8250">
                  <Box className="social-icons">
                    <Box>
                      <Image
                        w="100%"
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      />
                    </Box>
                  </Box>
                </Tooltip>
              </Link>

              <Link href="mailto:akanksha28sbg@gmail.com" target="_blank">
                <Tooltip label="akanksha28sbg@gmail.com">
                  <Box className="social-icons">
                    <Box>
                      <Image
                        w="100%"
                        src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png"
                      />
                    </Box>
                  </Box>
                </Tooltip>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* <hr></hr> */}

      {/* footer */}
      <Flex id="footer">
        <Text className="end">
          © Portfolio by Akanksha Kumari| All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Home;
