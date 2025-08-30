# GitHub Copilot Instructions for FileFlow Project

## Project Overview

FileFlow is an online file conversion service built to provide a simple, fast, and secure user experience. It integrates a blog about "office application experiences" to attract organic traffic through SEO. This is a monorepo project with backend (backend) and frontend (frontend) components.

## Tech Stack

- **Frontend**: Next.js / React / Tailwind CSS (for UI, SEO optimization with SSG/SSR)
- **Backend**: Node.js / Express.js / Multer (for file uploads) / BullMQ (for job queues)
- **Processing Tools**: LibreOffice, ImageMagick, PDFtk (command-line tools for file conversions)
- **Database**: Not required in Phase 1 (blog managed via Markdown files)

## Project Structure

```
fileflow/
├── backend/       # Node.js/Express API backend
│   ├── src/
│   └── package.json
├── frontend/       # Next.js frontend application
│   ├── app/
│   ├── posts/         # Blog posts in Markdown
│   └── package.json
├── docs/
│   └── README.md      # Main documentation
└── .gitignore         # Root gitignore for the monorepo
```

## Coding Guidelines

- **Language**: Primarily JavaScript/TypeScript (ES6+).
- **Style**: Use consistent naming (camelCase for variables, PascalCase for components/classes).
- **Imports**: Prefer ES6 imports/exports.
- **Error Handling**: Always handle errors gracefully, especially for file uploads and conversions.
- **Security**: Validate file types and sizes to prevent malicious uploads.
- **Performance**: Optimize images and PDFs; use lazy loading in frontend.
- **Testing**: Write unit tests for critical functions (use Jest).
- **Commits**: Use clear, descriptive commit messages (e.g., "feat: add PDF compression", "fix: handle large file uploads").

## Development Workflow

1. **Setup**: Follow the installation guide in `docs/README.md` (install Node.js, tools like LibreOffice/ImageMagick).
2. **Run Dev**: Use `npm run dev` in both backend and frontend.
3. **Testing**: Run `npm test` for unit tests.
4. **Production**: Use `npm run build && npm start` for production builds.
5. **Contributing**: Fork, create feature branches, write tests, submit PRs.

## Git Branching Strategy

- **Main Branches**:
  - `master`: Production-ready code
  - `Develop`: Integration branch for development
- **Supporting Branches**:
  - `feature/`: New features and non-emergency bug fixes
  - `hotfix/`: Urgent production fixes
  - `release/`: Preparation for a new production release
- **Branch Naming Convention**:
  - Feature branches: `feature/feature-name`
  - Hotfix branches: `hotfix/issue-description`
  - Release branches: `release/vX.Y.Z`
- **Workflow Rules**:
  - **Always create new branches from the `Develop` branch**
  - Pull requests should target the `Develop` branch
  - Hotfixes for production issues can branch from `master` but must be merged to both `master` and `Develop`
  - Keep branches focused on a single feature or fix
  - Delete branches after they've been merged

## Key Features to Implement/Understand

- **File Conversions**: Office docs to PDF, image formats (JPG/PNG/WEBP), PDF tools (merge/split/compress).
- **Blog Integration**: Markdown-based blog in `frontend/posts/`.
- **API Endpoints**: Backend handles uploads, queues jobs with BullMQ.
- **SEO**: Optimize frontend for search engines.

## Best Practices

- Always check for existing code before writing new features (avoid duplication).
- Use environment variables for configs (.env files).
- Document APIs and functions with comments.
- For frontend: Use Tailwind for styling, ensure responsive design.
- For backend: Use Multer for uploads, handle async jobs with BullMQ.

## Troubleshooting Tips

- If tools like LibreOffice fail, ensure they are installed and in PATH.
- For large files, adjust Multer limits in backend.
- Check logs for errors in conversions.

This instructions file helps Copilot understand the project context for better code suggestions. Update it as the project evolves.

## Note

This project uses English. Do not arbitrarily change the content to Vietnamese.
