import star from "../Assets/Stars.svg"
const Stars = () => {
    return ( 
        <div className="flex">
            <img src={star} alt="" className="star2 ml-[0px]"/>
            <img src={star} alt="" className="star2"/>
            <img src={star} alt="" className="star2"/>
            <img src={star} alt="" className="star2"/>
            <img src={star} alt="" className="star2"/>

        </div>
     );
}
 
export default Stars;