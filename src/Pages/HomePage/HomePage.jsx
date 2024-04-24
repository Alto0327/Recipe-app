import "./HomePage.css";
import  WholePie from "./HomePageAssests/WholePie.png"
function HomePage(){
    return(
        <>
            <h1>Cook Like a chef in your own Kicthen</h1>
            <h3>Tell us what's in your fridge and we'll do the rest</h3>

            <h5>Already know what to make? Search for the recipe here</h5>
            <img src={WholePie} alt="" className="rightSide-img"/>
        </>
    )
}

export default HomePage;