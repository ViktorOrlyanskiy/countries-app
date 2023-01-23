import styled from "styled-components";

const StContainer = styled.div`
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 2rem;
`;

export const Container = (props) => <StContainer {...props} />;
