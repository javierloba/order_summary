import { makeStyles } from '@material-ui/core';
import Card from './components/Card';
import Image from './img/pattern-background-desktop.svg'

function App() {

  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Card />
    </div>
  );
}
const useStyle = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "#f5f7ff",
    backgroundSize: "100vw",
  }
}))

export default App;
