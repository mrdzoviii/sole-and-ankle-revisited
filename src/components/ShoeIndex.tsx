import styled from "styled-components/macro";

import { WEIGHTS } from "../constants";

import Breadcrumbs from "./Breadcrumbs";
import Select from "./Select";
import ShoeGrid from "./ShoeGrid";
import ShoeSidebar from "./ShoeSidebar";
import Spacer from "./Spacer";

interface ShoeIndexProps {
  sortId: string;
  setSortId: (sortId: string) => void;
}

const ShoeBreadcrumbs = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs>
  );
};

const ShoeIndex = ({ sortId, setSortId }: ShoeIndexProps) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <MobileBreadcrumbs>
              <ShoeBreadcrumbs />
            </MobileBreadcrumbs>
            <Title>Running</Title>
          </div>
          <DesktopSearch>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </DesktopSearch>
        </Header>
        <Spacer size={34} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <DesktopBreadcrumbs>
          <ShoeBreadcrumbs />
        </DesktopBreadcrumbs>

        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const DesktopSearch = styled.div`
  ${(p) => p.theme.queries.phoneAndDown} {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  ${(p) => p.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  ${(p) => p.theme.queries.tabletAndDown} {
    align-items: flex-end;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const DesktopBreadcrumbs = styled.div`
  ${(p) => p.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const MobileBreadcrumbs = styled.div`
  display: none;
  ${(p) => p.theme.queries.tabletAndDown} {
    display: revert;
  }
`;

export default ShoeIndex;
