import fetch from "node-fetch";
globalThis.fetch = fetch;
import Bard from "bard-ai";
// import bard2 from "googlebard"
// const { Configuration, OpenAIApi }  require("openai");
import  express from "express";
import dotenv from "dotenv";
// import bodyParser from "body-parser";
import cors from "cors";
const app= express();

dotenv.config();

app.use(cors())
app.use(express.json())

// const apiKey= process.env.OPENAI_API_KEY

// console.log(process.env.OPENAI_API_KEY);



// const configuration = new Configuration({
//     organization: "org-yTO8jq4sZKHX7dIUl0eQCvaX",
//     // apiKey: `${apiKey}`,
//     apiKey: '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'
// });
// const openai = new OpenAIApi(configuration);

// console.log(process.env.BARD_COOKIE_1PSIDTS)


 app.post('/', async(req, res)=>{
    // console.log(req.body)
      const {message} = req.body;
      console.log("message", message);
      
        try {
            let myBard = new Bard({
                "__Secure-1PSID":process.env.BARD_COOKIE_1PSID,
                "__Secure-1PSIDTS":process.env.BARD_COOKIE_1PSIDTS
            });
        
            const response= await myBard.ask(message);
          
      
            res.json({
              message : response
            })
          
        } catch (error) {
            res.json({
                message: "Error in Fetching Request"
            })
          console.log(error.message)
        }
    })

    const port= process.env.PORT || "3080";
    
    app.listen(port, ()=>{
        console.log(`Server start at ${port}`);
    })
    










// const app= express();
// app.use(bodyParser.json())
// app.use(cors())


// const port = process.env.PORT || 3080;


// app.post('/', async(req, res)=>{
//   const {message} = req.body;
//   console.log(message);
  
//     try {
//       const response = await openai.createCompletion({
      
      
//         model: "text-davinci-003",
//           prompt: `${message}`,
//           max_tokens: 100,
//           temperature: 0.5,
//         });
  
//         // console.log()
  
//         res.json({
//           message : response.data.choices[0].text
//         })
      
//     } catch (error) {
//       console.log(error.message)
//     }
// })

// app.listen(port, ()=>{
//     console.log(`Server start at ${port}`);
// })
