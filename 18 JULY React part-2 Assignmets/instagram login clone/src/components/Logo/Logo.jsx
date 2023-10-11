import '../Logo/Logo.css'
function Logo({src, alt}){
    return (
        <>
            <img className="logo" src={src} alt={alt} />
        </>
    )
}

export default Logo