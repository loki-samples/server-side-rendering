import React from "react";
import { useState } from "react";

export const App = () => {
    const [isClient, setIsClient] = useState(false);

    return(<h1>Is Server</h1>);
}