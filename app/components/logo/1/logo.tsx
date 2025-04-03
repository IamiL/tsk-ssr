import logo1 from './logo1.png';

export default function Logo1({id}: { id: string }) {
    return <img src={logo1} alt="Logo" style={{width: "100%"}} id={id}/>
}