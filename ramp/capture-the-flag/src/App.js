import React, { useEffect, useState } from "react";
import Typewriter from './components/Typewriter';
import collateFlagUrl from './helpers/get-url';
import captureTheFlag from './helpers/get-flag';

export default function App() {
  const [flag, setFlag] = useState(null);
  const challengeUrl = 'https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge';
  
  useEffect(() => {
    // Get the URL to the flag's site.
    collateFlagUrl(challengeUrl).then(
      res => {
        const url = res;
        // Get the flag.
        if (url) {
          captureTheFlag(url).then(
            res => {
              if (res) setFlag(res);
            },
            err => { console.error(err) }
          );
        }
      },
      err => { console.error(err) }
    );  
  }, []);

  return flag ? (
    <div className="App">
      <Typewriter flag={flag && typeof flag === 'string' ? flag : ''} />
    </div>
  )
  : 
  (
    <h1>Loading . . . </h1>
  )
}
