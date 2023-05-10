import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import styled from "styled-components/macro";
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
          <NavLink href="/women">Women fsdfddssdfsd</NavLink>
          <NavLink href="/kids">Kidssdklsdfkfslsl</NavLink>
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
          <Dialog.Root open={showMobileMenu}>
            <Dialog.DialogTrigger>
              <UnstyledButton>
                <Icon
                  id="menu"
                  strokeWidth={2}
                  onClick={() => setShowMobileMenu(true)}
                />
                <VisuallyHidden>Menu</VisuallyHidden>
              </UnstyledButton>
            </Dialog.DialogTrigger>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description className="DialogDescription" />
              <Dialog.DialogClose>
                <UnstyledButton>
                  <Icon
                    id="close"
                    strokeWidth={2}
                    onClick={() => setShowMobileMenu(false)}
                  />
                  <VisuallyHidden>Close</VisuallyHidden>
                </UnstyledButton>
              </Dialog.DialogClose>
            </Dialog.Content>
          </Dialog.Root>
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
  overflow-x: auto;

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
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
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
  white-space: nowrap;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
