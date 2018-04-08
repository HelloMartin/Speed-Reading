// -------------- REQUIREMENTS & CONSTS --------------
const   express = require("express"),
        app     = express();

// -------------- APP SET & USE --------------
app.set("view engine", "ejs");
global.__basedir = __dirname;

// -------------- ROUTES --------------
// LANDING
app.get('/', (req, res) => {
  res.render('landing');
});

// -------------- TUTOR
// INDEX
app.get('/speedread', (req, res) => {
  res.render('speedread/index');
});

// -------------- LISTEN --------------
app.listen(3000, () => {
  console.log('**********************************');
  console.log('Server has successfully started!');
  console.log(new Date());
  console.log('**********************************');
});
