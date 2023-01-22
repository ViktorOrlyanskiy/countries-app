import axios from "axios";
import { useEffect, useState } from "react";
import { getAllCountries } from "api/api";
import { Card } from "components/Card";
import { Controls } from "components/Controls";
import { getCountryInfo } from "helpers/getCountryInfo";
import { List } from "ui-kit/List";

export const HomePage = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [filterRegion, setFilterRegion] = useState("");

    console.log(search);
    console.log(filterRegion);

    const onChangeSearch = (v) => {
        setSearch(v);
    };

    const onChangeFilterRegion = (v) => {
        setFilterRegion(v);
    };

    useEffect(() => {
        if (!countries.length) {
            const response = axios.get(getAllCountries());
            response.then(({ data }) => setCountries(data)).catch((e) => console.log(e));
        }
    }, [countries]);

    return (
        <>
            <Controls />
            <List>
                {countries.map((country) => (
                    <Card key={country.name.official} {...getCountryInfo(country)} />
                ))}
            </List>
        </>
    );
};
