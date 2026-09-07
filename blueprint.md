
# Project Blueprint

## Overview

This project is a web application, "ShareAPlate," built with Next.js and the App Router. It is a platform designed to connect food donors with those in need, facilitating community-based food sharing. The application features a complete and secure user authentication system (registration, login, Google Sign-In, Apple Sign-In, and protected user profiles), a donation page, and a request listing page. The user interface is modern, responsive, and designed for a great user experience.

## Tech Stack

*   **Framework:** Next.js (App Router)
*   **Authentication:** Firebase Authentication (including Google and Apple Auth Providers)
*   **UI Components:** Radix UI, shadcn/ui
*   **Styling:** Tailwind CSS
*   **Icons:** Lucide React
*   **Form Management:** React Hook Form
*   **Schema Validation:** Zod
*   **Cookie Management:** js-cookie

## Project Structure

*   `/src/app`: Contains the main application routes.
    *   `/src/app/donate`: Page for making a donation.
    *   `/src/app/forgotPassword`: Page for password recovery.
    *   `/src/app/login`: User login page.
    *   `/src/app/profile`: User profile page (protected route).
    *   `/src/app/register`: User registration page.
    *   `/src/app/requests`: Page for listing requests.
*   `/src/components`: Reusable React components.
    *   `/src/components/ui`: Base UI components from shadcn/ui.
    *   `/src/components/pages`: Components that represent entire pages.
*   `/src/sections`: Larger, reusable sections of pages (e.g., Header, Footer, Hero).
*   `/public`: Static assets like images and icons.
*   `/src/lib`: Utility functions, including Firebase configuration (`firebase.js`).
*   `/src/middleware.js`: Middleware for protecting routes.
*   `requests.json`: A JSON file serving as a temporary data source for requests.

## Features

*   **Comprehensive User Authentication:**
    *   **Email/Password Registration:** New users can create an account with their email and password.
    *   **Email/Password Login:** Existing users can sign in.
    *   **Google Sign-In:** Users can sign in or register with their Google account.
    *   **Apple Sign-In:** Users can sign in or register with their Apple ID.
    *   **Protected Routes:** The user profile page (`/profile`) is protected, and unauthenticated users are redirected to the login page.
    *   **Secure Logout:** A secure logout process that clears the user's session and removes the authentication cookie.
*   **User Profile Dashboard:** A modern, welcoming dashboard for authenticated users to view their information.
*   **Donation Form:** A dedicated page for users to make donations.
*   **Request Listings:** A page to display a list of current requests.
*   **Theming:** Includes a theme toggle for light and dark modes.
*   **Responsive Design:** The application is designed to be fully responsive and accessible on various devices.

## Authentication Flow

1.  **Registration (`SignupPage.jsx`):**
    *   **Email/Password:** A new user is created using `createUserWithEmailAndPassword`.
    *   **Google Sign-In:** A new user is created using `signInWithPopup` with the `GoogleAuthProvider`.
    *   **Apple Sign-In:** A new user is created using `signInWithPopup` with the `OAuthProvider('apple.com')`.
    *   Upon successful registration, a `firebase-auth-token` cookie is set.
    *   The user is redirected to their new profile page (`/profile`).

2.  **Login (`LoginPage.jsx`):**
    *   **Email/Password:** An existing user is authenticated using `signInWithEmailAndPassword`.
    *   **Google Sign-In:** An existing user is authenticated using `signInWithPopup` with the `GoogleAuthProvider`.
    *   **Apple Sign-In:** An existing user is authenticated using `signInWithPopup` with the `OAuthProvider('apple.com')`.
    *   Upon successful login, the `firebase-auth-token` cookie is set.
    *   The user is redirected to their profile page (`/profile`).

3.  **Route Protection (`middleware.js`):**
    *   The middleware intercepts requests to `/profile`.
    *   It checks for the `firebase-auth-token` cookie.
    *   If the cookie is missing, the user is redirected to `/login`.

4.  **Profile Page (`ProfilePage.jsx`):**
    *   Displays the authenticated user's information.
    *   The `onAuthStateChanged` listener actively monitors the user's session.
    *   The "Logout" button signs the user out, removes the `firebase-auth-token` cookie, and redirects to the homepage.

This blueprint provides a comprehensive overview of the project's current state. It will be updated as new features are added.
