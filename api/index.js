const app = require('../src/app');
const PORT = process.env.PORT || 3000;

// Only listen locally, Vercel maps this automatically
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
