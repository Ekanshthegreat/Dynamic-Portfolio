import { React } from "react";
import { Typography, Container, Grid, styled } from "@mui/material";
import {
  StyledDivider,
  StyledGenericContainer,
  StyledGenericRoot,
  StyledGenericSubText,
  StyledGenericTitle,
} from "./Styles";
import "animate.css";
import { useInView, InView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import projects from "../../content/projects.json";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

//Component styles//
const StyledProjectsContainer = styled(Container)(({ theme }) => ({
  marginTop: "3rem",
  display: "flex",
  flexDirection: "column",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",
  textAlign: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    width: "85% !important",
  },
  [theme.breakpoints.down("xs")]: {
    width: "90% !important",
  },
}));
const StyledProjectsGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "space-around",
  width: "100%",
  marginLeft: "0 !important",
  marginTop: "0 !important",
  padding: "1rem",
}));
const StyledProjectsGridItem = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "inView",
})(({ theme }) => ({
  position: "relative",
  display: "flex",
  height: "280px",
  marginBottom: "2.5rem",
  borderRadius: "1rem",
  border: `0.25rem solid ${theme.palette.backgroundSecondary.main}70`,
  backgroundColor: "#0B132B",
  paddingTop: "0 !important",
  paddingLeft: "0 !important",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "linear-gradient(transparent,rgba(11,19,43,0.88))",
    pointerEvents: "none",
  },
  alignItems: "flex-end",
  transform: "none",
  transition: "transform 150ms ease-in-out 0s",
  "&:hover": {
    transform: "scale(1.02)",
    transition: "transform 150ms ease-in-out 0s",
    [theme.breakpoints.up("md")]: {
      "& div": {
        opacity: "1",
        transform: "translateY(-10%)",
        transition:
          "opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s",
      },
    },
    "&::after": {
      opacity: "1 !important",
      content: "''",
      position: "absolute",
      inset: "0px",

      background:
        "linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 70%)",
    },
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "500px",
    "&::after": {
      opacity: "1 !important",
      content: "''",
      position: "absolute",
      inset: "0px",

      background:
        "linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 70%)",
    },
    "& div": {
      opacity: "1",
    },
  },
  [theme.breakpoints.down("sm")]: {
    height: "260px !important",
  },
}));
const StyledProjectsImg = styled("img")(({ theme }) => ({
  transform: "scale(1.01)",
  height: "100%",
  width: "100%",
  position: "absolute",
  objectFit: "cover",
}));
const StyledProjectsTextField = styled("div")(({ theme }) => ({
  zIndex: "1000 !important",
  transition: "opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s",
  transform: "none",
  opacity: "1",
  padding: "0rem 1rem",
  color: "white",
  textAlign: "left",
  [theme.breakpoints.down("lg")]: {
    transform: "none",
    padding: "1rem 1rem",
  },
}));
const StyledProjectsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem !important",
  fontWeight: "600",
}));
const StyledProjectsSubText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem !important",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem !important",
  },
}));
const StyledProjectsSkillContainer = styled("div")(({ theme }) => ({
  marginTop: "0.5rem",
  display: "flex",
  flexWrap: "wrap",
  rowGap: "0.4rem",
}));
const StyledProjectsSkillText = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem !important",
  background: "white",
  marginRight: "0.5rem",
  padding: "0.1rem 0.4rem",
  borderRadius: "0.5rem",
  color: "black",
  fontWeight: "600",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7rem !important",
  },
}));
const StyledProjectsGHLink = styled("a")({
  color: "inherit",
  "& svg": {
    padding: "0",
    minWidth: "0",
    marginTop: "0.43rem",
    transform: "scale(0.90)",
    transition: "transform 200ms",
  },
  "&:hover": {
    "& svg": {
      transform: "scale(1.15)",
    },
  },
});

//End component styles

const Projects = () => {
  //triggers for animations
  const [projectsContainer, projectsContainerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Scroll.Element name="Projects" id="Projects">
      <StyledGenericRoot ref={projectsContainer}>
        <StyledGenericContainer
          sx={
            projectsContainerInView
              ? { visibility: "visible" }
              : { visibility: "visible" }
          }
          className={
            projectsContainerInView ? "animate__animated animate__fadeInUp" : ""
          }
        >
          <StyledGenericTitle component="h2">
            Projects
            <StyledDivider />
          </StyledGenericTitle>
          <StyledGenericSubText component="p">
            Current systems projects and earlier applications I’ve built.
          </StyledGenericSubText>
        </StyledGenericContainer>
        <StyledProjectsContainer>
          <StyledProjectsGrid container rowSpacing={6} columnSpacing={12}>
            {projects.map((project) => (
              <InView key={project.id} threshold={0.1} triggerOnce={true}>
                {({ ref, inView }) => (
                  <StyledProjectsGridItem
                    item
                    xs={12}
                    sm={5.5}
                    ref={ref}
                    inView={inView}
                    sx={
                      inView
                        ? {
                            visibility: "visible",
                            animation: "fadeInUp",
                            animationDuration: "1s",
                          }
                        : { visibility: "visible" }
                    }
                  >
                    {project.image && (
                      <StyledProjectsImg
                        alt={`Image of ${project.title}`}
                        src={project.image}
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <StyledProjectsTextField>
                      <StyledProjectsTitle component="h3">
                        {project.title}
                      </StyledProjectsTitle>
                      <StyledProjectsSubText>
                        {project.description}
                      </StyledProjectsSubText>
                      <StyledProjectsSkillContainer>
                        {project.skills.map((skill, index) => (
                          <StyledProjectsSkillText key={index}>
                            {skill}
                          </StyledProjectsSkillText>
                        ))}
                      </StyledProjectsSkillContainer>

                      {project.detailLink && (
                        <StyledProjectsGHLink
                          href={project.detailLink}
                          aria-label={`Read about ${project.title}`}
                          sx={{
                            right: project.githubLink ? "3rem" : "1rem",
                            bottom: "1rem",
                          }}
                        >
                          <LaunchIcon />
                        </StyledProjectsGHLink>
                      )}
                      {project.status && (
                        <Typography
                          sx={{ color: "white", fontSize: "0.75rem", mt: 1 }}
                        >
                          {project.status}
                        </Typography>
                      )}
                      {project.githubLink && (
                        <StyledProjectsGHLink
                          href={project.githubLink}
                          aria-label={`${project.title} source on GitHub`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <GitHubIcon />
                        </StyledProjectsGHLink>
                      )}
                    </StyledProjectsTextField>
                  </StyledProjectsGridItem>
                )}
              </InView>
            ))}
          </StyledProjectsGrid>
        </StyledProjectsContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  );
};

export default Projects;
