import { Dialog } from "@headlessui/react";
import styled from "styled-components/macro";
import { COLORS } from "../constants";
import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";
import VisuallyHidden from "./VisuallyHidden";

interface MobileMenuProps {
  isOpen: boolean;
  onDismiss: () => void;
}

const MobileMenu = ({ isOpen, onDismiss }: MobileMenuProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onClose={onDismiss}>
      <Backdrop />
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} size={24} />
          <VisuallyHidden>Close menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Navigation>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Navigation>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Dialog>
  );
};

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0px;
  padding: 16px;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  font-size: 1.125rem;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;

  &:focus,
  &:hover {
    color: ${COLORS.secondary};
  }
`;

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  font-size: 0.875rem;
  text-decoration: none;
  font-weight: 500;

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  background-color: hsla(220, 5%, 40%, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
`;

const Content = styled.div`
  position: fixed;
  margin-left: 20px;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 16px 32px 32px;
`;

export default MobileMenu;
