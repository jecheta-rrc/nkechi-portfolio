// src/data/projects.ts

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "Cloud-Based Inventory System",
    description:
      "Designed and implemented a serverless inventory management system using AWS services.",
    longDescription:
      "Built a serverless inventory system using AWS Lambda, API Gateway, DynamoDB, and S3. Designed scalable NoSQL data models, implemented REST endpoints, tested with Postman, and automated deployments using GitHub Actions.",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "GitHub Actions"],
    githubUrl: "https://github.com/jecheta-rrc/CI-InventoryApp.git",
    highlights: [
      "Serverless architecture with DynamoDB modeling",
      "REST API endpoints tested with Postman",
      "CI/CD automation with GitHub Actions",
    ],
  },
  {
    title: "Backend Inventory & Orders API",
    description:
      "Developed a secure REST API supporting inventory and order management with authentication.",
    longDescription:
      "Built a modular Express API with TypeScript, role-based access control, JWT authentication, documentation, and automated tests. Designed endpoints for inventory and orders with secure patterns and clean architecture.",
    tech: ["Node.js", "Express", "TypeScript", "JWT", "Jest", "Firebase"],
    githubUrl: "https://github.com/jecheta-rrc/Backend-Project.git",
    highlights: [
      "JWT auth + role-based authorization",
      "Automated testing with Jest",
      "Modular Express architecture",
    ],
  },
  {
    title: "Automated Teller System",
    description:
      "Built an object-oriented banking app demonstrating design patterns and GUI components.",
    longDescription:
      "Implemented an OOP banking simulation using Python with design patterns (Observer, Strategy), event-driven logic, and a PySide6 GUI. Focused on clean architecture and maintainable code.",
    tech: ["Python", "OOP", "Observer Pattern", "Strategy Pattern", "PySide6"],
    githubUrl: "https://github.com/jecheta-rrc/Intermediate-Software-Development-Project.git",
    highlights: [
      "Design patterns: Observer + Strategy",
      "Event-driven logic",
      "Desktop GUI with PySide6",
    ],
  },
];
