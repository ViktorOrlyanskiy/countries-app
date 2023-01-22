import styled from "styled-components";

const StyledFlex = styled.div`
    display: flex;
    flex-direction: ${(p) => p.direction || "row"};
    align-items: ${(p) => p.align || "stretch"};
    justify-content: ${(p) => p.justify || "stretch"};
    gap: ${(p) => p.gap || "0"};
    margin: ${(p) => p.margin || "0"};
    padding: ${(p) => p.padding || "0"};
`;

export const Flex = (props) => <StyledFlex {...props} />;
