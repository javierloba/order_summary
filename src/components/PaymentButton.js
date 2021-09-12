import { Button, makeStyles } from '@material-ui/core'

const PaymentButton = () => {
    const classes = useStyle();
    return (
        <Button className={classes.button} variant="contained" color="primary" disableElevation>
        Proceed to Payment
      </Button>

    )
}
const useStyle = makeStyles(theme => ({
    button: {
        backgroundColor: "#3829e0",
        width: "82%",
        height: "45px",
        display: "flex",
        alignItems: "center",
        margin: "20px auto",
        textTransform: "capitalize",
        fontFamily: "Red Hat Display",
        fontWeight: "700",
        borderRadius: "10px",
        boxShadow: "0px 20px 20px 0px #e0e8ff",
        "&:hover": {
            opacity: "75%",
            boxShadow: "0px 20px 20px 0px #e0e8ff"
         },
    }
  }))

export default PaymentButton