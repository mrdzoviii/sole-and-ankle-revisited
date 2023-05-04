import styled from "styled-components/macro";

import { useState } from "react";
import { COLORS, WEIGHTS } from "../constants";
import Icon from "./Icon";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SuperHeader from "./SuperHeader";
import UnstyledButton from "./UnstyledButton";
import VisuallyHidden from "./VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" strokeWidth={2} />
            <VisuallyHidden>Open Cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon
              id="menu"
              strokeWidth={2}
              onClick={() => setShowMobileMenu(true)}
            />
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const LogoWrapper = styled.div`
  flex: 1;
  ${(p) => p.theme.queries.tabletAndDown} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;
  ${(p) => p.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const MainHeader = styled.div`
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  align-items: baseline;
  height: 72px;

  ${(p) => p.theme.queries.tabletAndDown} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
    align-items: center;
  }

  ${(p) => p.theme.queries.phoneAndDown} {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  ${(p) => p.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;
  ${(p) => p.theme.queries.tabletAndDown} {
    display: flex;
    gap: 32px;
  }

  ${(p) => p.theme.queries.phoneAndDown} {
    gap: 16px;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
