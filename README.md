# Next.js Drupal Decoupled Starter

A modern, feature-rich Next.js 14.2 starter kit for building decoupled Drupal websites using GraphQL.

## Tech Stack

- **Frontend Framework**: Next.js 14.2.8
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: GraphQL with gql.tada
- **Authentication**: Drupal Auth Client
- **UI Components**: Radix UI
- **Forms**: React Hook Form
- **Animations**: Framer Motion
- **Development Tools**: Storybook

## Project Structure

### Key Components
- Header and Footer
- Hero Section
- Contact Form
- Project Cards
- Capability Cards
- YouTube Embed
- Scroll Reveal
- Theme Provider
- UI Components (Button, Card, Input, etc.)

### Pages
- Main Homepage
- Dynamic Demo Pages (`/demos/[page]`)
- Node Pages (`/node/[id]`)

### Features
- Drupal Integration with GraphQL
- Theme Switching
- Responsive Design
- TypeScript Support
- SEO Optimization

## Prerequisites

- Node.js >= 20.0.0
- npm or yarn
- A running Drupal backend with GraphQL API

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/qed42/ai-labs-next
   cd ai-labs-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file with your Drupal configuration:
   ```
   # Drupal Authentication URI
   NEXT_PUBLIC_DRUPAL_AUTH_URI=https://your-drupal-site.com
   
   # Drupal GraphQL Endpoint
   NEXT_PUBLIC_DRUPAL_GRAPHQL_URI=https://your-drupal-site.com/graphql
   
   # Drupal Consumer Credentials
   # Get these from admin/config/services/consumer in your Drupal site
   NEXT_PUBLIC_DRUPAL_CLIENT_ID='default_consumer'
   NEXT_PUBLIC_DRUPAL_CLIENT_SECRET=your-secret
   
   # Environment Setting
   # Options: preview | production
   ENVIRONMENT=preview
   
   # Optional: For local development with self-signed certificates
   # NODE_TLS_REJECT_UNAUTHORIZED=0
   ```

   Note: You can configure the environment for different setups:
   - For DDEV: Use your DDEV site URL
   - For Lando: Use http://drupal-decoupled.lndo.site

4. **Generate GraphQL Types**
   ```bash
   npm run gql:sync
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Build for Production**
   ```bash
   npm run build
   ```

7. **Start Production Server**
   ```bash
   npm run start
   ```

## Additional Scripts

- `npm run lint` - Run ESLint
- `npm run format` - Check code formatting
- `npm run format:fix` - Fix code formatting
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

## Supporting Organizations

Development sponsored by [Octahedroid](https://octahedroid.com/)

## Documentation

For detailed documentation, visit [Next.js Drupal Documentation](https://drupal-decoupled.octahedroid.com/docs/getting-started/quickstart/next)
