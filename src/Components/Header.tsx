import {type ReactNode } from 'react';

interface Image {
    src : string; 
    alt: string;
}

interface HeaderType {
    image : Image;
    children: ReactNode;

}

export default function Header ({image , children}:HeaderType) {
    return (
        <>
        <header>
            <img {...image}/>
            {children}
        </header>
        </>
    )

}