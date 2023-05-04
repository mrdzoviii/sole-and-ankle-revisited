import styled from "styled-components";

import { COLORS } from "../constants";

import Icon from "./Icon";
import SearchInput from "./SearchInput";
import UnstyledButton from "./UnstyledButton";

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  display: flex;
  align-items: center;
  gap: 24px;
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;

  ${(p) => p.theme.queries.tabletAndDown} {
    display: none;
  }
`;

export default SuperHeader;
