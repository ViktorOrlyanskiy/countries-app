import styled from "styled-components";
import { getRouteCountry } from "consts/routes";
import { getUrlFromName } from "helpers/getUrlFromName";
import { Link } from "react-router-dom";
import { Image } from "ui-kit/Image";

const StContainer = styled(Link)`
    border-radius: var(--radius);
    background-color: var(--color-bg);
    box-shadow: var(--shadow);
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.02);
    }
`;

const StBody = styled.div`
    padding: 0.5rem;
`;

const StTitle = styled.h3`
    margin-bottom: 0.7rem;
`;

const StItem = styled.li`
    margin-bottom: 0.3rem;
    font-size: var(--fs-s);
    font-weight: var(--fw-light);

    & > b {
        font-weight: var(--fw-bold);
    }
`;

export const Card = ({ img, name, info = [] }) => {
    return (
        <StContainer to={getRouteCountry(getUrlFromName(name))}>
            <Image height={150} objetFit="contain" src={img} alt={name} />
            <StBody>
                <StTitle>{name}</StTitle>
                <ul>
                    {info.map((el) => (
                        <StItem key={el.title}>
                            <b>{el.title}:</b> {el.description}
                        </StItem>
                    ))}
                </ul>
            </StBody>
        </StContainer>
    );
};
