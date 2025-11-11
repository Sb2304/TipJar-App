# TipJar - A Creator Support Platform

TipJar is a web application built with Next.js that allows fans to support their favorite creators, developers, and artists through direct tips. It provides a personal page for each creator where they can receive payments and messages from their supporters.

## Features

*   **User Authentication:** Secure login with GitHub using NextAuth.js.
*   **Personalized Creator Pages:** Every user gets a unique, shareable page (e.g., `tipjar.com/your-username`).
*   **Direct Tipping:** Supporters can send money directly to creators using Razorpay.
*   **Supporter Leaderboards:** Display top and recent supporters on creator pages.
*   **User Dashboard:** Creators can manage their profile information, including name, username, and payment details.
*   **Responsive Design:** A clean and modern UI that works on both desktop and mobile devices, built with Tailwind CSS.

## Tech Stack

*   **Framework:** Next.js
*   **Authentication:** NextAuth.js
*   **Database:** MongoDB with Mongoose
*   **Payments:** Razorpay
*   **Styling:** Tailwind CSS

> **Note on the Payment System:** This project simulates a direct payment flow for demonstration purposes. In this simulation, creators provide their own Razorpay keys directly. In a real-world, production application, the platform would handle all payments centrally and manage payouts to creators separately to ensure security and proper financial management. This approach was chosen to keep the project's scope focused on core features rather than building a complex, multi-sided payment platform.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v18 or later)
*   MongoDB installed and running.

### Installation

1.  **Clone the repository:**
   

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the root of the project and add the necessary variables (e.g., `DATABASE_URL`, `GITHUB_ID`, `GITHUB_SECRET`, `NEXTAUTH_SECRET`).

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open http://localhost:3000 with your browser to see the result.

