# StudyNotion - Online Learning Platform

## Business Use Case Overview

StudyNotion is a comprehensive online learning platform designed to connect instructors and students in a seamless educational ecosystem. The platform allows instructors to create, manage, and monetize their courses while providing students with an interactive learning experience through video content, quizzes, and a structured curriculum.

The platform implements a robust payment system, user authentication, and content management to create a full-featured educational marketplace where knowledge can be shared and acquired efficiently.

## Key Features

- **User Authentication & Authorization**: Secure login/signup system with OTP verification and role-based access control
- **Course Management**: Complete course creation, editing, and publishing workflow for instructors
- **Content Delivery**: Video lectures organized in sections and subsections
- **Payment Integration**: Secure payment processing for course purchases using Razorpay
- **User Dashboard**: Personalized dashboards for both students and instructors
- **Progress Tracking**: Course completion tracking for students
- **Rating & Review System**: Feedback mechanism for continuous improvement
- **Responsive Design**: Mobile-friendly interface for learning on any device
- **Profile Management**: User profile customization and settings

## Tech Stack

### Frontend
- React.js
- Redux Toolkit
- Tailwind CSS
- Video.js
- Chart.js
- React Icons
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Cloudinary (for media storage)
- Nodemailer
- Razorpay API

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
cd ../src
npm install
```

4. Set up environment variables:
   - Create `.env` files in both server and frontend directories
   - Configure necessary environment variables (database connection, API keys, etc.)

5. Start the development servers
```bash
# Start backend server
cd server
npm run dev

# Start frontend server
cd ../src
npm start
```

## Usage

### For Students
- Browse available courses
- Purchase and enroll in courses
- Watch video lectures and complete quizzes
- Track learning progress
- Provide ratings and reviews for completed courses

### For Instructors
- Create and manage course content
- Organize lectures into sections and subsections
- Upload videos and create quizzes
- Monitor student enrollment and progress
- Receive payments for course purchases

## Folder Structure

```
studynotion/
├── server/                 # Backend code
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── middlewares/        # Custom middleware functions
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   └── utils/              # Helper functions
│
├── src/                    # Frontend code
│   ├── assets/             # Static assets
│   ├── components/         # Reusable UI components
│   ├── data/               # Static data files
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── reducers/           # Redux reducers
│   ├── services/           # API service functions
│   └── utils/              # Utility functions
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

---

Thank you for your interest in StudyNotion! For questions or support, please open an issue in the repository.