import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

interface Skill {
  name: string;
  icon: string;
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
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(10px)' }),
            stagger(50, [
              animate(
                '200ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              )
            ])
          ],
          { optional: true }
        )
      ])
    ])
  ]

})
export class PortfolioComponent {

  activeTab: string = 'Backend';
  isDarkMode: boolean = true;

  contactForm = {
    email: '',
    message: ''
  };

  skills: Record<string, Skill[]> = {
    Frontend: [
      { name: 'Angular', icon: 'angular.webp'},
      { name: 'TypeScript', icon: 'ts.png'},
      { name: 'HTML5', icon: 'html.png'},
      { name: 'CSS3', icon: 'css.png'},
      { name: 'Flutter', icon: 'flutter.png'},
      { name: 'Single Page Applications', icon: 'spa.svg'},
    ],
    Backend: [
      { name: 'Java', icon: 'java.webp'},
      { name: 'Python', icon: 'python.png'},
      { name: 'SQL', icon: 'sql.svg'},
      { name: 'Node.js', icon: 'nodejs.webp'},
      { name: 'MariaDB', icon: 'mariadb.png'},
      { name: 'C#', icon: 'cs.avif'},
      { name: 'C', icon: 'c.png'},
      { name: 'Redis', icon: 'redis.png'},
      { name: 'REST APIs', icon: 'rest.svg'},
      { name: 'Web Scraping', icon: 'webscraping.webp'},
    ],
    DevOps: [
      { name: 'Docker', icon: 'docker.png'},
      { name: 'Git', icon: 'git.png'},
    ],
    Tools: [
      { name: 'Linux', icon: 'linux.png'},
      { name: 'Unity', icon: 'unity.webp'},
      { name: 'SAP', icon: 'sap.svg'},
      { name: 'Forge', icon: 'forge.jpg'},
    ],
  };

workExperience: WorkExperience[] = [

  {
    company: 'Das Land Steiermark - Abteilung 7',
    role: 'Internship & Diploma Thesis',
    period: 'Summer 2024',
    logo: '../../assets/landsteiermark.png',
    color: 'bg-purple-600',
    expanded: false,
    description: [
  "Developed a digital construction cost tracking system for the Land Steiermark, replacing an inefficient Excel- and email-based workflow with a modern, scalable software solution.",
  "Performed detailed process analysis and requirements engineering to translate real-world workflows into a user-friendly digital solution.",
  "Led system architecture and technical design, ensuring seamless communication between web, mobile, and backend components.",
  "Built the Angular-based admin tool used by office staff to review costs, manage construction projects, and validate submitted data.",
  "Applied project management to coordinate development phases, prioritize features, and deliver a production-ready system.",
  "Worked closely with future users to gather feedback, iterate on features, and align the solution with operational needs.",
  "Participated in on-site supervision of fiber optic construction projects across Styria.",
  "Improved data accuracy, efficiency, and transparency of construction cost recording through automation and centralized data management.",
  "Transitioned the project into production following successful completion of the diploma thesis."
]

  },
  {
    company: 'Knapp AG',
    role: 'Internship Software Engineering',
    period: 'Summer 2022, 2023',
    logo: '../../assets/knapp_ag_logo.jpg',
    color: 'bg-yellow-500',
    expanded: false,
description: [
  "Developed and maintained the web frontend of an internal company portal using Angular and TypeScript.",
  "Tested and validated core functionalities to ensure user experience.",
  "Provided improvement suggestions for fundamental development practices, enhancing maintainability.",
  "Conducted extensive bug fixing, resolving critical issues and improving overall system stability.",
  "Independently implemented new features such as user settings, improving personalization and usability.",
],

  },
];


education: Education[] = [
  {
    institution: 'HTL Leoben',
    degree: 'Information Technology and Smart Production',
    period: 'Sep 2020 - Jun 2025',
    logo: '../../assets/htl.png',
    color: 'bg-blue-600',
    expanded: false,
    description: [
      'Austrian higher technical college',
      'Focus on Information technology and smart production.',
      "Matura completed with an overall average grade of 1.0",
      'Participated in program attending a course on the technical university Graz',
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
