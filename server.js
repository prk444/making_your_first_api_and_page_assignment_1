// Boilerplate Code for Virtual Assistant API
const e = require('express');
const express = require('express');
const app = express();

function message(){

    let date = new Date();
    let day = date.getDay();

    if(day == 1){
        return {
          "dayMessage": "Happy Monday! Start your week with energy!"
        }
    }
    if(day == 5){
      return {
        "dayMessage": "It's Friday! The weekend is near!"
      }
  }
  else{
    return {
      "dayMessage": "Have a wonderful day!"
    }
  }
}



app.get("/assistant/greet",async(req, res) => {
      try {

        let user =req.query.name
        if(!user){
          res.status(500).json({message: "user is not given correct"});
        }
        let welcomeMessage =`Hello, ${user} Welcome to our assistant app!`
        let greet = message()
        greet.welcomeMessage = welcomeMessage
        res.status(200).json(greet);
        
      } catch (error) {
         res.status(500).json({message: "internal server error"});
      }

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
