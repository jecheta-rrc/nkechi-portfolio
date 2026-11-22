// src/data/projects.ts

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "Emergency Management System",
    description:
      "RRC Polytech industry project supporting emergency reporting, citizen check-in, and volunteer coordination for First Nations communities.",
    longDescription:
      "As a primary developer, I built and refined full-stack features, fixed bugs, and improved how users attach files to emergency reports and submit volunteer documents. I added confirmation after successful uploads and wrote TypeScript component documentation and sections of the developer setup guide. I also facilitated team meetings and demonstrated the Citizens Check-In and Volunteer workflows to MANFF.",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "DaisyUI"],
    highlights: [
      "Improved image uploads for emergency reports.",
      "Added email notifications to support emergency management workflows.",
      "Added geolocation markers to display locations on the interactive map.",
      "Standardized file selection controls for emergency reports and volunteer documents, including criminal record checks and driver’s licences.",
      "Added visible confirmation when a file uploaded successfully.",
      "Wrote TypeScript component documentation and sections of the developer setup guide.",
    ],
  },
  {
    title: "ShelfSignal",
    description:
      "A demand forecasting and reorder planning prototype for independent retailers.",
    longDescription:
      "I built ShelfSignal to help retailers turn weekly sales and stock counts into an order they can review before buying. The app compares a moving average with linear regression on historical sales, then uses the selected model to estimate demand. Retailers can adjust stock on hand, incoming deliveries, and extra coverage before exporting a reorder list.",
    tech: ["JavaScript", "Linear regression", "CSV", "Vercel"],
    liveUrl: "https://shelf-signal-zeta.vercel.app/",
    highlights: [
      "Flags products that may run out before the supplier can deliver.",
      "Calculates reorder quantities from demand, lead time, available stock, and incoming units.",
      "Compares forecast errors across 24 historical predictions in the sample dataset.",
    ],
  },
  {
    title: "Shepherd",
    description:
      "AI prototype that turns complex medical documents into easier-to-understand summaries.",
    longDescription:
      "My team built and presented Shepherd for the Healthcare 2 challenge at the 2026 AccelR8 Prairie AI Hackathon.",
    tech: ["Generative AI", "Document summarization"],
    highlights: [
      "Collaborated to build and present a working prototype in one day.",
    ],
  },
  {
    title: "Event Management Platform",
    description:
      "Full-stack team project for managing event services with signed-in access.",
    longDescription:
      "I worked on the Express and Prisma backend and connected the React interface to authenticated service endpoints.",
    tech: ["React", "Express", "PostgreSQL", "Prisma", "Clerk"],
    githubUrl: "https://github.com/Cusiokhale/Event-Management",
    highlights: [
      "Scoped service queries to the signed-in user.",
      "Fixed the service list so newly added services appeared in the interface.",
    ],
  },
  {
    title: "Cloud-Based Inventory System",
    description:
      "Designed and implemented a serverless inventory management system using AWS services.",
    longDescription:
      "Built a serverless inventory system using AWS Lambda, API Gateway, DynamoDB, and S3. Designed scalable NoSQL data models, implemented REST endpoints, tested with Postman, and automated deployments using GitHub Actions.",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "GitHub Actions"],
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
    highlights: [
      "Design patterns: Observer + Strategy",
      "Event-driven logic",
      "Desktop GUI with PySide6",
    ],
  },
];
