export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export const projects: Project[] = [
  {
    title: "Cloud-Based Inventory System",
    description:
      "Serverless inventory management system built on AWS using Lambda, API Gateway, DynamoDB, and S3. Designed with scalable architecture and CI/CD using GitHub Actions.",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "GitHub Actions"],
    github: "https://github.com/jecheta-rrc/CI-InventoryApp"
  },
  {
    title: "Backend Inventory & Orders API",
    description:
      "Secure multi-resource REST API with authentication, role-based authorization, Swagger documentation, automated testing, and background cron jobs.",
    tech: ["Node.js", "Express", "TypeScript", "Firebase", "JWT", "Jest"],
    github: "https://github.com/jecheta-rrc/Backend-Project"
  },
  {
    title: "Automated Teller System",
    description:
      "Object-oriented banking system demonstrating design patterns including Observer and Strategy, event-driven programming, and GUI implementation.",
    tech: ["Python", "OOP", "Observer Pattern", "Strategy Pattern", "PySide6"],
    github: "https://github.com/jecheta-rrc/Intermediate-Software-Development-Project"
  }
];
