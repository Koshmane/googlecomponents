import Location from './Location';
import BottomLeftMenu from './BottomLeftMenu';
import FooterText from './FooterText';
import BottomRightMenu from './BottomRightMenu';



const Footer = () => {
    return (
        <div style = {{marginTop:'100px'}}>
            <div style ={{display:'flex', gap:"15px", marginLeft:'250px'}}>
            <Location/>
            <BottomLeftMenu title = {"About"} />
            <BottomLeftMenu title = {"Advertising"} />
            <BottomLeftMenu title = {"Business"} />
            <BottomLeftMenu title = {"How Search Works"} />
            <FooterText />
            <BottomRightMenu title = {"Privacy"} />
            <BottomRightMenu title = {"Terms"} />
            <BottomRightMenu title = {"Settings"} />




        </div>

        </div>

    )

}


export default Footer;