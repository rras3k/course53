"use client"

import { createContext, Dispatch, SetStateAction, useContext, useRef, useState } from "react"


type ContextType = {
    hasProposition: boolean
    setHasProposition: Dispatch<SetStateAction<boolean>>,
};

// Création du contexte
export const CourseTaxiContext = createContext<ContextType>({ hasProposition: false, setHasProposition: () => { } })

// Installation du contexte
export default function CourseTaxiProvider({ children }: { children: React.ReactNode }) {
    const dejaFait = useRef(false)
    const [hasProposition, setHasProposition] = useState<boolean>(false)
    const valueHasProposition = {
        hasProposition: hasProposition,
        setHasProposition: setHasProposition
    }

    if (!dejaFait.current) {
        dejaFait.current = true
        const channelHasNotification = new BroadcastChannel('sw-hasNotification');
        channelHasNotification.addEventListener('message', event => {
            console.log('Received PROVIDER sw-hasNotification', event.data.hasProposition);
            setHasProposition(event.data.hasProposition);
        });
    }


    return <CourseTaxiContext.Provider value={valueHasProposition}> {children} </CourseTaxiContext.Provider>
}

// Consommation du contexte
export const useCourseTaxiContext = () => useContext(CourseTaxiContext)