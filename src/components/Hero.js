import { makeStyles } from '@material-ui/core';
import Image from '../img/illustration-hero.svg';

const Hero = () => {
    const classes = useStyle();
    return (
        <div>
            <img className={classes.image} src={Image} alt="hero"></img>
        </div>
    )
}

const useStyle = makeStyles(theme => ({
    image: {
        objectFit: "cover",
        height: "162.4px",
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
        position: "relative",
        top: "-16px"
    }
  }))

export default Hero
