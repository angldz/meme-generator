export default function Meme() {
    function handleClick() {
            console.log("I was clicked!")
        }
    function onMemeImageOver() {
        console.log("I was pooping!");
    }
    return (
        <div className="meme-container">
            <div className="input-container">
                <input className="input-left"></input>
                <input className="input-right"></input>
            </div>
            <div className="button-container">
                <button>Get a new meme image 🖼</button>
                <button onClick={handleClick}>Click me</button>
            </div>
            <div className="meme-image">
                <img onMouseOver={onMemeImageOver} src="https://picsum.photos/640/360" />
            </div>

        </div>
    )

    // return (
    //     <main>
    //         <form className="form">
    //             <input
    //                 type="text"
    //                 placeholder="Top text"
    //                 className="form--input"
    //             />
    //             <input
    //                 type="text"
    //                 placeholder="Bottom tect "
    //                 className="form--input"
    //              />
    //             <button className="form--button">Get a new meme image 🖼</button>
    //         </form>
    //     </main>
    // )


}

