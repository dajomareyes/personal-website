# Resume Data

This directory contains the resume data in JSON format, making it easy to update your resume without editing React components.

## How to Update Your Resume

Simply edit the `resume-data.json` file to update your resume. The changes will automatically be reflected in both the web version and PDF export.

### File Structure

```json
{
  "personal": {
    "firstName": "Your first name",
    "lastName": "Your last name",
    "fullName": "Your full name",
    "title": "Your job title",
    "location": "Your location",
    "avatarPath": "Path to your avatar image (relative to src)",
    "contactInfo": {
      "email": "your.email@example.com",
      "linkedin": "https://linkedin.com/in/your-profile",
      "github": "https://github.com/yourusername"
    }
  },
  "stats": {
    "yearsOfExperience": "5+",
    "contributions": "500+"
  },
  "skills": [
    "Skill 1",
    "Skill 2",
    ...
  ],
  "experience": [
    {
      "company": "Company Name",
      "position": "Job Title",
      "location": "City, State",
      "startDate": "Month Year",
      "endDate": "Month Year or Present",
      "responsibilities": [
        "Responsibility 1",
        "Responsibility 2",
        ...
      ]
    }
  ],
  "education": {
    "institution": "University Name",
    "degree": "Degree Name",
    "startYear": 2013,
    "endYear": 2017,
    "coursework": [
      "Course 1",
      "Course 2",
      ...
    ]
  }
}
```

### Tips

- Keep responsibilities concise and focused on achievements
- Use action verbs to start each responsibility (e.g., "Developed", "Implemented", "Led")
- The `yearsOfExperience` field supports suffixes like "+" (e.g., "5+")
- Skills are displayed as chips in the web version and the PDF
- Work experience is displayed in chronological order (most recent first)
- The GitHub stats (repositories, PRs merged) are fetched dynamically from the GitHub API

### Example

To add a new job:

```json
{
  "company": "Acme Corp",
  "position": "Senior Software Engineer",
  "location": "San Francisco, CA",
  "startDate": "January 2020",
  "endDate": "Present",
  "responsibilities": [
    "Led a team of 5 engineers to build a new microservices architecture",
    "Reduced API response time by 40% through optimization",
    "Implemented CI/CD pipeline using GitHub Actions"
  ]
}
```

Add this object to the `experience` array in `resume-data.json`.
