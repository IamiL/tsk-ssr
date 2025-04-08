import {useEffect, useState} from "react";
import MobileNavbar from "~/components/mobileNavbar/mobileNavbar";

interface Props {
    setVisible: (a: boolean) => void;
}

export default function MobileNavbarWrapper({setVisible}: Props) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);


    if (!isClient) {
        console.log('is not client');
        return <></>
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (!isMobile) {
        return <></>;
    }

    return <MobileNavbar setVisible={setVisible}/>
}