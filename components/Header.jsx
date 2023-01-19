import styled from "styled-components";
import { TextInput, Header as GmtHeader, Button, Menu } from "grommet";
import { Home } from "grommet-icons";
import SearchBar from "./SearchBar";
import { colors } from "../helpers/colors";

const HeaderBar = styled.div`
  background: #87d1d4;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  border-bottom: 3px solid ${colors.lightGrey};
`;

const HeaderBarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const SearchDiv = styled.div`
  width: 300px;
`;

const Header = () => (
  // <HeaderBar>
  //   <HeaderBarContent>
  //     <SearchDiv>
  //       <SearchBar />
  //     </SearchDiv>
  //   </HeaderBarContent>
  // </HeaderBar>
  <GmtHeader
    background={colors.lightBlue}
    style={{ height: "75px" }}
    justify="evenly"
  >
    <Button icon={<Home />} hoverIndicator />
    <SearchBar />
    <Menu label="account" items={[{ label: "logout" }]} />
  </GmtHeader>
);

export default Header;
