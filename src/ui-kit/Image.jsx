import styled from "styled-components";

const StImage = styled.img`
    display: block;
    width: 100%;
    height: ${(p) => p.height || "100%"};
    object-fit: ${(p) => p.objectFit || "cover"};
    object-position: ${(p) => p.position || "center"};
`;

export const Image = (props) => <StImage {...props} />;
