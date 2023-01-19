import { Grommet } from "grommet";
import GameLibAppBar from "../components/GameLibAppBar.jsx";

const grommetTheme = {
  global: {
    colors: {
      border: "#1e1e1e",
      placeholder: "white",
    },
    control: {
      border: {
        color: "#1e1e1e",
      },
    },
    focus: {
      border: {
        color: "#1e1e1e",
      },
    },
  },
};

const PageLayout = ({ children }) => {
  return (
    <Grommet theme={grommetTheme}>
      {/* <Header /> */}
      <GameLibAppBar />
      {children}
    </Grommet>
  );
};

export default PageLayout;
