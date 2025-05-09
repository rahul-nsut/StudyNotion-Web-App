# StudyNotion - An EdTech Platform

## Overview

StudyNotion is a comprehensive online learning platform that connects instructors and students through a seamless educational experience. The platform enables instructors to create, manage, and monetize their courses while providing students with an interactive learning environment to discover, purchase, and consume educational content.

This full-stack application features a modern user interface, secure payment processing, content management system, and a rich learning experience through video lectures and interactive materials.

## Key Features

### For Students:
- User authentication and profile management
- Course discovery and browsing capabilities
- Secure payment processing for course enrollment
- Interactive video content consumption
- Progress tracking and course completion certificates
- Rating and review system

### For Instructors:
- Comprehensive course creation and management tools
- Content organization through sections and subsections
- Analytics dashboard to track student engagement and revenue
- Profile customization and instructor portfolios
- Seamless payout processing

### Platform Features:
- Responsive design for all devices
- Role-based access control
- Advanced search functionality
- Rating and review system
- Secure payment gateway integration
- Cloud-based content delivery

## Tech Stack

### Frontend:
- React.js
- Redux Toolkit for state management
- Tailwind CSS for styling
- Chart.js for data visualization
- React Router for navigation
- Axios for API requests

### Backend:
- Node.js
- Express.js
- MongoDB for database
- JWT for authentication
- Bcrypt for password hashing
- Cloudinary for media storage
- Razorpay payment gateway integration

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/studynotion.git
cd studynotion
```

2. Install dependencies for backend
```bash
cd server
npm install
```

3. Install dependencies for frontend
```bash
cd ../frontend
npm install
```

4. Create environment variables:
   - Create a `.env` file in the server directory
   - Create a `.env` file in the frontend directory

5. Start the development servers:
```bash
# Terminal 1: Start backend server
cd server
npm run dev

# Terminal 2: Start frontend server
cd frontend
npm start
```

## Usage

### Student Journey:
1. Sign up for an account
2. Browse available courses
3. Purchase courses using the integrated payment system
4. Access course content and track progress
5. Complete assessments and earn certificates
6. Leave ratings and reviews

### Instructor Journey:
1. Apply to become an instructor
2. Create and structure courses with sections and subsections
3. Upload video lectures and additional materials
4. Set pricing and publish courses
5. Monitor student engagement and earnings
6. Manage payout information

## Folder Structure

```
studynotion/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── slices/
│   │   ├── utils/
│   │   └── App.js
│   ├── package.json
│   └── tailwind.config.js
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   ├── config/
│   ├── index.js
│   └── package.json
│
└── README.md
```

## Contributing

We welcome contributions to StudyNotion! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.