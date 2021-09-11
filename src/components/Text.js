import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const Text = () => {
    const classes = useStyle();
    return (
        <div>
            <Typography variant="h5" className={classes.title}>
            Order summary
            </Typography>
            <Typography className={classes.text}>
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
            </Typography>
        </div>
    )
}

const useStyle = makeStyles(theme => ({
    title: {
        textAlign: "center",
        fontWeight: "bold",
        margin: theme.spacing(2),
        fontFamily: "Red Hat Display"
    },
    text: {
        textAlign: "center",
        margin: theme.spacing(2, 4),
        fontFamily: "Red Hat Display"
    }
  }))

export default Text
