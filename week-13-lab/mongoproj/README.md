# MongoDB Project

A Node.js application with Express and MongoDB using Mongoose.

## Setup

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd mongoproj
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   - Copy the example environment file:
     ```bash
     cp config/config.env.example config/config.env
     ```
   - Edit `config/config.env` with your actual values:
     ```
     NODE_ENV = development
     PORT = 5000
     MONGO_URI = your-actual-mongodb-connection-string
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## API Endpoints

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `GET /api/users/search?role=admin&name=john` - Search users
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user by ID
- `DELETE /api/users?role=user` - Delete users by criteria

## Security Notes

- Never commit your `config.env` file to Git
- The `.gitignore` file prevents sensitive files from being uploaded
- Use the `config.env.example` file as a template for your environment variables
