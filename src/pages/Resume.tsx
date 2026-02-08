import { Button, Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./ResumePDF";

const StyledContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  width: "100vw",
  padding: "2rem",
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

const ResumePaper = styled(Paper)(() => ({
  maxWidth: "850px",
  width: "100%",
  padding: 0,
  overflow: "hidden",
  "@media print": {
    maxWidth: "100%",
    width: "100%",
    padding: "0.5in",
    boxShadow: "none",
    margin: 0,
    backgroundColor: "white",
  },
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: "white",
  padding: "3rem",
  "@media print": {
    background: theme.palette.primary.main,
    padding: "1.5rem",
  },
}));

const ContentSection = styled(Box)(() => ({
  padding: "3rem",
  "@media print": {
    padding: 0,
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
      <ResumePaper elevation={3}>
        {/* Download Button - Hidden in Print */}
        <Box
          className="no-print"
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            zIndex: 10,
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

        {/* Header Section */}
        <HeaderSection>
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{
              mb: 0,
              lineHeight: 1.1,
              "@media print": {
                fontSize: "1.75rem",
                mb: 0,
              },
            }}
          >
            David Joshua Reyes
          </Typography>
          <Box sx={{ mb: 0.25, opacity: 0.95, lineHeight: 1.2 }}>
            <Typography
              component="span"
              variant="h5"
              sx={{
                "@media print": {
                  fontSize: "1.1rem",
                },
              }}
            >
              Software Engineer
            </Typography>
            <Typography component="span" variant="h5" sx={{ mx: 1 }}>
              •
            </Typography>
            <Typography
              component="span"
              variant="body1"
              sx={{
                "@media print": {
                  fontSize: "0.9rem",
                },
              }}
            >
              New York City Metropolitan Area
            </Typography>
          </Box>

          {/* Contact in Header */}
          <Box sx={{ opacity: 0.95, fontSize: "0.95rem" }}>
            <Typography component="span" sx={{ color: "white" }}>
              davidjoshuareyes@gmail.com
            </Typography>
            <Typography component="span" sx={{ mx: 1.5, color: "white" }}>
              •
            </Typography>
            <Typography component="span">
              <a
                href="https://linkedin.com/in/david-joshua-reyes-7aa50ab3"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "none" }}
              >
                LinkedIn
              </a>
            </Typography>
            <Typography component="span" sx={{ mx: 1.5, color: "white" }}>
              •
            </Typography>
            <Typography component="span">
              <a
                href="https://github.com/dajomareyes"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "none" }}
              >
                GitHub
              </a>
            </Typography>
          </Box>
        </HeaderSection>

        {/* Content Section */}
        <ContentSection>
          {/* Experience */}
          <SectionTitle>EXPERIENCE</SectionTitle>

          {/* Vestwell */}
          <Box sx={{ mt: 2, mb: 3 }}>
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
          </Box>

          {/* Previous Position Placeholder */}
          <Box sx={{ mt: 2, mb: 3 }}>
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
          </Box>

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

          {/* Skills */}
          <SectionTitle>SKILLS</SectionTitle>
          <Box sx={{ mt: 2 }}>
            <Grid container spacing={1}>
              {skills.map((skill) => (
                <Grid key={skill}>
                  <Chip
                    label={skill}
                    color="primary"
                    size="small"
                    sx={{
                      fontWeight: 500,
                      "@media print": {
                        border: "1px solid #1976d2",
                        color: "#1976d2",
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </ContentSection>

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
      </ResumePaper>
    </StyledContainer>
  );
};

export default Resume;
