import { ImageUserContext } from './../context/ImageUser';
import { useContext } from 'react';

export const useImageUser = () => {
    const { image, updateImage } = useContext(ImageUserContext);

    return {
        image,
        updateImage
    };
};