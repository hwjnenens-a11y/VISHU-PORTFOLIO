import express from 'express';

const app = express();

// API routes go here
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Export the app for Vercel serverless functions
export default app;
