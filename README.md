# GEAPP
=======
Installation Guide
This guide provides detailed instructions for setting up the GEAPP Alliance Project Tracking Platform for local development.

Prerequisites
Before you begin, ensure you have the following installed on your system:

Required Software
Node.js (version 18.0 or higher)
Download from nodejs.org
Verify installation: node --version
npm (comes with Node.js) or yarn
Verify npm: npm --version
Or install yarn: npm install -g yarn
Git
Download from git-scm.com
Verify installation: git --version
Recommended Tools
VS Code or your preferred code editor
Chrome DevTools or similar browser developer tools
Getting Started
1. Clone the Repository
# Clone the repository

# Navigate to the project directory
cd geapp-alliance-tracking
2. Install Dependencies
Choose your preferred package manager:

Using npm:
npm install
Using yarn:
yarn install
3. Environment Configuration
Create environment files for different environments:

# Copy the example environment file
cp .env.example .env.local
Edit .env.local with your configuration:

# Feature Flags
NEXT_PUBLIC_ENABLE_MAPS=true
NEXT_PUBLIC_ENABLE_REAL_TIME_DATA=false
4. Database Setup (if applicable)
If the project uses a database:

5. Start Development Server
# Start the development server
npm run dev

# Or with yarn
yarn dev
The application will be available at:
Frontend: http://localhost:3000

Development Workflow
Available Scripts
# Development
npm run dev          # Start development server
npm run start        # Start production server
<!-- npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript type checking -->
# Check code style
npm run lint
Git Workflow
# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes and commit
git add .
git commit -m "feat: add your feature description"

# Push to your branch
git push origin feature/your-feature-name

# Or use a different port
npm run dev -- --port 3001
Node Modules Issues
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
Environment Variables Not Loading
Ensure .env.local exists and has correct format
Restart the development server after changes
>>>>>>> 604d4b2 (Initial commit)
