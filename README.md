<div align="center">

# 🌱 GreenBites

**Nourish Yourself. Heal the Planet.**

A modern nutrition tracking application that combines health monitoring with environmental consciousness. Track your meals, visualize your carbon footprint, and make smarter, sustainable food choices.

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure) • [Contributing](#-contributing)

</div>

---

## 📖 Overview

GreenBites is a comprehensive nutrition tracking application that bridges the gap between personal health and environmental impact. Unlike traditional nutrition apps that focus solely on calories and macros, GreenBites empowers users to understand how their food choices affect both their well-being and the planet's health.

### The Problem We're Solving

Many people want to eat healthier and reduce their environmental impact, but lack the tools to easily track and understand the relationship between their food choices and both personal health and carbon emissions. GreenBites bridges this gap by providing an integrated platform that makes sustainable eating accessible and actionable.

### Key Differentiators

- 🌍 **Carbon Footprint Tracking** - Real-time CO₂e emissions calculation for every meal
- 🤖 **AI-Powered Meal Logging** - Natural language processing for intuitive meal entry
- 📊 **Visual Analytics** - Beautiful dashboards showing nutrition and environmental impact
- 🎯 **Personalized Goals** - Customizable targets for nutrition and sustainability
- 💚 **Eco-Friendly Recommendations** - Smart suggestions for greener alternatives

---

## ✨ Features

### Core Features (MVP)

- [x] **User Authentication** - Secure login and signup with Clerk
- [x] **Responsive UI** - Modern, mobile-first design with Tailwind CSS
- [x] **Meal Logging** - Add and track meals with detailed information
- [ ] **Food Search & API Integration** - Integration with USDA/Nutritionix APIs
- [ ] **Natural Language Processing** - OpenAI-powered meal parsing from descriptions
- [ ] **Carbon Footprint Calculation** - Real-time CO₂e emissions tracking
- [ ] **Interactive Dashboards** - Visual progress rings for calories, macros, and CO₂e
- [ ] **Favorites & Meal Templates** - Quick-add common meals and templates
- [ ] **User Profiles & Goals** - Personalized nutrition and sustainability targets

### Planned Features

- 📱 Mobile app (React Native)
- 🔔 Notifications and reminders
- 👥 Social features and challenges
- 🏆 Achievement system
- 📈 Advanced analytics and insights
- 🌐 Multi-language support

---

## 🛠 Tech Stack

### Frontend

| Technology        | Version | Purpose                              |
| ----------------- | ------- | ------------------------------------ |
| **Next.js**       | 15.0    | React framework with App Router      |
| **React**         | 19.1    | UI library                           |
| **TypeScript**    | 5.8     | Type safety and developer experience |
| **Tailwind CSS**  | 3.4     | Utility-first CSS framework          |
| **Redux Toolkit** | 2.9     | State management                     |
| **Lucide React**  | 0.544   | Icon library                         |
| **Recharts**      | 3.2     | Data visualization                   |

### Backend & Database

| Technology             | Version | Purpose                            |
| ---------------------- | ------- | ---------------------------------- |
| **Next.js API Routes** | 15.0    | Serverless API endpoints           |
| **PostgreSQL**         | 16      | Relational database                |
| **Drizzle ORM**        | 0.44    | Type-safe database queries         |
| **Express**            | 5.1     | Server framework (for test server) |

### Authentication & External Services

| Service              | Purpose                            |
| -------------------- | ---------------------------------- |
| **Clerk**            | Authentication and user management |
| **OpenAI API**       | Natural language meal parsing      |
| **USDA/Nutritionix** | Nutrition data APIs                |

### Development Tools

- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing
- **Drizzle Kit** - Database migrations

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **PostgreSQL** 14+ ([Download](https://www.postgresql.org/download/))
- **Git** ([Download](https://git-scm.com/))

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/greenbites.git
cd greenbites
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/greenbites

# OpenAI (for meal parsing)
OPENAI_API_KEY=your_openai_api_key

# Nutrition API (USDA or Nutritionix)
NUTRITION_API_KEY=your_nutrition_api_key
```

4. **Set up the database**

```bash
# Run migrations
npm run db:migrate

# (Optional) Seed the database
npm run db:seed
```

5. **Start the development server**

```bash
npm run dev
```

6. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### First-Time Setup Guide

For detailed setup instructions, see:

- [Clerk Setup Guide](./CLERK_SETUP.md)
- [Clerk Quickstart](./CLERK_QUICKSTART.md)

---

## 📁 Project Structure

```
greenbites/
├── app/                      # Next.js App Router pages
│   ├── _components/         # Shared components
│   │   ├── Header.tsx
│   │   └── HomePage.tsx
│   ├── add-meal/            # Meal logging page
│   ├── dashboard/           # User dashboard
│   ├── login/               # Authentication pages
│   ├── sign-up/
│   ├── profile/             # User profile page
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
│
├── src/                     # Source code
│   ├── components/          # React components
│   │   └── auth/           # Authentication components
│   ├── context/            # React Context providers
│   ├── features/           # Feature-based modules
│   │   ├── dashboard/      # Dashboard feature
│   │   ├── meal/           # Meal management
│   │   └── ui/             # UI components
│   └── store/              # Redux store
│       ├── store.ts
│       └── userSlice.ts
│
├── docs/                    # Documentation
│   ├── decisions/          # Architecture Decision Records
│   ├── planning/           # Project planning docs
│   └── techinical/         # Technical documentation
│
├── public/                  # Static assets
├── drizzle.config.ts       # Drizzle ORM configuration
├── middleware.ts           # Next.js middleware
├── next.config.mjs         # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🎯 Available Scripts

| Script               | Description                           |
| -------------------- | ------------------------------------- |
| `npm run dev`        | Start development server on port 3000 |
| `npm run build`      | Build the application for production  |
| `npm run start`      | Start production server               |
| `npm run lint`       | Run ESLint to check code quality      |
| `npm run db:migrate` | Run database migrations               |
| `npm run db:seed`    | Seed database with initial data       |
| `npm run db:studio`  | Open Drizzle Studio (database GUI)    |

---

## 🏗 Architecture

GreenBites follows a modern, scalable architecture:

- **App Router** - Next.js 15 App Router for file-based routing
- **Feature-Based Structure** - Organized by features for better maintainability
- **Type-Safe** - Full TypeScript coverage with strict mode
- **Component-Driven** - Reusable, composable React components
- **Serverless** - API routes for scalable backend functionality

For detailed architecture documentation, see [docs/techinical/architecture.md](./docs/techinical/architecture.md).

---

## 🔐 Authentication

GreenBites uses [Clerk](https://clerk.com/) for authentication, providing:

- 🔒 Secure user authentication
- 📧 Email/password and social logins
- 👤 User management
- 🛡️ Session management

See [CLERK_SETUP.md](./CLERK_SETUP.md) for setup instructions.

---

## 🗄 Database Schema

The application uses PostgreSQL with Drizzle ORM. Key tables include:

- **Users** - User profiles and preferences
- **Meals** - Meal entries with nutrition data
- **CarbonFootprint** - Environmental impact tracking
- **Goals** - User nutrition and sustainability goals

Database migrations are managed with Drizzle Kit.

---

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run tests with coverage
npm run test:coverage
```

**Target Coverage**: 70%+ (planned)

---

## 📝 Development Guidelines

### Code Style

- Follow ESLint rules
- Use TypeScript for all new code
- Follow React best practices
- Write self-documenting code with clear variable names

### Git Workflow

1. Create a feature branch from `main`
2. Make your changes with tests
3. Ensure all tests pass
4. Update documentation
5. Submit a pull request

### Commit Messages

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** with appropriate tests
4. **Ensure all tests pass** and coverage remains above 70%
5. **Update documentation** as needed
6. **Commit your changes** (`git commit -m 'feat: Add amazing feature'`)
7. **Push to the branch** (`git push origin feature/amazing-feature`)
8. **Open a Pull Request**

### Reporting Issues

Found a bug? Have a feature request? Please open an issue on GitHub with:

- Clear description of the problem
- Steps to reproduce (for bugs)
- Expected vs. actual behavior
- Screenshots (if applicable)

---

## 📚 Documentation

- [Architecture Decisions](./docs/decisions/)
- [User Stories](./docs/planning/user-stories.md)
- [Roadmap](./docs/planning/roadmap.md)
- [Technical Architecture](./docs/techinical/architecture.md)

---

## 🗺 Roadmap

See our [roadmap](./docs/planning/roadmap.md) for planned features and timeline.

### Upcoming Features

- [ ] Food search and API integration
- [ ] Natural language meal logging
- [ ] Carbon footprint calculation
- [ ] Interactive dashboards
- [ ] Mobile app development

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

## 🙏 Acknowledgments

- [Clerk](https://clerk.com/) for seamless authentication
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Drizzle ORM](https://orm.drizzle.team/) for type-safe database queries
- The open-source community for inspiration and tools

---

## 📊 Project Status

**Current Status**: 🟡 In Development

- ✅ Authentication system
- ✅ UI/UX foundation
- ✅ Project structure
- 🚧 API integrations (in progress)
- 🚧 Database schema (in progress)
- ⏳ Carbon footprint tracking (planned)
- ⏳ Advanced analytics (planned)

---

<div align="center">

**Made with ❤️ and 🌱 for a healthier planet**

[⬆ Back to Top](#-greenbites)

</div>
