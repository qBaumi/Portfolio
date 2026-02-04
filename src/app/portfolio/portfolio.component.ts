import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface WorkExperience {
  expanded: boolean;
description: string[];
  company: string;
  role: string;
  period: string;
  logo: string;
  color: string;
}

interface Education {
  expanded: boolean;
  institution: string;
  degree: string;
  period: string;
  logo: string;
  color: string;
  description: string[];
}

interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tags: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  activeTab: string = 'Backend';
  isDarkMode: boolean = true;

  contactForm = {
    email: '',
    message: ''
  };

  skills: Record<string, Skill[]> = {
    Backend: [
      { name: 'Node.js', icon: '🟢', color: 'bg-green-500' },
      { name: 'TypeScript', icon: 'TS', color: 'bg-blue-500' },
      { name: '.NET', icon: '.NET', color: 'bg-purple-500' },
      { name: 'C#', icon: 'C#', color: 'bg-purple-400' },
      { name: 'Laravel', icon: 'L', color: 'bg-red-500' },
      { name: 'PHP', icon: 'php', color: 'bg-indigo-400' },
      { name: 'Python', icon: '🐍', color: 'bg-yellow-500' },
      { name: 'SQL', icon: 'SQL', color: 'bg-gray-500' },
      { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-600' },
      { name: 'MySQL', icon: 'My', color: 'bg-blue-400' },
      { name: 'DynamoDB', icon: 'DB', color: 'bg-blue-700' },
      { name: 'REST APIs', icon: 'API', color: 'bg-green-600' },
      { name: 'GraphQL', icon: 'GQL', color: 'bg-pink-500' },
    ],
    Frontend: [
      { name: 'React', icon: '⚛️', color: 'bg-cyan-500' },
      { name: 'Angular', icon: 'A', color: 'bg-red-600' },
      { name: 'Vue.js', icon: 'V', color: 'bg-green-500' },
      { name: 'HTML5', icon: 'H5', color: 'bg-orange-500' },
      { name: 'CSS3', icon: 'C3', color: 'bg-blue-500' },
      { name: 'Tailwind', icon: 'TW', color: 'bg-cyan-400' },
    ],
    DevOps: [
      { name: 'Docker', icon: '🐳', color: 'bg-blue-500' },
      { name: 'AWS', icon: 'AWS', color: 'bg-orange-500' },
      { name: 'CI/CD', icon: '🔄', color: 'bg-green-500' },
      { name: 'Git', icon: 'Git', color: 'bg-orange-600' },
    ],
    Practices: [
      { name: 'Agile', icon: '🏃', color: 'bg-blue-500' },
      { name: 'TDD', icon: '✓', color: 'bg-green-500' },
      { name: 'Clean Code', icon: '✨', color: 'bg-purple-500' },
    ],
    Tools: [
      { name: 'VS Code', icon: 'VS', color: 'bg-blue-600' },
      { name: 'Postman', icon: 'PM', color: 'bg-orange-500' },
      { name: 'Jira', icon: 'J', color: 'bg-blue-500' },
    ],
  };

workExperience: WorkExperience[] = [
  {
    company: 'Humanforce',
    role: 'Software Engineer',
    period: 'Jan 2024 - Present',
    logo: '🏢',
    color: 'bg-yellow-500',
    expanded: false,
    description: [
  "Worked on web applications serving 600,000+ users with a modern tech stack including a Laravel backend (PHP) with GraphQL endpoints, a React SPA frontend (TypeScript), event-driven Node.js (TypeScript) microservices, and also AWS Lambda backends (TypeScript).",
  "Enhanced the email log in intelliHR by integrating AWS SES and a microservice to track bounce, complaint, and delivery status, allowing users to retry failed messages.",
  "Built user management features for a multi-tenant infrastructure management system, enabling administrators to create users, assign companies, and define permissions (TypeScript, Angular, Lambda, API Gateway, DynamoDB).",
  "Developed backend APIs for the intelliHR-Thrive mobile app integration, streamlining in-app form completion and boosting task completion rates.",
  "Automated pruning of large database tables to reduce data growth and lower long-term storage costs.",
  "Setup Sumo Logic in Node.js and .NET lambdas to standardise logging format across codebases.",
  "Improved job data download performance by implementing a streaming mechanism, making downloads significantly faster and more memory-efficient.",
  "Implemented comprehensive testing across the stack using Playwright, PHPUnit, Jest and Cypress.",
  "Migrated legacy REST endpoints to GraphQL.",
  "Led smooth PHP and Laravel version upgrades.",
  "Setup ESLint and Prettier in CI/CD pipelines to enforce coding standards and consistent code quality across teams."
],
  },
  {
    company: 'The University of Queensland',
    role: 'Software Engineer',
    period: 'Nov 2022 - Jan 2024',
    logo: '🎓',
    color: 'bg-purple-600',
    expanded: false,
    description: [
      'Developed and maintained web applications using .NET and React.',
      'Worked with teams to deliver quality software solutions.'
    ],
  }
];


education: Education[] = [
  {
    institution: 'HTL Leoben',
    degree: 'Matura - Information Technology and Smart Production',
    period: 'Sep 2020 - June 2025',
    logo: 'HTL',
    color: 'bg-blue-600',
    expanded: false,
    description: [
      'Austrian higher technical college focused on IT and smart production.'
    ]
  },
];


  projects: Project[] = [
    {
      title: 'Developer Job Portal',
      description: 'Job portal for companies looking to hire developers in Australia. Filter by experience, location and keywords. Companies can pay a monthly fee to be able to message developers on the site and view their information. Built with Laravel.',
      image: 'assets/projects/job-portal.png',
      github: 'https://github.com/yourusername/job-portal',
      tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind']
    },
    {
      title: 'Project Management',
      description: 'Project management application featuring drag-and-drop kanban boards, user assignments, and team collaboration. Built with Laravel, React and Inertia.',
      image: 'assets/projects/project-management.png',
      github: 'https://github.com/yourusername/project-management',
      tags: ['Laravel', 'React', 'Inertia', 'Tailwind']
    },
    {
      title: 'Crypto Sentiment Analysis',
      description: 'Cryptocurrency sentiment analysis website that analyses Twitter posts to determine sentiment for different cryptocurrencies. Built with React, Express.js, and AWS services including EC2, S3, and Elasticache with auto-scaling.',
      image: 'assets/projects/crypto-sentiment.png',
      github: 'https://github.com/yourusername/crypto-sentiment',
      demo: 'https://demo.example.com',
      tags: ['React', 'Express.js', 'AWS', 'Node.js']
    },
    {
      title: 'Company Asset Trading',
      description: 'Java-based desktop application for trading virtual assets within a company network.',
      image: 'assets/projects/asset-trading.png',
      github: 'https://github.com/yourusername/asset-trading',
      tags: ['Java', 'Desktop', 'Trading']
    }
  ];

  socialLinks = [
    { icon: 'home', url: '#', label: 'Home' },
    { icon: 'github', url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: 'linkedin', url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: 'mail', url: 'mailto:benrogers1299@outlook.com', label: 'Email' },
  ];

  get skillTabs(): string[] {
    return Object.keys(this.skills);
  }

  get activeSkills(): Skill[] {
    return this.skills[this.activeTab] || [];
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  onSubmit(): void {
    console.log('Form submitted:', this.contactForm);
    // Hier kannst du die Form-Logik implementieren
    alert('Nachricht gesendet!');
    this.contactForm = { email: '', message: '' };
  }
toggleWorkExperience(index: number): void {
  // @ts-ignore
  this.workExperience.at(index).expanded = !this.workExperience[index].expanded;

}

toggleEducation(index: number): void {
  this.education.forEach((edu, i) => {
    edu.expanded = i === index ? !edu.expanded : false;
  });
}

toggleTheme(): void {
  this.isDarkMode = !this.isDarkMode;
  document.body.classList.toggle('light-mode', !this.isDarkMode);
}

}
