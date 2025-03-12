import dog from "./bird.jpg"
export function Dog(){
    return(
        <>
        <p>this is URL</p>
        <img src="https://cdn.pixabay.com/photo/2024/12/13/21/16/bird-9266166_640.jpg" alt="" />
        <p>this is local</p>
        <img src={dog} alt="" />
        <p>this is public</p>
        <img src="/bird.jpg" alt="" />
        </>
    )
}