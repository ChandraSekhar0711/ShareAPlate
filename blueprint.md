
# ShareAPlate Application Blueprint

## Overview

ShareAPlate is a community-driven food sharing application designed to connect people with surplus food to those in need. The application is built with Next.js and Firebase, providing a modern, responsive, and scalable platform for users to share and receive food.

## Core Features

*   **User Authentication:** Secure sign-up and sign-in functionality using Firebase Authentication, with support for email/password and Google social login.
*   **Food Listings:** Users can create, view, and manage listings for surplus food items.
*   **Search and Discovery:** A robust search and filtering system to help users find food based on location, category, and other criteria.
*   **Real-time Updates:** Real-time updates on food listings and requests, powered by Firebase Firestore.
*   **User Profiles:** Public user profiles to build trust and community within the platform.

## Design and Styling

*   **Framework:** Tailwind CSS for a utility-first styling approach.
*   **Component Library:** `shadcn/ui` for a set of accessible and customizable UI components.
*   **Typography:** The `Geist` font family is used for a clean and modern aesthetic.
*   **Layout:** A responsive layout that adapts to different screen sizes, ensuring a seamless experience on both mobile and desktop devices.

## Technical Stack

*   **Framework:** Next.js (App Router)
*   **Authentication:** Firebase Authentication
*   **Database:** Firebase Firestore
*   **Styling:** Tailwind CSS
*   **UI Components:** `shadcn/ui`
*   **Deployment:** Firebase Hosting

## Project Structure

```
/app
├── (auth)                # Authentication routes
│   ├── sign-in
│   └── sign-up
├── (dashboard)           # Protected dashboard routes
│   ├── layout.tsx
│   └── page.tsx
├── api                   # API routes
├── components            # Reusable UI components
├── lib                   # Utility functions and libraries
├── layout.tsx            # Root layout
└── page.tsx              # Home page
```

## Development Plan: Initial Setup and Dependency Fixes

### Objective

The primary goal of this initial development phase was to establish a stable and reliable foundation for the ShareAPlate application. This involved downgrading several key dependencies from unstable, pre-release versions to their latest stable counterparts, and then upgrading to the latest stable version of Next.js.

### Plan and Steps

1.  **Diagnose the Root Cause:** The initial investigation revealed that the project was using `next@^16.3.4` and `tailwindcss@^4`, which are highly unstable and incompatible with the project's UI component library.

2.  **Update `package.json`:** The `package.json` file was updated to use the following stable versions:
    *   `next`: `14.2.4`
    *   `react`: `^18`
    *   `react-dom`: `^18`
    *   `tailwindcss`: `^3.4.4`
    *   `eslint`: `^8`
    *   And various other `@radix-ui` and `shadcn/ui` related packages.

3.  **Clean Installation of Dependencies:** To ensure a clean and consistent environment, the `node_modules` directory and the `package-lock.json` file were deleted, followed by a fresh `npm install`.

4.  **Resolve Font Loading Error:** After downgrading Next.js, a build error occurred because the `Geist` font was no longer built-in. This was resolved by:
    *   Installing the `geist` npm package.
    *   Updating `src/app/layout.js` to import the font from `geist/font/sans` and `geist/font/mono`.

5.  **Upgrade to Latest Stable Next.js:** To ensure the project has the latest features and security updates, the application was upgraded to the latest stable version of Next.js (`14.2.35`). This involved:
    *   Identifying the latest stable version using `npm view next dist-tags`.
    *   Updating `package.json` with the new version.
    *   Running `npm install` to apply the changes.

### Outcome

By reverting to stable dependencies, correcting the font import, and then upgrading to the latest stable version of Next.js, the application now builds successfully, is up-to-date, and all interactive elements are fully functional. The project is now on a stable foundation, ready for further development.
