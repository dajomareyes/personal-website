import {
  Button,
  Box,
  Chip,
  Paper,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./ResumePDF";
import avatarImage from "../assets/avatar-david.jpeg";

const StyledContainer = styled("div")(() => ({
  minHeight: "100vh",
  width: "100vw",
  backgroundColor: "#f5f5f5",
  "@media print": {
    display: "block",
    padding: 0,
    margin: 0,
    width: "100%",
    minHeight: "auto",
    backgroundColor: "transparent",
  },
}));

const FullWidthLayout = styled(Box)(() => ({
  display: "flex",
  minHeight: "100vh",
  "@media print": {
    display: "block",
  },
  "@media (max-width: 900px)": {
    flexDirection: "column",
  },
}));

// Remove old ResumePaper - no longer needed for full width
const Sidebar = styled(Box)(({ theme }) => ({
  width: "350px",
  minWidth: "350px",
  background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: "white",
  padding: "3rem 2rem",
  position: "sticky",
  top: 0,
  height: "100vh",
  overflowY: "auto",
  "@media print": {
    position: "static",
    width: "100%",
    height: "auto",
    padding: "1.5rem",
  },
  "@media (max-width: 900px)": {
    width: "100%",
    minWidth: "unset",
    position: "static",
    height: "auto",
  },
}));

const MainContent = styled(Box)(() => ({
  flex: 1,
  padding: "3rem",
  backgroundColor: "#ffffff",
  overflowY: "auto",
  "@media print": {
    padding: 0,
  },
  "@media (max-width: 900px)": {
    padding: "2rem",
  },
}));

// Remove old HeaderSection - header content now in sidebar
const SidebarSection = styled(Box)(() => ({
  marginBottom: "2.5rem",
  "&:last-child": {
    marginBottom: 0,
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.25rem",
  marginTop: "2rem",
  marginBottom: "1rem",
  color: theme.palette.primary.main,
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  paddingBottom: "0.5rem",
  display: "inline-block",
  "&:first-of-type": {
    marginTop: 0,
  },
  "@media print": {
    marginTop: "1rem",
    marginBottom: "0.75rem",
    fontSize: "1.1rem",
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
}));

const JobTitle = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: "1.1rem",
  marginBottom: "0.25rem",
}));

const CompanyInfo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.95rem",
  marginBottom: "0.5rem",
}));

// Timeline styles for web version
const TimelineContainer = styled(Box)(() => ({
  position: "relative",
  marginTop: "2rem",
  paddingLeft: "2.5rem",
  "@media print": {
    paddingLeft: 0,
  },
}));

const TimelineItem = styled(Box)(() => ({
  position: "relative",
  marginBottom: "3rem",
  "&:last-child": {
    marginBottom: 0,
  },
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "-2.5rem",
  top: "0.25rem",
  width: "1rem",
  height: "1rem",
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  border: `3px solid ${theme.palette.primary.light || theme.palette.primary.main}`,
  boxShadow: `0 0 0 4px ${theme.palette.background.paper}`,
  zIndex: 2,
  "@media print": {
    display: "none",
  },
}));

const TimelineLine = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "-2rem",
  top: "1.5rem",
  bottom: "-2rem",
  width: "2px",
  backgroundColor: theme.palette.primary.light || theme.palette.primary.main,
  opacity: 0.3,
  "@media print": {
    display: "none",
  },
}));

const TimelineCard = styled(Paper)(({ theme }) => ({
  padding: "1.5rem",
  backgroundColor: "#ffffff",
  borderLeft: `4px solid ${theme.palette.primary.main}`,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateX(8px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    borderLeftWidth: "6px",
  },
  "@media print": {
    padding: 0,
    border: "none",
    boxShadow: "none",
    "&:hover": {
      transform: "none",
    },
  },
}));

const Resume = () => {
  const skills = [
    "TypeScript",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "Git",
    "Docker",
    "AWS",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
  ];

  return (
    <StyledContainer>
      <FullWidthLayout>
        {/* Download Button - Fixed Position */}
        <Box
          className="no-print"
          sx={{
            position: "fixed",
            top: "2rem",
            right: "2rem",
            zIndex: 1000,
          }}
        >
          <PDFDownloadLink
            document={<ResumePDF />}
            fileName="David_Reyes_Resume.pdf"
            style={{ textDecoration: "none" }}
          >
            {({ loading }) => (
              <Button
                variant="contained"
                color="secondary"
                disabled={loading}
                sx={{
                  boxShadow: 3,
                }}
              >
                {loading ? "Generating PDF..." : "Download PDF"}
              </Button>
            )}
          </PDFDownloadLink>
        </Box>

        {/* Sidebar */}
        <Sidebar>
          {/* Header Info */}
          <SidebarSection>
            {/* Avatar */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <Avatar
                src={avatarImage}
                alt="David Joshua Reyes"
                sx={{
                  width: 150,
                  height: 150,
                  border: "4px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                }}
              />
            </Box>

            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                mb: 1,
                lineHeight: 1.1,
                textAlign: "center",
              }}
            >
              David Reyes
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 0.5,
                opacity: 0.95,
                textAlign: "center",
              }}
            >
              Software Engineer
            </Typography>
            <Typography
              variant="body1"
              sx={{
                opacity: 0.9,
                textAlign: "center",
              }}
            >
              New York City Metropolitan Area
            </Typography>
          </SidebarSection>

          {/* Contact */}
          <SidebarSection>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 2, opacity: 0.95 }}
            >
              CONTACT
            </Typography>
            <Stack spacing={1.5}>
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
                  Email
                </Typography>
                <Typography variant="body2">
                  davidjoshuareyes@gmail.com
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
                  LinkedIn
                </Typography>
                <Typography variant="body2">
                  <a
                    href="https://linkedin.com/in/david-joshua-reyes-7aa50ab3"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", textDecoration: "underline" }}
                  >
                    View Profile
                  </a>
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
                  GitHub
                </Typography>
                <Typography variant="body2">
                  <a
                    href="https://github.com/dajomareyes"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white", textDecoration: "underline" }}
                  >
                    dajomareyes
                  </a>
                </Typography>
              </Box>
            </Stack>
          </SidebarSection>

          {/* Skills */}
          <SidebarSection>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 2, opacity: 0.95 }}
            >
              SKILLS
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    fontWeight: 500,
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      transform: "translateY(-2px)",
                    },
                  }}
                />
              ))}
            </Box>
          </SidebarSection>
        </Sidebar>

        {/* Main Content */}
        <MainContent>
          {/* Experience */}
          <SectionTitle>EXPERIENCE</SectionTitle>

          <TimelineContainer>
            {/* Vestwell */}
            <TimelineItem>
              <TimelineDot />
              <TimelineLine />
              <TimelineCard elevation={1}>
                <JobTitle>Vestwell</JobTitle>
                <CompanyInfo>Software Engineer | New York, NY</CompanyInfo>
                <CompanyInfo sx={{ fontStyle: "italic", mb: 1 }}>
                  [Start Date] - Present
                </CompanyInfo>
                <Stack component="ul" spacing={0.5} sx={{ pl: 2.5, mt: 1 }}>
                  <Typography
                    component="li"
                    variant="body2"
                    sx={{ lineHeight: 1.6 }}
                  >
                    [Responsibility/achievement - to be filled]
                  </Typography>
                  <Typography
                    component="li"
                    variant="body2"
                    sx={{ lineHeight: 1.6 }}
                  >
                    [Responsibility/achievement - to be filled]
                  </Typography>
                  <Typography
                    component="li"
                    variant="body2"
                    sx={{ lineHeight: 1.6 }}
                  >
                    [Responsibility/achievement - to be filled]
                  </Typography>
                </Stack>
              </TimelineCard>
            </TimelineItem>

            {/* Previous Position Placeholder */}
            <TimelineItem>
              <TimelineDot />
              <TimelineCard elevation={1}>
                <JobTitle>[Previous Company Name]</JobTitle>
                <CompanyInfo>[Job Title] | [Location]</CompanyInfo>
                <CompanyInfo sx={{ fontStyle: "italic", mb: 1 }}>
                  [Start Date] - [End Date]
                </CompanyInfo>
                <Stack component="ul" spacing={0.5} sx={{ pl: 2.5, mt: 1 }}>
                  <Typography
                    component="li"
                    variant="body2"
                    sx={{ lineHeight: 1.6 }}
                  >
                    [Responsibility/achievement - to be filled]
                  </Typography>
                  <Typography
                    component="li"
                    variant="body2"
                    sx={{ lineHeight: 1.6 }}
                  >
                    [Responsibility/achievement - to be filled]
                  </Typography>
                </Stack>
              </TimelineCard>
            </TimelineItem>
          </TimelineContainer>

          {/* Education */}
          <SectionTitle>EDUCATION</SectionTitle>
          <Box sx={{ mt: 2 }}>
            <JobTitle>New Jersey Institute of Technology (NJIT)</JobTitle>
            <CompanyInfo>Bachelor of Science in Computer Science</CompanyInfo>
            <CompanyInfo sx={{ fontStyle: "italic", mb: 2 }}>
              2013 - 2017
            </CompanyInfo>
            <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
              Relevant Coursework:
            </Typography>
            <Grid container spacing={1}>
              {[
                "Data Structures and Algorithms",
                "Database Principles",
                "Guided Design in Software Engineering",
                "Mobile Applications & Design",
                "Operating Systems",
              ].map((course) => (
                <Grid key={course} xs={12} sm={6}>
                  <Typography variant="body2" sx={{ pl: 1 }}>
                    • {course}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </MainContent>
      </FullWidthLayout>

      {/* Print-specific styles */}
      <style>{`
        @media print {
          @page {
            size: letter;
            margin: 0.5in;
          }
          
          html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          body {
            background: white !important;
          }
          
          .no-print {
            display: none !important;
          }
          
          h1, h2, h3, h4, h5, h6 {
            page-break-after: avoid;
            break-after: avoid;
          }
          
          ul, ol {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}</style>
    </StyledContainer>
  );
};

export default Resume;
