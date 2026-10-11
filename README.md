# বাজার দর (BazarDor)

**বাজার দর (BazarDor)** is a responsive online market-price application
that helps users explore everyday products and compare prices across
markets in Bangladesh.

## 🔗 Project Links

-   **Live Website:** <https://a7-bazar-dor-nextjs-project.vercel.app/>
-   **GitHub Repository:** `Add your GitHub repository URL here`

## 📝 About the Project

BazarDor presents product prices in a clear, user-friendly interface
with Bangla labels and localized numbers. Users can browse product
categories, view product details, compare market prices, and sort
products by price. Authentication is handled with Better Auth, and the
profile flow supports updating a user's name.

The application is built with Next.js App Router and designed to work
across mobile, tablet, and desktop screen sizes.

## 🛠️ Technologies Used

-   **Next.js** --- React framework for building the application.
-   **App Router** --- File-based routing and page navigation.
-   **React** --- Component-based user interface.
-   **TypeScript** --- Type safety for components and application data.
-   **Tailwind CSS** --- Utility-first styling and responsive layouts.
-   **DaisyUI / HeroUI** --- UI components and styling utilities, where
    used in the project.
-   **Better Auth** --- User authentication and account management.
-   **REST APIs** --- Fetching product and category data.
-   **Vercel** --- Deployment and hosting.

## ✨ Key Features

1.  **Product and Category Browsing**\
    Browse products and navigate through available market categories.

2.  **Market Price Comparison**\
    View minimum, maximum, and average prices, including
    market-by-market price information.

3.  **Sort Products by Price**\
    Sort products from lowest to highest price or highest to lowest
    price.

4.  **Bangla Localization**\
    Display product information, units, and prices in Bangla where
    supported by the interface.

5.  **Authentication and Profile Management**\
    Sign in and sign up using Better Auth, view profile information, and
    update the user's name through a dedicated update-information page.

6.  **Responsive User Interface**\
    Use the application on mobile phones, tablets, and desktop devices.

## 👤 Update Profile Information

The profile update flow lets an authenticated user open a dedicated
route, enter a name, and submit the form to update their account
information using Better Auth's user-update functionality.

Documentation: [Better Auth --- Update
User](https://better-auth.com/docs/concepts/users-accounts#update-user)

## 🚀 Getting Started

### Prerequisites

-   Node.js (a current LTS version is recommended)
-   npm, pnpm, yarn, or bun
-   The required API endpoints and Better Auth environment variables
    configured for your setup

### Installation

1.  Clone the repository:

    ``` bash
    git clone YOUR_GITHUB_REPOSITORY_URL
    ```

2.  Move into the project directory:

    ``` bash
    cd a7-bazar-dor-project
    ```

3.  Install dependencies:

    ``` bash
    npm install
    ```

4.  Create a `.env.local` file and add the environment variables
    required by your Better Auth configuration. Use the variable names
    from your project configuration, and do not commit secret values.

5.  Start the development server:

    ``` bash
    npm run dev
    ```

6.  Open <http://localhost:3000> in your browser.

## 📦 Available Scripts

The following are common Next.js scripts; check `package.json` to
confirm the exact scripts available in this project.

``` bash
npm run dev
npm run build
npm run start
npm run lint
```

## 🌐 Deployment

The project is deployed on Vercel:

<https://a7-bazar-dor-nextjs-project.vercel.app/>

## 📬 Submission

-   **Live Link:** https://a7-bazar-dor-nextjs-project.vercel.app/
-   **GitHub Repository:** Add your repository URL before submitting.

------------------------------------------------------------------------

Made with Next.js and TypeScript.
