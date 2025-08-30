#!/bin/bash

# FileFlow Development Startup Script
# This script helps you start both backend and frontend simultaneously

echo "🚀 Starting FileFlow Development Environment..."
echo "=================================================="

# Check if concurrently is installed
if ! command -v concurrently &> /dev/null; then
    echo "📦 Installing concurrently..."
    npm install
fi

# Check if backend dependencies are installed
if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend && npm install && cd ..
fi

# Check if frontend dependencies are installed
if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd frontend && npm install && cd ..
fi

echo "🎯 Starting servers..."
echo "📊 Backend: http://localhost:4000"
echo "🌐 Frontend: http://localhost:3000"
echo "=================================================="

# Start both servers
npm run dev
