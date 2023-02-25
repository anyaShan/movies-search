import { AppWrap, NavWrap, NavItem } from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppWrap>
      <NavWrap>
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </NavWrap>
    </AppWrap>
  );
};
