import { Link, makeStyles, Paper, Typography } from '@material-ui/core';
import Icon from '../img/icon-music.svg';

const AnnualPlan = () => {
    const classes = useStyle();
    return (
        <Paper elevation={0} className={classes.container}>
            <img className={classes.icon} src={Icon} alt="icon"></img>
            <div className={classes.text}>
                <Typography className={classes.title}>
                Annual Plan
                </Typography>
                <Typography className={classes.price}>
                $59.99/year
                </Typography>
            </div>
            <Link className={classes.link} href="#">
            Change
            </Link>
        </Paper>
    )
}

const useStyle = makeStyles(theme => ({
    container: {
        backgroundColor: "#f5f7ff",
        width: "82%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        margin: "0 auto"
    },
    link: {
        fontFamily: "Red Hat Display",
        fontWeight: "700",
        fontSize: ".9em",
        color: "#3829e0",
        margin: theme.spacing(2),
        textDecoration: "underline #3829e0",
        "&:hover": {
            textDecoration: "none",
            color: "#7280a7"
         },
    },

    text: {
        margin: theme.spacing(0, 4, 0, 0)
    },
    title: {
        fontFamily: "Red Hat Display",
        fontSize: ".8em",
        fontWeight: "900",
    },
    price: {
        fontFamily: "Red Hat Display",
        fontSize: ".8em",
        color: "#7280a7",
    },
    icon: {
      display: "flex",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      margin: theme.spacing(2)
    }
  }))

export default AnnualPlan
