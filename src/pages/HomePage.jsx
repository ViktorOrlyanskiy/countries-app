import axios from "axios";
import { useEffect, useState, useTransition } from "react";
import { getAllCountries } from "api/api";
import { Card } from "components/Card";
import { Controls } from "components/Controls";
import { getCountryInfo } from "helpers/getCountryInfo";
import { List } from "ui-kit/List";

export const HomePage = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");

    const onChangeSearch = (v) => {
        startTransition(() => {
            setSearch(v);
        });
    };

    const onChangeRegion = (v) => {
        setRegion(v);
    };

    const sortCountries = (countries) => {
        let data = [...countries];

        if (search) {
            data = data.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()));
        }

        if (region) {
            data = data.filter((country) => country.region.includes(region));
        }

        return data;
    };

    useEffect(() => {
        if (!countries.length) {
            const response = axios.get(getAllCountries());
            response.then(({ data }) => setCountries(data)).catch((e) => console.log(e));
        }
    }, [countries]);

    return (
        <>
            <Controls search={search} onChangeSearch={onChangeSearch} onChangeRegion={onChangeRegion} />
            <List>
                {sortCountries(countries).map((country) => (
                    <Card key={country.name.official} {...getCountryInfo(country)} />
                ))}
            </List>
        </>
    );
};
