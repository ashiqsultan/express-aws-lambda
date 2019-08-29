const app = require('./src/app.js');
const port = process.env.PORT || 8000;

// Server
app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});

