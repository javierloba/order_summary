import { Link, makeStyles } from '@material-ui/core';

const CancelOrder = () => {
    const classes = useStyle();
    return (
        <div>
            <Link className={classes.cancel} href="#">
            Cancer order
            </Link>
        </div>
    )
}

const useStyle = makeStyles(theme => ({
    cancel: {
      display: "flex",
      justifyContent: "center",
      margin: theme.spacing(3),
      fontFamily: "Red Hat Display",
      fontWeight: "900",
      color: "#7280a7",
      "&:hover": {
        textDecoration: "none"
     },
    }
  }))

export default CancelOrder
