import Header from "../header/header";
import Footer from "../footer/footer";

export default function Wrapper({children, location}: { children?: React.ReactNode, location: string }) {
    return <>
        <Header location={location}/>
        {children}
        <Footer/>
    </>
}