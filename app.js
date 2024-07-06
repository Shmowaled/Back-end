const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json()); //create the misslware

const readData = () =>{
  const data = fs.readFileSync('user.json');
  return JSON.parse(data)
}

//Get all data
app.get('/ReqData', (req, res) => {
  const ReqData = readData();
    res.json(ReqData);});

//Get data by ID
app.get('/ReqData/:id', (req, res) => {
  const ReqData = readData();
  const data = ReqData.find(item => item.id === id); //Comparing the IDs
  if (data) {
    res.json(record);}
    else {
      res.status(404).send('Data not found');}
});
  
//Get data based on a hobby
app.get('/data/hobby/:hobby', (req, res) => {
  const hobby = req.params.hobby.toLowerCase();
  const hoppies = ReqData.filter(item => item.hobby.toLowerCase() === hobby); //Comparing the hoppies(sensitive case)
  if (hoppies.length > 0) {
    res.json(hoppies);}
    else {
    res.status(404).send('Data not found');}
});

//Create method
app.listen(port, function(){
  console.log(`Server is running at http://localhost:3000`);
});