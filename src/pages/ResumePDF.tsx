import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

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

  const coursework = [
    "Data Structures and Algorithms",
    "Database Principles",
    "Guided Design in Software Engineering",
    "Mobile Applications & Design",
    "Operating Systems",
  ];

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>David Joshua Reyes</Text>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Software Engineer</Text>
            <Text style={styles.location}>•</Text>
            <Text style={styles.location}>New York City Metropolitan Area</Text>
          </View>
          <View style={styles.contactRow}>
            <Text style={styles.contactText}>davidjoshuareyes@gmail.com</Text>
            <Text style={[styles.contactText, styles.contactSeparator]}>•</Text>
            <Link
              src="https://linkedin.com/in/david-joshua-reyes-7aa50ab3"
              style={styles.contactLink}
            >
              LinkedIn
            </Link>
            <Text style={[styles.contactText, styles.contactSeparator]}>•</Text>
            <Link
              src="https://github.com/dajomareyes"
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

          {/* Vestwell */}
          <View>
            <Text style={styles.jobTitle}>Vestwell</Text>
            <Text style={styles.companyInfo}>
              Software Engineer | New York, NY
            </Text>
            <Text style={styles.dateInfo}>[Start Date] - Present</Text>
            <View style={styles.bulletList}>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  [Responsibility/achievement - to be filled]
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  [Responsibility/achievement - to be filled]
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  [Responsibility/achievement - to be filled]
                </Text>
              </View>
            </View>
          </View>

          {/* Previous Position Placeholder */}
          <View>
            <Text style={styles.jobTitle}>[Previous Company Name]</Text>
            <Text style={styles.companyInfo}>[Job Title] | [Location]</Text>
            <Text style={styles.dateInfo}>[Start Date] - [End Date]</Text>
            <View style={styles.bulletList}>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  [Responsibility/achievement - to be filled]
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>
                  [Responsibility/achievement - to be filled]
                </Text>
              </View>
            </View>
          </View>

          {/* Education Section */}
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          <View>
            <Text style={styles.jobTitle}>
              New Jersey Institute of Technology (NJIT)
            </Text>
            <Text style={styles.companyInfo}>
              Bachelor of Science in Computer Science
            </Text>
            <Text style={styles.dateInfo}>2013 - 2017</Text>
            <Text style={styles.courseworkLabel}>Relevant Coursework:</Text>
            <View style={styles.courseworkContainer}>
              {coursework.map((course) => (
                <Text key={course} style={styles.courseworkItem}>
                  • {course}
                </Text>
              ))}
            </View>
          </View>

          {/* Skills Section */}
          <Text style={styles.sectionTitle}>SKILLS</Text>
          <View style={styles.skillsContainer}>
            {skills.map((skill) => (
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
