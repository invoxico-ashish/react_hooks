import React from "react";

const data = {
    id: "117",
    name: "ashish",
    department: ["A", "B", "C"]
};
const Context = React.createContext(data);
const Provider = Context.Provider;
const Consumer = Context.Consumer
export { Provider, Consumer };

export default Context; 