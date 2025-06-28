# Fluxsyum Studios Portfolio Website

## Overview

This is a modern, React-based portfolio website for Fluxsyum Studios, an independent game studio focused on creating immersive Minecraft worlds and experiences. The application showcases the studio's philosophy, projects, and provides a download portal for their custom launcher.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth, interactive animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server bundling

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Migrations**: Drizzle Kit for schema management
- **Connection**: @neondatabase/serverless for serverless database connectivity

## Key Components

### Frontend Sections
1. **Header**: Fixed navigation with smooth scroll anchoring and mobile menu
2. **Hero**: Full-screen landing section with background video and call-to-action buttons
3. **Philosophy**: Four-card grid showcasing studio values and approach
4. **Portfolio**: Project showcase with hover effects and filtering
5. **Process**: Step-by-step timeline of the studio's creative workflow
6. **FAQ**: Collapsible accordion with common questions
7. **Download**: Centered download section for the launcher
8. **Footer**: Social links and studio information

### UI Component System
- Custom component library built on Radix UI primitives
- Consistent design tokens through CSS variables
- Dark theme optimized with glassmorphism effects
- Responsive design with mobile-first approach

### Backend Structure
- **Routes**: Modular route registration system in `server/routes.ts`
- **Storage**: Abstracted storage interface with in-memory implementation
- **Middleware**: Request logging and error handling
- **Development**: Hot reload with Vite integration

## Data Flow

1. **Static Content**: All portfolio content is statically defined in components
2. **User Management**: Basic user schema prepared for future authentication
3. **Asset Management**: External assets served via CDN (Discord CDN for images)
4. **Client Hydration**: React components hydrated on client with SSR-ready structure

## External Dependencies

### Production Dependencies
- **UI/UX**: Radix UI components, Framer Motion, Tailwind CSS
- **State**: TanStack Query for caching and synchronization
- **Database**: Drizzle ORM, Neon Database serverless connector
- **Validation**: Zod for runtime type validation
- **Utilities**: date-fns, clsx, class-variance-authority

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Replit Integration**: Runtime error overlay, cartographer plugin

## Deployment Strategy

### Development
- Hot reload development server with Vite
- tsx for TypeScript execution
- Replit-specific development plugins for enhanced debugging

### Production Build
1. Frontend: Vite builds React app to `dist/public`
2. Backend: esbuild bundles server to `dist/index.js`
3. Database: Drizzle migrations applied via `db:push` command

### Environment Configuration
- Database URL required via `DATABASE_URL` environment variable
- PostgreSQL dialect configured for production deployment
- Static file serving for built frontend assets

## Changelog
- June 28, 2025. Initial setup with React, GSAP, and modern UI components
- June 28, 2025. Applied complete Luna black & white theme with moon aesthetic
- June 28, 2025. Integrated Fluxsyum logo throughout navigation
- June 28, 2025. Implemented SplitText component with GSAP character-level animations
- June 28, 2025. Accelerated all navbar and UI animations for fluid user experience
- June 28, 2025. Optimized mobile responsiveness with touch-friendly interactions

## User Preferences

Preferred communication style: Simple, everyday language.
Theme preference: Black and white color palette with moon/luna aesthetic
Animation preference: Fast, fluid animations - especially navbar hover effects
Logo integration: Use Fluxsyum logo in header and maintain consistent branding
SplitText implementation: Use with 100ms delay, 0.6s duration, power3.out easing