//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

const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
//add body parser and cors to express
const bodyParser =require('body-parser')
const cors = require('cors')
const apiKey= process.env.OPENAI_API_KEY

console.log(process.env.OPENAI_API_KEY);

const configuration = new Configuration({
    organization: "org-yTO8jq4sZKHX7dIUl0eQCvaX",
    apiKey: `${apiKey}`,
});
const openai = new OpenAIApi(configuration);



const app= express();
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 3080;


app.post('/', async(req, res)=>{
  const {message} = req.body;
  console.log(message);
  
    const response = await openai.createCompletion({
      
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });

      // console.log()

      res.json({
        message : response.data.choices[0].text
      })
})

app.listen(port, ()=>{
    console.log(`Server start at ${port}`);
})
