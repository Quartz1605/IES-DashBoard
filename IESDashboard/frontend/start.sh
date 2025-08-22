#!/bin/bash

# IES Financial Dashboard - Launch Script
echo "🚀 Starting IES Financial Dashboard..."
echo ""

# Check if we're in the correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: This script must be run from the frontend directory"
    echo "Please navigate to: IES-DashBoard/IESDashboard/frontend"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Run linting
echo "🔍 Running linter..."
npm run lint

if [ $? -ne 0 ]; then
    echo ""
    echo "⚠️  Linting errors found, but continuing..."
fi

echo ""
echo "🔧 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

echo ""
echo "✅ Build successful!"
echo ""
echo "🌟 Starting development server..."
echo ""
echo "👉 Your dashboard will be available at: http://localhost:5173 (or next available port)"
echo "👉 Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm run dev
