const Card = ({image}) => {
    return (
        <div className="main">
            <center><h1><b>IMAGES</b></h1></center>
            <div className="card" style={{backgroundImage:`url(${image})`}}>

            </div>
        </div>
     );
}
 
export default Card;