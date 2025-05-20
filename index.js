const app = require("./app");
const { port, connectDB } = require("./DB/config");

(async () => {
  await connectDB(); // 
  if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
      console.log(`🚀 Server running at http://127.0.0.1:${port}`);
    });
  }
})();

module.exports = app; 
