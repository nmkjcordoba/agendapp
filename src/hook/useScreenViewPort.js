import { useEffect, useState } from "react";
import { SCREEN_VIEWPORT } from "../constants/ViewPort";
//Este hook es para saber si la pantalla es desktop o no
export const useScreenViewPort = () => {

    const [screenViewPort, setScreenViewPort] = useState(false);

    useEffect(() => {

        const handleResize = () => {
            console.log("handleresize")
            const isDesktop = window.innerWidth > 768;
            setScreenViewPort(isDesktop ? SCREEN_VIEWPORT.DESKTOP : SCREEN_VIEWPORT.MOBILE);
        }
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
        
    },[])

    return { screenViewPort };
}
