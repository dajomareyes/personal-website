export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  location: string;
  avatarPath: string;
  contactInfo: ContactInfo;
}

export interface Stats {
  yearsOfExperience: string;
  contributions: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  startYear: number;
  endYear: number;
  coursework: string[];
}

export interface ResumeData {
  personal: PersonalInfo;
  stats: Stats;
  skills: string[];
  experience: WorkExperience[];
  education: Education;
}
