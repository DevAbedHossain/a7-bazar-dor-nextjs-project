
# 🛒 বাজার দর — BazarDor

### Essential Market Prices at a Glance

BazarDor is a responsive web application that helps users explore everyday essential product prices in Bangladesh. It provides product price comparisons, market-wise price details, daily price changes, and category-based browsing through a clean and user-friendly interface.

The application is built with Next.js, TypeScript, Tailwind CSS, DaisyUI, and Better Auth.

## 🌐 Live Demo

- **Live Website:** https://a7-bazar-dor-nextjs-project.vercel.app/
- **GitHub Repository:** [Add your GitHub repository URL here]

## ✨ Key Features

### 1. 🏠 Interactive Home Page
- Explore essential products and their latest listed prices.
- View products whose prices have increased or decreased.
- Browse all available products in a responsive card layout.
- Navigate to product details by clicking a product card.
- Scroll directly to the all-products section using the hero CTA.

### 2. 📊 Product Price Details
- View minimum, maximum, and average product prices.
- Compare prices across different markets and divisions in Bangladesh.
- See daily price changes with visual indicators.
- Display prices and numerical values using Bengali digits.

### 3. 🗂️ Category-Based Browsing
- Browse products by categories such as rice, vegetables, fish, meat, and oil.
- Sort products by default order, lowest price, or highest price.
- View category-specific product cards.
- Display loading skeletons while content is loading.
- Show a friendly message for empty or invalid categories.

### 4. 🔐 Authentication with Better Auth
- Register an account using name, email, and password.
- Sign in using email and password.
- Support Google and GitHub social authentication.
- Display the authenticated user's profile information.
- Provide sign-out functionality.
- Protect routes that require authentication.

### 5. 👤 User Profile Management
- View profile information.
- Update the user's name through a dedicated form.
- Access profile options from the user dropdown menu.

### 6. 📱 Responsive User Interface
- Responsive layouts for mobile, tablet, and desktop.
- Adaptive product grids and navigation.
- Clean cards, rounded corners, and consistent spacing.
- Skeleton loading states for a smoother experience.

### 7. 🚦 Loading and Error Handling
- Loading skeletons for product and category pages.
- Custom not-found page for invalid routes.
- User-friendly authentication feedback with toast notifications.
- Dynamic product routes designed to work after deployment and page refresh.

### 8. 🇧🇩 Bengali-Friendly Experience
- Bengali product names and category labels.
- Bengali number formatting for prices and percentages.
- Bengali date and unit formatting.
- Interface content designed for users in Bangladesh.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Next.js | React framework and application routing |
| App Router | File-based routing and dynamic routes |
| TypeScript | Type safety and maintainable code |
| React | Building reusable UI components |
| Tailwind CSS | Utility-first styling and responsive layouts |
| DaisyUI | Prebuilt UI components and skeleton loaders |
| Better Auth | Authentication and session management |
| MongoDB | User data storage, if configured in the project |
| React Hot Toast | Success and error notifications |
| Vercel | Application deployment |

## 📂 Main Application Routes

| Route | Description |
|---|---|
| `/` | Home page with featured and all products |
| `/category/[category]` | Category-specific product listing |
| `/product/[productId]` | Product details and market-wise prices |
| `/signin` | User sign-in page |
| `/signup` | User registration page |
| `/profile` | User profile information |
| `/profile/update` | Update profile information |
| `/not-found` | Custom not-found page, if configured as a route |

> **Note:** Next.js normally uses `not-found.tsx` for custom 404 UI rather than requiring a `/not-found` route. Actual route names may vary depending on the project structure.

## 🚀 Getting Started

Follow these steps to run BazarDor locally.

### Prerequisites

- Node.js installed
- npm, yarn, pnpm, or bun
- Git
- Required environment variables and authentication credentials

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd a7-bazar-dor-project
```

Replace the folder name if your cloned repository uses a different name.

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root and add the environment variables required by your application.

Example:

```env
MONGO_DB_URL=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secure_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

NEXT_PUBLIC_APPS_SERVER_URL=your_api_base_url
```

Use the exact variable names required by your project. Remove unused variables and never commit real secrets or credentials to GitHub.

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

## 🌍 Deployment

BazarDor is deployed on Vercel.

**Live URL:** https://a7-bazar-dor-nextjs-project.vercel.app/

To deploy your own version:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Update Google and GitHub OAuth callback URLs for production.
5. Deploy and verify the home page, authentication, dynamic routes, and page refresh behavior.

## 📌 Important Notes

- Product prices are indicative and may change depending on market conditions.
- Authentication requires valid provider credentials and correctly configured environment variables.
- Never expose database credentials, authentication secrets, or OAuth client secrets.
- Test the production build before submitting the project.
- Ensure dynamic category and product routes work when opened directly or refreshed.

## 👨‍💻 Author

**Abed Hossain**

- GitHub: [Your GitHub Profile](https://github.com/DevAbedHossain)
