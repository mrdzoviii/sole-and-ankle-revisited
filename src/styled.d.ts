// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    queries: {
      phoneAndDown: string;
      tabletAndDown: string;
      laptopAndDown: string;
    };
  }
}
