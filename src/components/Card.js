import { makeStyles, Paper } from '@material-ui/core';
import AnnualPlan from './AnnualPlan';
import Hero from './Hero';
import Text from './Text';


const Card = () => {
    const classes = useStyle();
    return (
        <div>
            <Paper className={classes.card} elevation={0}>
                <div>
                    <Hero />
                    <Text />
                    <AnnualPlan />
                </div>
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
