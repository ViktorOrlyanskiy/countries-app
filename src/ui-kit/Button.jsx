import styled from "styled-components";

const StButton = styled.button`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: var(--radius);
    background-color: var(--color-ui-base);
    box-shadow: var(--shadow);
    color: var(--color-text);
    cursor: pointer;
`;

export const Button = (props) => <StButton {...props} />;
