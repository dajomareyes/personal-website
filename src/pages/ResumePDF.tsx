import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { ResumeData } from "../types/resume";
import resumeData from "../data/resume-data.json";

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 0,
    fontSize: 11,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#047E82",
    color: "#ffffff",
    padding: 30,
    paddingBottom: 25,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 2,
    fontFamily: "Helvetica-Bold",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
  },
  location: {
    fontSize: 13,
    marginLeft: 8,
    marginRight: 8,
  },
  contactRow: {
    flexDirection: "row",
    fontSize: 11,
    flexWrap: "wrap",
  },
  contactText: {
    color: "#ffffff",
  },
  contactLink: {
    color: "#ffffff",
    textDecoration: "none",
  },
  contactSeparator: {
    marginLeft: 8,
    marginRight: 8,
  },
  content: {
    padding: 30,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
    color: "#047E82",
    marginTop: 16,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: "2px solid #047E82",
  },
  sectionTitleFirst: {
    marginTop: 0,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
    marginTop: 10,
    marginBottom: 2,
  },
  companyInfo: {
    fontSize: 10,
    color: "#666666",
    marginBottom: 2,
  },
  dateInfo: {
    fontSize: 10,
    color: "#666666",
    fontStyle: "italic",
    marginBottom: 6,
  },
  bulletList: {
    marginLeft: 15,
    marginTop: 4,
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 3,
  },
  bullet: {
    width: 15,
    fontSize: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.5,
  },
  courseworkLabel: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
    marginTop: 4,
  },
  courseworkContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  courseworkItem: {
    width: "50%",
    fontSize: 10,
    marginBottom: 3,
    paddingLeft: 8,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  skillChip: {
    backgroundColor: "#047E82",
    color: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    marginRight: 6,
    marginBottom: 6,
  },
});

const ResumePDF = () => {
  // Cast the imported JSON to the ResumeData type
  const data: ResumeData = resumeData as ResumeData;

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.personal.fullName}</Text>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{data.personal.title}</Text>
            <Text style={styles.location}>•</Text>
            <Text style={styles.location}>{data.personal.location}</Text>
          </View>
          <View style={styles.contactRow}>
            <Text style={styles.contactText}>
              {data.personal.contactInfo.email}
            </Text>
            <Text style={[styles.contactText, styles.contactSeparator]}>•</Text>
            <Link
              src={data.personal.contactInfo.linkedin}
              style={styles.contactLink}
            >
              LinkedIn
            </Link>
            <Text style={[styles.contactText, styles.contactSeparator]}>•</Text>
            <Link
              src={data.personal.contactInfo.github}
              style={styles.contactLink}
            >
              GitHub
            </Link>
          </View>
        </View>

        {/* Content Section */}
        <View style={styles.content}>
          {/* Experience Section */}
          <Text style={[styles.sectionTitle, styles.sectionTitleFirst]}>
            EXPERIENCE
          </Text>

          {data.experience.map((job, index) => (
            <View key={index}>
              <Text style={styles.jobTitle}>{job.company}</Text>
              <Text style={styles.companyInfo}>
                {job.position} | {job.location}
              </Text>
              <Text style={styles.dateInfo}>
                {job.startDate} - {job.endDate}
              </Text>
              <View style={styles.bulletList}>
                {job.responsibilities.map((responsibility, respIndex) => (
                  <View key={respIndex} style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>{responsibility}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

          {/* Education Section */}
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          <View>
            <Text style={styles.jobTitle}>{data.education.institution}</Text>
            <Text style={styles.companyInfo}>{data.education.degree}</Text>
            <Text style={styles.dateInfo}>
              {data.education.startYear} - {data.education.endYear}
            </Text>
            <Text style={styles.courseworkLabel}>Relevant Coursework:</Text>
            <View style={styles.courseworkContainer}>
              {data.education.coursework.map((course) => (
                <Text key={course} style={styles.courseworkItem}>
                  • {course}
                </Text>
              ))}
            </View>
          </View>

          {/* Skills Section */}
          <Text style={styles.sectionTitle}>SKILLS</Text>
          <View style={styles.skillsContainer}>
            {data.skills.map((skill) => (
              <Text key={skill} style={styles.skillChip}>
                {skill}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
