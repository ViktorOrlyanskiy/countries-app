import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCountryByName } from "api/api";
import { getNameFromUrl } from "helpers/getNameFromUrl";
import { Button } from "ui-kit/Button";
import { IoArrowBackOutline } from "react-icons/io5";
import { InfoCountry } from "components/InfoCountry";
import { getRouteHome } from "consts/routes";

export const CountryPage = () => {
    const { name } = useParams();
    const [country, setCountry] = useState();

    useEffect(() => {
        if (name) {
            const response = axios.get(getCountryByName(getNameFromUrl(name)));
            response.then(({ data }) => setCountry(data[0])).catch((e) => console.log(e));
        }
    }, [name]);
    return (
        <div>
            <Link to={getRouteHome()}>
                <Button>
                    <IoArrowBackOutline />
                    Back
                </Button>
            </Link>

            <InfoCountry {...country} />
        </div>
    );
};
