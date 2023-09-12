import "./new-collection.css" 
function TitleHome() {
    return (
        <h1 style={{fontSize:"1.5rem"}}>The New Collection is Here</h1>
    )
}
function Button() {
    return (
        <div className="btn">
            <button>DISCVOR</button>
        </div>
    )
}
function Collection() {
    return (
        <div>
            <div className="style-home s">
                <div>
                    <TitleHome></TitleHome><br></br>
                    <p style={{fontSize:"1rem",textAlign:"center",color:"white"}}>See what’s hot for the season</p>
                </div>
                <div>
                    <Button></Button>
                </div>
            </div>

        </div>
    )
}
export default Collection;