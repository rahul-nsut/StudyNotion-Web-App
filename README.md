# StudyNotion E-Learning Platform

## Overview

StudyNotion is a comprehensive ed-tech platform designed to provide a seamless learning experience for students and an efficient teaching environment for instructors. The platform enables course creation, management, and consumption with features like video lectures, quizzes, progress tracking, and secure payment processing.

The business model focuses on connecting knowledge providers (instructors) with learners through a marketplace approach, where instructors can monetize their expertise by creating and selling courses while students can access quality educational content across various domains.

## Key Features

### For Students
- User authentication and profile management
- Course discovery and enrollment
- Video lecture playback with progress tracking
- Interactive quizzes and assignments
- Course rating and review system
- Secure payment processing
- Course bookmarking
- Certificate generation upon course completion

### For Instructors
- Comprehensive course creation dashboard
- Content management system for lectures, sections, and subsections
- Video upload and management
- Quiz and assignment creation tools
- Student enrollment analytics
- Revenue tracking and reporting
- Course publishing workflow

### Administrative Features
- User management
- Content moderation
- Category management
- Revenue analytics
- Platform performance monitoring

## Tech Stack

### Frontend
- React.js
- Redux for state management
- Tailwind CSS
- React Router for navigation
- Axios for API requests
- Video.js for video playback
- Chart.js for analytics visualization
- React Hook Form for form handling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Cloudinary for media storage
- Razorpay for payment processing
- Nodemailer for email notifications

## Installation

### Prerequisites
- Node.js (v14 or above)
- MongoDB
- Cloudinary account
- Razorpay account (for payment processing)

### Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/yourusername/studynotion.git
cd studynotion
```

2. Backend setup
```bash
cd server
npm install
cp .env.example .env
# Update .env with your configuration values
npm run dev
```

3. Frontend setup
```bash
cd ../frontend
npm install
cp .env.example .env
# Update .env with your configuration values
npm start
```

## Usage

### Student Journey
1. Register/Login to the platform
2. Browse available courses by category
3. View course details, curriculum, and reviews
4. Purchase and enroll in courses
5. Access course content and track progress
6. Complete quizzes and assignments
7. Receive certificates upon completion

### Instructor Journey
1. Apply to become an instructor
2. Create courses with sections and subsections
3. Upload lecture videos and create assessments
4. Set pricing and publish courses
5. Monitor student enrollments and progress
6. Track revenue and course performance

## Folder Structure

```
studynotion/
├── frontend/                  # React frontend application
│   ├── public/                # Public assets
│   ├── src/
│   │   ├── assets/            # Static assets (images, icons)
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Page components
│   │   ├── services/          # API service integration
│   │   ├── redux/             # Redux state management
│   │   ├── utils/             # Utility functions
│   │   ├── App.js             # Main application component
│   │   └── index.js           # Application entry point
│   └── package.json           # Frontend dependencies
│
├── server/                    # Node.js backend application
│   ├── config/                # Configuration files
│   ├── controllers/           # Request handlers
│   ├── middlewares/           # Custom middlewares
│   ├── models/                # MongoDB schema definitions
│   ├── routes/                # API route definitions
│   ├── utils/                 # Utility functions
│   ├── app.js                 # Express application setup
│   └── index.js               # Server entry point
│
└── README.md                  # Project documentation
```

## Contributing

We welcome contributions to the StudyNotion platform! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

---

For any questions or support, please contact the StudyNotion team.