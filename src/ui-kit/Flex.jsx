import styled from "styled-components";

const StFlex = styled.div`
    display: flex;
    flex-direction: ${(p) => p.direction || "row"};
    align-items: ${(p) => p.align || "stretch"};
    justify-content: ${(p) => p.justify || "stretch"};
    gap: 1rem;
    flex-wrap: ${(p) => p.wrap || "no-wrap"};
    margin: ${(p) => p.margin || "0"};
    padding: ${(p) => p.padding || "0"};

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: ${(p) => p.gap || "1rem"};
    }
`;

export const Flex = (props) => <StFlex {...props} />;
