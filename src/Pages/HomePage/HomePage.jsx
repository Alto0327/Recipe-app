import "./HomePage.css";
import  WholePie from "./HomePageAssests/WholePie.png"
import pieslice from "./HomePageAssests/slice_of_pie.png";


function HomePage(){
    return(
        <>
            <div className="Welcome-page">

            <h1>Cook Like a chef in your own Kicthen</h1>
            <h3>Tell us what's in your fridge and we'll do the rest</h3>

            <h5>Already know what to make? Search for the recipe here</h5>
            </div>
            <img src={WholePie} alt="Left Pie" className="rightSide-img"/>

            <div className="scrolling-recipes">

                <div className="scroll-header">
                    <h3>Over 1850 Recipes</h3>
                    <h1>A Recipe for every</h1>
                    <h1>Preference and skill level</h1>
                </div>
            </div>
            <img src={pieslice} alt="Pie slice" className="LeftsidePie" />
        </>
    )
}

export default HomePage;