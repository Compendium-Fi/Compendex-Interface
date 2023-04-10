import React, { createContext, useContext, useState } from 'react';

interface SideBarContextData {
    isOpen: boolean;
    openSidebar(): void;
    closeSidebar(): void;
}

const SideBarContext = createContext<SideBarContextData>({} as SideBarContextData);

export const SideBarProvider = ({ children }: { children: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    function openSidebar() {
        setIsOpen(true);
    }

    function closeSidebar() {
        setIsOpen(false);
    }

    return (
        <SideBarContext.Provider value={{ isOpen, openSidebar, closeSidebar }}>
            {children}
        </SideBarContext.Provider>
    );
};

export function useSideBar() {
    const context = useContext(SideBarContext);

    if (!context) {
        throw new Error('useSideBar must be used within a SideBarProvider');
    }

    return context;
}