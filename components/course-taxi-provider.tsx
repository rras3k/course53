"use client"

import { createContext, useContext, useState } from "react"


export const HasProposition = createContext({
    hasProposition: false,
    setHasProposition: () => { },
})

export default function HasPropositionProvider({ children }: { children: React.ReactNode }) {
    const [hasProposition, setHasProposition] = useState(false)
    return <HasProposition.Provider value={valueHasProposition}> {children} </HasProposition.Provider>

}


export useHasPropositionContext = () => useContext(HasProposition)