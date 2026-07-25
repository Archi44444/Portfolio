import stackpilotImg from '../assets/stackpilot.png'
import mailmuseImg from '../assets/mailmuse.png'
import mindsaathiImg from '../assets/mindsaathi.jpg'
import kavachImg from '../assets/kavach.png'
import admindashboardImg from '../assets/admindashboard.png'

export const profile = {
  name: 'Archita Mitra',
  roles: ['Software Engineer', 'AI Developer', 'Frontend Engineer'],
  location: 'Barrackpore, West Bengal, India',
  email: 'archita13mitra@gmail.com',
  github: 'https://github.com/Archi44444',
  linkedin: 'https://www.linkedin.com/in/archita-m-06296a330',
  resumeUrl: 'https://drive.google.com/file/d/1QiFPzDmaIoKgCzqReLgHQ0--GCt7iHoC/view',
}

export const stats = [
  { label: 'Projects Shipped', value: 5, suffix: '+' },
  { label: 'Hackathons', value: 4, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'Years Learning', value: 2, suffix: '+' },
]

export const projects = [
  {
    index: '01',
    title: 'MailMuse',
    subtitle: 'AI-Powered Recruiter Outreach Platform',
    description:
      'A full-stack outreach platform that turns a job description and a profile into personalised cold emails, LinkedIn messages and follow-up sequences. Gemini handles the generation; a FastAPI backend handles auth, prompt orchestration and history.',
    stack: ['React.js', 'FastAPI', 'Firebase', 'Gemini API', 'Tailwind CSS'],
    github: 'https://github.com/Archi44444/MailMuse',
    live: null,
    year: '2026',
    screenshot: mailmuseImg,
    accentColor: '#660033',
  },
  {
    index: '02',
    title: 'StackPilot',
    subtitle: 'AI Developer Assistant — RAG',
    description:
      'A developer assistant that runs semantic search across GitHub repositories, docs, PDFs and markdown using retrieval-augmented generation. Combines the GitHub API, Jina AI Reader and a ChromaDB vector store to return source-cited answers.',
    stack: ['React.js', 'ChromaDB', 'Gemini API', 'OpenRouter', 'Firebase'],
    github: 'https://github.com/Archi44444/StackPilot',
    live: null,
    year: '2026',
    screenshot: stackpilotImg,
    accentColor: '#E673AC',
  },
  {
    index: '03',
    title: 'MindSaathi',
    subtitle: 'AI Cognitive Screening Platform',
    description:
      'Frontend for a B2B2C digital health platform aiding early detection of neurodegenerative disorders. Interactive assessment games evaluate memory, attention and problem-solving through an engaging, clinically-informed UX.',
    stack: ['React.js', 'JavaScript', 'Node.js'],
    github: 'https://github.com/unnkarm/MindSaathi',
    live: null,
    year: '2026',
    screenshot: mindsaathiImg,
    accentColor: '#660033',
  },
  {
    index: '04',
    title: 'Admin Dashboard',
    subtitle: 'DisasterOps Crisis Command Center',
    description:
      'A robust crisis management admin dashboard enabling real-time coordination, SOS tracking, volunteer management, and inventory control. Features a live Mapbox map, analytics, and role-based access for the CommitCrewz crisis response platform.',
    stack: ['React.js', 'Firebase', 'Mapbox', 'Tailwind CSS', 'Node.js'],
    github: 'https://github.com/CommitCrewz/Admin-Dashboard',
    live: 'https://crisis-app-2612.web.app/login',
    year: '2026',
    screenshot: admindashboardImg,
    accentColor: '#00520A',
  },
  {
    index: '05',
    title: 'Kavach',
    subtitle: 'Disaster Risk Intelligence Platform',
    description:
      'A real-time disaster risk intelligence platform with interactive risk mapping, live weather conditions, location-based risk scoring, and safe zone & evacuation route guidance. Built to help communities stay informed and prepared.',
    stack: ['React.js', 'Firebase', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/Archi44444/Kavach',
    live: 'https://kavach-ffc75.web.app',
    year: '2026',
    screenshot: kavachImg,
    accentColor: '#469110',
  },
  
  
  
]

export const experience = [
  {
    title: 'Public Relations & Marketing — Google Developer Groups',
    org: 'GDG On-Campus, Techno Main Salt Lake',
    period: '2025 — Present',
    description:
      'Member of the on-campus GDG chapter, working on community outreach and event marketing alongside coursework in Computer Science & Engineering.',
  },
  {
    title: 'Open Source Mentor',
    org: 'Apertre 3.0 & Social Winter of Code (SWoC 2026)',
    period: 'Jan — Mar 2026',
    description:
      'Mentored 10+ contributors across two open-source programs, running code reviews and validating pull requests to enforce quality standards.',
  },
  
  {
    title: 'B.Tech, Computer Science & Engineering',
    org: 'Techno Main Salt Lake',
    period: 'Aug 2024 — June 2028',
    description: 'Currently pursuing — SGPA 8.68 (3rd Semester).',
  },
]

export const skills = {
  Frontend: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
  Backend: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  Languages: ['JavaScript (ES6+)', 'Python', 'Java', 'SQL', 'C', 'C++'],
  'AI / ML': ['RAG', 'Vector Embeddings', 'Prompt Engineering', 'Scikit-learn','NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
  Cloud: ['Firebase', 'Cloud Firestore', 'Vercel', 'Render'],
  Tools: ['Git', 'GitHub', 'ChromaDB', 'VS Code'],
}

export const achievements = [
  {
    title: 'Best All-Girls Team',
    org: 'DIVERSION 2K26',
    description: 'Recognised for delivering the MindSaathi cognitive screening platform.',
    category: 'Hackathons',
  },
  {
    title: 'Super Contributor',
    org: 'Hacktoberfest 2025',
    description: 'Successfully submitted and merged 6+ open-source pull requests.',
    category: 'Open Source',
  },
  {
    title: 'Top 10 Contributor',
    org: 'Open Odyssey 2.0',
    description: 'Merged multiple feature-enhancement and bug-fix pull requests.',
    category: 'Open Source',
  },
  {
    title: 'Open Source Mentor',
    org: 'Apertre 3.0 & SWoC 2026',
    description: 'Mentored 10+ contributors, conducting code reviews across two programs.',
    category: 'Leadership',
  },
  {
    title: '1st Runner-up',
    org: 'Prompt Mastery',
    description: 'Secured 2nd position crafting a prompt engineered to make an AI answer incorrectly.',
    category: 'Hackathons',
  },
]
