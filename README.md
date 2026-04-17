# Innovate Jharkhand - Tourism Showcase Platform

A full-stack tourism platform for Jharkhand featuring destinations, circuits, booking system with Razorpay payment integration, and file-based booking management.

## 📋 Features

### Frontend
- 🎨 Responsive design with Tailwind CSS
- 📱 Mobile-first approach
- ⚡ Built with React & Vite
- 🎬 Smooth animations and transitions
- 📍 Interactive destination showcase
- 🛒 Dual payment system (Online & Counter)

### Backend
- 🔐 JWT authentication
- 💳 Razorpay payment gateway integration
- 📁 File-based booking storage by date
- 📊 CSV reports for daily bookings
- 🗄️ MongoDB database
- 🚀 Express.js REST API

### Payment Options
- 💰 **Online Payment**: Razorpay gateway (₹50)
- 🏪 **Pay on Counter**: Alternative with booking confirmation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Docker & Docker Compose (optional)
- MongoDB Atlas account
- Razorpay account (for payments)

### Local Development

**Backend:**
```bash
cd backend
cp .env.example .env
# Edit .env with your credentials
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 📁 Project Structure

```
Innovate_Jharkhand/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── config/
│   │   └── server.js
│   ├── bookings/          # Auto-generated booking files
│   ├── .env.example
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── assets/
│   │   └── App.jsx
│   ├── .env.example
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
├── docker-compose.yml
├── DEPLOYMENT.md
└── README.md
```

## 🔑 Environment Variables

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
JWT_SECRET=your-secret-key
RAZORPAY_KEY_ID=your-key-id
RAZORPAY_KEY_SECRET=your-secret
NODE_ENV=production
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Innovate Jharkhand
```

## 📚 API Endpoints

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile (protected)

### Bookings
- `POST /api/bookings/create` - Create Razorpay order
- `POST /api/bookings/verify` - Verify payment
- `POST /api/bookings/save-file` - Save counter payment booking
- `GET /api/bookings/:id` - Get booking details

## 📊 Booking Storage

Bookings are automatically saved in:
```
backend/bookings/
├── YYYY-MM-DD/
│   ├── BK{timestamp}.json
│   └── bookings_summary.csv
```

Each date folder contains:
- Individual booking JSON files
- Daily CSV summary for reporting

## 🔐 Security

- ✅ `.env` files excluded from Git
- ✅ Sensitive credentials in environment variables
- ✅ CORS enabled for frontend-backend communication
- ✅ JWT token validation on protected routes
- ✅ Password hashing with bcryptjs

## 📱 Components

### Frontend Components
- **Navbar**: Navigation with government seal icon
- **Hero**: Landing section with call-to-action
- **Destinations**: Tourism destinations showcase
- **Tours/Circuits**: Travel circuit information
- **News**: Latest highlights and updates
- **ESG**: Environmental & social responsibility
- **Stats**: Key metrics and statistics
- **Contact**: Dual payment booking form
- **Footer**: Site navigation and links

### Backend Models
- **User**: User authentication & profiles
- **Booking**: All booking records with payment status

## 🚢 Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Quick Deploy Options:
- 🐳 Docker Compose (Local/VPS)
- ☁️ Heroku (Easy cloud)
- 🚀 Railway.app (Full-stack)
- 🌐 AWS/DigitalOcean/Azure (Enterprise)

## 📝 Scripts

### Backend
```bash
npm start       # Production
npm run dev     # Development with nodemon
```

### Frontend
```bash
npm run dev     # Development server
npm run build   # Production build
npm run preview # Preview build
```

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/feature-name`
2. Commit changes: `git commit -am 'Add feature'`
3. Push to branch: `git push origin feature/feature-name`
4. Submit a pull request

## 📄 License

[Specify your license]

## 📞 Support

For issues and questions:
- 📧 Email: contact@example.com
- 🐛 GitHub Issues: [Link to issues]
- 💬 Discussions: [Link to discussions]

## 🎯 Roadmap

- [ ] User authentication improvements
- [ ] Advanced booking analytics
- [ ] Email notifications
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Enhanced payment options (Apple Pay, Google Pay)
- [ ] Real-time notifications
- [ ] Admin dashboard

## 🙏 Acknowledgments

- Government of Jharkhand
- Tourism department partners
- All contributors and supporters

---

**Made with ❤️ for Jharkhand Tourism**
