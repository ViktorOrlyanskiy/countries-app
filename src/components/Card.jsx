import { getRouteCountry } from "consts/routes";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StContainer = styled(Link)`
    border-radius: var(--radius);
    background-color: var(--color-bg);
    box-shadow: var(--shadow);
    cursor: pointer;
    overflow: hidden;
`;
const StImage = styled.img`
    display: block;
    width: 100%;
    height: 150px;
    object-position: center;
`;
const StBody = styled.div`
    padding: 0.5rem;
`;
const StTitle = styled.h3`
    margin-bottom: 0.7rem;
`;
const StList = styled.ul``;
const StItem = styled.li`
    margin-bottom: 0.3rem;
    font-size: var(--fs-s);
    font-weight: var(--fw-light);

    & > b {
        font-weight: var(--fw-bold);
    }
`;

export const Card = ({ img, name, info = [], onClick }) => {
    const getNameUrl = (name) => name.toLowerCase().replace(" ", "-");

    return (
        <StContainer to={getRouteCountry(getNameUrl(name))}>
            <StImage src={img} alt={name} />
            <StBody>
                <StTitle>{name}</StTitle>
                <StList>
                    {info.map((el) => (
                        <StItem key={el.title}>
                            <b>{el.title}:</b> {el.description}
                        </StItem>
                    ))}
                </StList>
            </StBody>
        </StContainer>
    );
};
