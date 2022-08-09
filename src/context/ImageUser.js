
import { createContext, useState, useContext } from 'react';

export const ImageUserContext = createContext({});

export const ImageUserProvider = ({ children }) => {
    const [image, setImage] = useState({ url: "/images/user-unknown.png" });

    const updateImage = (url) => setImage(url);

    return (
        <ImageUserContext.Provider value={{ image, updateImage }}>
            {children}
        </ImageUserContext.Provider>
    );
};