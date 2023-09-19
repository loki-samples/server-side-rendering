import * as React from "react";
import { useState } from "react";

export const App = () => {
    const [isClient, setIsClient] = useState(false);

    React.useEffect(()=>{
        setIsClient(true);
    })
    return (
    <h1>
      {isClient ? 'Is Client' : 'Is Server'}
    </h1>
  );
}