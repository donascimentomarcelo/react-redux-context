
import { createContext, useState, useContext } from 'react';

const ImageUserContext = createContext({});

export const ImageUserProvider = ({ children }) => {
    const [image, setImage] = useState({ url: "/images/user-unknown.png" });

    const updateImage = (url) => setImage(url);

    return (
        <ImageUserContext.Provider value={{ image, updateImage }}>
            {children}
        </ImageUserContext.Provider>
    );
};

export const useImageUser = () => {
    const { image, updateImage } = useContext(ImageUserContext);

    return {
        image,
        updateImage
    };
};