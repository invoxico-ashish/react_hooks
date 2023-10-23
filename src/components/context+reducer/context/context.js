import React, { createContext } from "react";
const data = {};

const Context = createContext(data);
const Provider = Context.Provider;
const Consumer = Context.Consumer;

export { Provider, Consumer };
export default Context;
