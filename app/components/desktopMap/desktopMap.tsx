import './desktopMap.css'
import map from "./../map/map.png";
import PointCart from "./../point/cart/cart";

export default function DesktopMap() {
    return <>
        <img id='map' src={map} alt="Map" width={400} height={200}/>
        <PointCart id={'point1'}/>
        <PointCart id={'point2'}/>
        <PointCart id={'point3'}/>
        <PointCart id={'point4'}/>
        <PointCart id={'point5'}/>
        <PointCart id={'point6'}/>
        <PointCart id={'point7'}/>
        <PointCart id={'point8'}/>
    </>
}