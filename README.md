# Vue + TS + Pinia

Forked from [*bradtraversy* (https://github.com/bradtraversy/vue-crash-2024)]

**Overview of the Vue Application Features**

This Vue application provides job listing management functionalities, including listing jobs, adding, editing, and deleting jobs. It uses several components and stores for a modular and maintainable architecture.

**Key Components**

1. **Navigation and Routing**:
   - **router/index.ts**: Defines routes for HomeView, JobsView, JobDetailsView, AddJobView, EditJobView, and NotFoundView.
2. **HTTP Services**:
   - **useHttpServiceStore.ts**: Uses Axios for HTTP requests, with error handling using useErrorModalStore and success messages using vue-toastification.
   - **useHttpStore.ts**: Sets up Axios interceptors to show/hide a spinner and handle errors.
3. **Stores**:
   - **useErrorModalStore.ts**: Manages the state of an error modal.
   - **useJobsStore.ts**: Manages job data, including fetching, adding, editing, and deleting jobs.
   - **useSpinnerStore.ts**: Manages the visibility of a loading spinner.
4. **Components**:
   - **JobListing.vue**: Displays individual job information.
   - **CustomModal.vue**: Displays error messages.
   - **Hero.vue**: Displays a prominent section with a title and subtitle.
   - **HomeCard.vue**: Reusable card component used in the home view.
   - **TopNavbar.vue**: Navigation bar with links to different views.
5. **Views**:
   - **HomeView.vue**: Home page displaying cards for developers and employers.
   - **JobsView.vue**: Lists all jobs using JobList.vue.
   - **JobDetailsView.vue**: Shows details of a single job.
   - **AddJobView.vue**: Form for adding a new job.
   - **EditJobView.vue**: Form for editing an existing job.
   - **NotFoundView.vue**: 404 error page.

**TypeScript and Schema Validation**

- **Schemas**:
  - Uses zod for defining and validating schemas for Company and Job.
- **Types**:
  - Defines types for entities like Company, Job, and API responses.

**Features and Functionality**

1. **Job Listings**:
   - Jobs are fetched and displayed in a list.
   - Users can navigate to detailed views of individual jobs.
2. **Job Management**:
   - Forms for adding and editing jobs with validation using zod.
   - Jobs can be deleted with a confirmation prompt.
3. **Error Handling**:
   - Error messages are displayed in a modal.
   - Toast notifications for success messages.
4. **Loading State**:
   - A spinner is shown during HTTP requests.

**Project Configuration Guide**

**Key Configuration Files**

- **vite.config.js**: Vite configuration for setting up plugins, server settings, and path aliases.
- **vitest.config.js**: Configuration for Vitest, extending Vite's config for testing.
- **tsconfig.json**: Base TypeScript configuration with references to sub-configs.
- **tsconfig.app.json**: TypeScript configuration for the application code.
- **tsconfig.node.json**: TypeScript configuration for Node.js-specific files.
- **tsconfig.vitest.json**: TypeScript configuration for Vitest.
- **tailwind.config.js**: Tailwind CSS configuration for theme customization and utility classes.
- **postcss.config.js**: Configuration for PostCSS with Tailwind CSS and autoprefixer plugins.
- **playwright.config.ts**: Playwright configuration for end-to-end testing.
- **env.d.ts**: TypeScript environment declaration file.
- **.prettierrc.json**: Prettier configuration for code formatting.
- **.eslintrc.cjs**: ESLint configuration for linting JavaScript and TypeScript files.

## Usage

This project uses JSON-Server for a mock backend.

### Install Dependencies

```bash
npm install
```

### Run JSON Server

The server will run on http://localhost:8000

```bash
npm run server
```

### Run Vite Frontend

Vue will run on http://localhost:3000

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```
