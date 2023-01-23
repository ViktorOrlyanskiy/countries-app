import { getNeighborsByCode } from "api/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "ui-kit/Button";
import { getRouteCountry } from "consts/routes";
const StContainer = styled.section`
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;
    width: 100%;
    margin-top: 2rem;

    @media (min-width: 767px) {
        grid-template-columns: minmax(100px, 300px) 1fr;
        align-items: center;
        gap: 5rem;
    }
    @media (min-width: 1024px) {
        grid-template-columns: minmax(300px, 400px) 1fr;
    }
`;
const StImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
const StTitle = styled.h1`
    font-weight: var(--fw-bold);
    font-size: var(--fs-xl);
    margin-bottom: 2rem;
`;
const StListGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 4rem;
    }
`;
const StList = styled.ul``;
const StListItem = styled.li`
    padding: 0.3rem;
    font-weight: var(--fw-light);

    & > b {
        font-weight: var(--fw-bold);
    }
`;
const StMeta = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
    margin-top: 2rem;

    & > b {
        font-weight: var(--fw-bold);
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
    }
`;
const StTagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

export const InfoCountry = (props) => {
    const {
        name,
        nativeName,
        flags,
        capital,
        population,
        region,
        subregion,
        currencies = [],
        languages = [],
        borders = [],
    } = props;

    const [neighbors, setNeighbors] = useState([]);

    useEffect(() => {
        if (borders.length > 0) {
            const response = axios.get(getNeighborsByCode(borders));
            response
                .then(({ data }) => setNeighbors(data.map((neighbor) => neighbor.name.common)))
                .catch((e) => console.log(e));
        }
    }, [borders]);

    if (!name) {
        return null;
    }

    return (
        <StContainer>
            <StImage src={flags.png} alt={name} />
            <div>
                <StTitle>{name?.common}</StTitle>
                <StListGroup>
                    <StList>
                        <StListItem>
                            <b>Native Name:</b> {nativeName}
                        </StListItem>
                        <StListItem>
                            <b>Population:</b> {population}
                        </StListItem>
                        <StListItem>
                            <b>Region:</b> {region}
                        </StListItem>
                        <StListItem>
                            <b>Sub Region:</b> {subregion}
                        </StListItem>
                        <StListItem>
                            <b>Capital:</b> {capital}
                        </StListItem>
                    </StList>
                    <StList>
                        <StListItem>
                            <b>Currencies:</b> {Object.values(currencies).map((item) => item.name + " ")}
                        </StListItem>
                        <StListItem>
                            <b>Languages:</b> {Object.values(languages).map((item) => item + " ")}
                        </StListItem>
                    </StList>
                </StListGroup>
                <StMeta>
                    <b>Border Countries:</b>
                    {!borders.length ? (
                        <>There is no border countries</>
                    ) : (
                        <StTagGroup>
                            {neighbors.map((name) => (
                                <Link to={getRouteCountry(name)} key={name}>
                                    <Button>{name}</Button>
                                </Link>
                            ))}
                        </StTagGroup>
                    )}
                </StMeta>
            </div>
        </StContainer>
    );
};
