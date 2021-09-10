import { makeStyles, Paper } from '@material-ui/core';
import Hero from './Hero';


const Card = () => {
    const classes = useStyle();
    return (
        <div>
            <Paper className={classes.card} elevation={0}>
                <Hero />
            </Paper>
        </div>
    )
}

const useStyle = makeStyles(theme => ({
    card: {
      display: "flex",
      justifyContent: "center",
      width: "300px",
      height: "500px",
      padding: theme.spacing(2),
      margin: theme.spacing(2),
      borderRadius: "10px",
      boxShadow: "0px 15px 32px #D6E1FF"
    }
  }))

export default Card
