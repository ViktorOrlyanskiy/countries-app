import { getNeighborsByCode } from "api/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getRouteCountry } from "consts/routes";
import { Button } from "ui-kit/Button";
import { Image } from "ui-kit/Image";
import { Flex } from "ui-kit/Flex";

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

const StTitle = styled.h1`
    font-weight: var(--fw-bold);
    font-size: var(--fs-xl);
    margin-bottom: 2rem;
`;

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
    gap: 1rem;
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

export const InfoCountry = (props) => {
    const {
        name,
        maps,
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
            <Image objectFit="contain" src={flags.png} alt={name} />
            <div>
                <Flex justify="space-between">
                    <StTitle>{name?.common}</StTitle>
                    <a target="_blank" href={maps?.googleMaps} rel="noreferrer">
                        <Button size_s>View on the map</Button>
                    </a>
                </Flex>

                <Flex gap="4rem">
                    <ul>
                        <StListItem>
                            <b>Population:</b> {population.toLocaleString()}
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
                        <StListItem></StListItem>
                    </ul>
                    <ul>
                        <StListItem>
                            <b>Currencies:</b> {Object.values(currencies).map((item) => item.name + " ")}
                        </StListItem>
                        <StListItem>
                            <b>Languages:</b> {Object.values(languages).map((item) => item + " ")}
                        </StListItem>
                    </ul>
                </Flex>
                <StMeta>
                    <div>
                        <b>Border Countries:</b>
                    </div>
                    {!borders.length ? (
                        <>There is no border countries</>
                    ) : (
                        <Flex wrap="wrap" gap="1rem">
                            {neighbors.map((name) => (
                                <Link to={getRouteCountry(name)} key={name}>
                                    <Button size_s>{name}</Button>
                                </Link>
                            ))}
                        </Flex>
                    )}
                </StMeta>
            </div>
        </StContainer>
    );
};
