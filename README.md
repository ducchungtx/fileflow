# FileFlow - Online File Conversion Service

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies for all workspaces
npm run install:all

# Or install manually
npm install
cd backend && npm install
cd ../frontend && npm install
```

### Development

```bash
# Run both backend and frontend simultaneously
npm run dev

# Or run individually
npm run dev:backend    # Backend only (port 4000)
npm run dev:frontend   # Frontend only (port 3000)

# Quick start script (recommended)
./start-dev.sh

# Stop all servers
./stop-dev.sh
```

### Production

```bash
# Build all workspaces
npm run build

# Start production servers
npm run start
```

## 📁 Project Structure

```
fileflow/
├── backend/          # Node.js/Express API (port 4000)
├── frontend/         # Next.js application (port 3000)
├── docs/            # Documentation
├── start-dev.sh     # Quick start script
├── stop-dev.sh      # Stop all servers script
└── package.json     # Root package.json for monorepo management
```

## 🛠️ Available Scripts

| Command                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Start both backend and frontend in development mode |
| `npm run dev:backend`  | Start only backend server                           |
| `npm run dev:frontend` | Start only frontend server                          |
| `npm run build`        | Build both backend and frontend for production      |
| `npm run start`        | Start both servers in production mode               |
| `npm run install:all`  | Install dependencies for all workspaces             |
| `npm run clean`        | Remove all node_modules folders                     |
| `./start-dev.sh`       | Quick start script with dependency checks           |
| `./stop-dev.sh`        | Stop all running servers                            |

## 🔧 Configuration

### Backend Configuration

- Port: 4000 (configured in backend/.env)
- Environment: Development/Production

### Frontend Configuration

- Port: 3000 (default Next.js port)
- Framework: Next.js 15 with Tailwind CSS v4
- UI: ShadCN UI components

## 📝 Notes

- Backend runs on `http://localhost:4000`
- Frontend runs on `http://localhost:3000`
- Use `concurrently` to run multiple commands simultaneously
- All scripts are defined in the root `package.json`

## 🐛 Troubleshooting

If you encounter port conflicts:

1. Check if ports 3000 and 4000 are available
2. Use `lsof -i :3000` or `lsof -i :4000` to check port usage
3. Kill conflicting processes if needed

## 📚 Documentation

See `docs/README.md` for detailed setup instructions.
