# Bella Bride Wedding Salon

A modern, elegant frontend web application for **Bella Bride Wedding Salon** located in Chicago, IL. This application is designed as a clean React + Vite SPA, suitable for DevOps training demonstrations and containerized deployments.

## Tech Stack

- **React 19**
- **Vite**
- **JavaScript (ES6+)**
- **CSS3** (custom responsive styles)
- **Node.js** (compatible with Node.js 22+)

---

## Local Development & Build Scripts

Make sure you have Node.js 22+ installed on your system.

### 1. Install Dependencies
```bash
npm ci
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Run ESLint
```bash
npm run lint
```

### 4. Create Production Build
```bash
npm run build
```
The build artifacts will be generated in the `dist/` directory.

---

## Docker Instructions

This project includes a multi-stage `Dockerfile` with `node:22-alpine` for building and `nginx:alpine` for serving the static files.

### 1. Build Docker Image
```bash
docker build -t wedding-salon:v1 .
```

### 2. Run Container
```bash
docker run -d --name wedding-salon -p 8080:80 wedding-salon:v1
```

Once running, access the application in your browser at `http://localhost:8080`.
