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
      "A generative AI prototype that turns hospital discharge summaries into plain-language explanations for patients and concise highlights for clinicians.",
    longDescription:
      "My team built and presented Shepherd in one day for the Healthcare 2 challenge at the 2026 AccelR8 Prairie AI Hackathon. We started with a practical problem: the same discharge document needs to be understandable to patients and easy for clinicians to scan. Shepherd generates both versions from a single document, then flags claims it cannot trace back to the source for review. We demonstrated the workflow with synthetic documents.",
    tech: ["Generative AI", "Document summarization", "Source grounding"],
    githubUrl: "https://github.com/gbevwunu/Shepherd",
    highlights: [
      "Generated a plain-language patient summary and a separate clinician brief from the same discharge document.",
      "Flagged unsupported claims so reviewers could check the summary against the original document.",
      "Collaborated to build and present a working prototype in one day using synthetic data.",
    ],
  },
  {
    title: "Event Management Platform",
    description:
      "A full-stack team application for browsing events, managing event services, and collecting RSVPs.",
    longDescription:
      "I built and integrated features across the React frontend, Express API, and Prisma data layer as part of Team Ace Stack. I helped integrate Clerk authentication across the frontend and backend, connect the services interface to protected endpoints, and debug issues across the stack. One fix corrected how the frontend mapped the API response so newly created services appeared in the list.",
    tech: ["React", "Express", "PostgreSQL", "Prisma", "Clerk"],
    githubUrl: "https://github.com/Cusiokhale/Event-Management",
    highlights: [
      "Contributed to the React interface, Express API, and Prisma data layer.",
      "Integrated authenticated requests and scoped service queries to the signed-in user.",
      "Fixed the API-to-UI data mapping so newly added services appeared in the list.",
    ],
  },
  {
    title: "Cloud-Based Inventory System",
    description:
      "A serverless AWS application for viewing and managing inventory records.",
    longDescription:
      "I built an inventory app with a static frontend hosted on Amazon S3 and a REST API exposed through Amazon API Gateway. Five AWS Lambda functions handled inventory operations, with DynamoDB storing the records. I verified API requests in Postman and used GitHub Actions to automate deployments.",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "GitHub Actions"],
    highlights: [
      "Connected the S3-hosted interface to Lambda functions through API Gateway.",
      "Designed the DynamoDB data model and tested the inventory endpoints with Postman.",
      "Automated deployments with GitHub Actions.",
    ],
  },
  {
    title: "Backend Inventory & Orders API",
    description:
      "Developed a secure REST API supporting inventory and order management with authentication.",
    longDescription:
      "Built a modular Express API with TypeScript, role-based access control, JWT authentication, documentation, and automated tests. Designed endpoints for inventory and orders with secure patterns and clean architecture.",
    tech: ["Node.js", "Express", "TypeScript", "JWT", "Jest", "Firebase"],
    githubUrl: "https://github.com/jecheta-rrc/Backend-Project",
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
    githubUrl: "https://github.com/jecheta-rrc/Intermediate-Software-Development-Project",
    highlights: [
      "Design patterns: Observer + Strategy",
      "Event-driven logic",
      "Desktop GUI with PySide6",
    ],
  },
];
