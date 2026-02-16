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
      "Designed and implemented a serverless inventory management system using AWS Lambda, API Gateway, DynamoDB, and S3. Built RESTful endpoints, structured scalable NoSQL data models, and implemented CI/CD pipelines with GitHub Actions for automated deployment. Focused on scalability, stateless architecture, and cost-efficient cloud design.",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "GitHub Actions"],
    github: "https://github.com/jecheta-rrc/CI-InventoryApp"
  },
  {
    title: "Backend Inventory & Orders API",
    description:
      "Developed a secure REST API supporting inventory and order management with authentication and role-based authorization. Implemented Swagger documentation, automated testing with Jest, background cron jobs, and structured modular Express architecture.",
    tech: ["Node.js", "Express", "TypeScript", "Firebase", "JWT", "Jest"],
    github: "https://github.com/jecheta-rrc/Backend-Project"
  },
  {
    title: "Automated Teller System",
    description:
      "Built an object-oriented banking application demonstrating design patterns such as Observer and Strategy. Implemented event-driven logic, modular architecture, and GUI components using PySide6 to simulate real-world banking operations.",
    tech: ["Python", "OOP", "Observer Pattern", "Strategy Pattern", "PySide6"],
    github: "https://github.com/jecheta-rrc/Intermediate-Software-Development-Project"
  }
];
