import { makeStyles, Paper } from '@material-ui/core';
import AnnualPlan from './AnnualPlan';
import CancelOrder from './CancelOrder';
import Hero from './Hero';
import PaymentButton from './PaymentButton';
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
                    <PaymentButton />
                    <CancelOrder />
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
      height: "520px",
      padding: theme.spacing(2),
      margin: theme.spacing(2),
      borderRadius: "10px",
      boxShadow: "0px 15px 20px 0px #e0e8ff"
    }
  }))

export default Card
