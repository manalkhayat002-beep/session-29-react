import { children, createContext } from "react";
export const GlopalStore = createContext()
export default function MainStore({children}){

    const values = {};
     return (
            <GlopalStore.Provider value={values}>{children}</GlopalStore.Provider>
        )
}

