#!/bin/bash

# FileFlow Stop Script
# This script helps you stop all running FileFlow processes

echo "🛑 Stopping FileFlow Development Environment..."
echo "==============================================="

# Find and kill backend process (port 4000)
BACKEND_PID=$(lsof -ti:4000)
if [ ! -z "$BACKEND_PID" ]; then
    echo "🔄 Stopping backend server (PID: $BACKEND_PID)..."
    kill $BACKEND_PID
    echo "✅ Backend server stopped"
else
    echo "ℹ️  No backend server running on port 4000"
fi

# Find and kill frontend process (port 3000)
FRONTEND_PID=$(lsof -ti:3000)
if [ ! -z "$FRONTEND_PID" ]; then
    echo "🔄 Stopping frontend server (PID: $FRONTEND_PID)..."
    kill $FRONTEND_PID
    echo "✅ Frontend server stopped"
else
    echo "ℹ️  No frontend server running on port 3000"
fi

echo "==============================================="
echo "🎉 All FileFlow servers stopped successfully!"
echo ""
echo "💡 To start again, run: ./start-dev.sh"
