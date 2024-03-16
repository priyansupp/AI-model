import React from "react";
import { useState } from "react"
import OpenAI from 'openai';

const CenterCont = () => {
    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      organization: process.env.REACT_APP_OPENAI_API_ORG,
      dangerouslyAllowBrowser: true
    });
  
    const [prompt, setPrompt] = useState("");
    const [apiResponse, setApiResponse] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
            console.log('hello1');
            const result = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: 'Hello world' }],
                n: 1,
                stop: '\n',
                temperature: 0.5,
                max_tokens: 200,
            });
            console.log('hello2');
            setApiResponse(result.choices[0].message);
      } catch (e) {
        //console.log(e);
        setApiResponse("Something is going wrong, Please try again.");
      }
      setLoading(false);
    };
  
  
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: '100vh',
          }}
        >
          <form onSubmit={handleSubmit}>
            <textarea
              type="text"
              value={prompt}
              placeholder="Please ask to openai"
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
            <button
              disabled={loading || prompt.length === 0}
              type="submit"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </form>
        </div>
        {apiResponse && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <pre>
              <strong>API response:</strong>
              {apiResponse}
            </pre>
          </div>
        )}
      </>
    );
  };
  
  
export default CenterCont;
