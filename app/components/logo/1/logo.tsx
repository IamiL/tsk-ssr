export default function Logo1({id}: { id: string }) {
    // return <img src={logo1} alt="Logo" style={{width: "100%"}} id={id}/>
    return <video loop width="100%" autoPlay muted id={id}>
        {/*<source src={"/video4.mov"}*/}
        {/*        type='video/quicktime'/>*/}
        <source src='/logo.webm'
                type='video/webm'/>
    </video>
}