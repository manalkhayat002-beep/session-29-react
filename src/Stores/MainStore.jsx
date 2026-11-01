import { Children, createContext } from "react";
export const GlopalStore = createContext()
export default function MainStore({Children}){

    const values = {};
     return (
            <GlopalStore.Provider values={values}>{Children}</GlopalStore.Provider>
        )
}

