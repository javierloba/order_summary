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
        width: "80%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        margin: "0 auto"
    },
    link: {
        fontFamily: "Red Hat Display",
        fontWeight: "700",
        margin: theme.spacing(2)
    },
    text: {
        margin: theme.spacing(0, 4, 0, 0)
    },
    title: {
        fontSize: ".8em",
        fontWeight: "900"
    },
    price: {
        fontSize: ".8em"
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
