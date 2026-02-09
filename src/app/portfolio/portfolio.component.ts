import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalProject } from '../modal-project/modal-project';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
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
  constructor(private dialog: MatDialog,) {}

  openProject(project: Project) {
    this.dialog.open(ModalProject, {
      data: project,
      panelClass: 'custom-dialog-container',
      width: '60%',
      maxWidth: '95vw',
      maxHeight: '80vh',
      height: '80%',
    });
}

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
      title: 'Cost Recording Tool for Construction Sites',
      description: 'A digital solution for cost recording on construction sites. The software replaces the previous inefficient Excel-based process, enabling optimized and error-reduced cost recording. Key challenges included integrating various technologies and ensuring a scalable solution..',
      image: 'assets/projects/baustelledetails.png',
      demo: 'https://www.youtube.com/watch?v=PauTWeaU8Y0',
      features: [
  'Secure User Authentication and Role-Based Access Control',
  'Manage construction sites, positions, equipment/materials, entries, and notes',
  'Ensure accurate and efficient cost recording through a user-friendly interface',
  'Visualize cost data for better decision-making',
  'Export data in Excel format',
],
      technologies: [{ name: 'Angular', icon: 'angular.webp' }, { name: 'Node.js', icon: 'nodejs.webp' }, { name: 'MariaDB', icon: 'mariadb.png' }, { name: 'TypeScript', icon: 'ts.png' }, { name: 'Single Page Application', icon: 'spa.svg' }],
    },
    {
      title: 'Discord Bot',
      description: 'A fully customized Discord Bot used by 300+ users built with Python and MariaDB, offering economy, moderation, prediction, and gaming features to engage and entertain server members',
      image: 'assets/projects/discordbot.png',
      github: 'https://github.com/qBaumi/Lemon-Bot',
      features: [
  'Moderation tools including a ticket system, logging, suggestion forms, and other utilities for server admins',
  'Economy system with currency, items, gambling, pets, and interactive games like Wordle and Minesweeper',
  'Prediction system for League of Legends games, tracking votes and awarding points throughout the Esports season',
],
      technologies: [{ name: 'Python', icon: 'python.png' }, { name: 'MariaDB', icon: 'mariadb.png' }, { name: 'SQL', icon: 'sql.svg' }],
    },
    {
      title: 'Twitch Chatbot integrating Spotify, LastFM, and 7TV',
      description: 'A Twitch Bot that displays live music, tracks game stats, monitors chat emotes and integrates Spotify and other APIs to enhance viewer engagement.',
      image: 'assets/projects/twitchbot.png',
      github: 'https://github.com/qBaumi/Lemonadebot',
      features: [
  'Show currently playing song in the stream background using the LastFM API',
  'Display detailed statistics of recently played games, including rankings',
  'Allow Twitch reward redemptions to add user-requested songs to a custom Spotify playlist for stream background music',
  'Track 7TV emotes in Twitch chat to identify underused emotes and free up slots for new ones',
  'Provide a dedicated Flask API to expose tracked data for integration with other projects'
],
      technologies: [{ name: 'Python', icon: 'python.png' }, { name: 'MariaDB', icon: 'mariadb.png' }, { name: 'SQL', icon: 'sql.svg' }],
    },
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
    this.http.post('http://localhost:3000/send-email', this.contactForm)
      .subscribe({
        next: (res: any) => {
          alert(res.message);
          this.contactForm = { email: '', message: '' };
        },
        error: (err) => {
          console.error(err);
          alert('Failed to send message');
        }
      });
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
