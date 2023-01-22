import { useState } from "react";
import { Flex } from "ui-kit/Flex";
import { Select } from "ui-kit/Select";
import { Search } from "./Search";

const options = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europa", label: "Europa" },
    { value: "Oceania", label: "Oceania" },
];

export const Controls = () => {
    const [search, setSearch] = useState("");
    const isDesktop = window.innerWidth > 767;
    return (
        <Flex
            direction={isDesktop ? "row" : "column"}
            gap="1rem"
            align="center"
            justify="space-between"
            margin="0 0 1rem"
        >
            <Search search={search} setSearch={setSearch} />
            <Select placeholder="Filter by Region" options={options} />
        </Flex>
    );
};
