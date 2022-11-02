import React from "react"
import Data from "../Data"

function Meme() {

     /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */


    // const [memeImage , setImage] = React.useState("")
    
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(Data)
    
    function handleClick(){
        const memesList = allMemeImages.data.memes;
        const rand = Math.floor(Math.random()*memesList.length)
        const url = memesList[rand].url
        
        setMeme(prevValue => 
            ({
                ...prevValue,
                randomImage: url
            }))
        }
        function handleChange(event){
            const {name, value} = event.target
            setMeme(prevValue => 
                ({
                    ...prevValue,
                    [name]:value
                }))

    }


    return (
        <main>
             <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    onChange={handleChange} 
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button 
                    onClick={handleClick}
                    className="form--button"
                >
                
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top" >{meme.topText}</h2>
                <h2 className="meme--text bottom" >{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme