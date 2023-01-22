import { Flex } from "ui-kit/Flex";
import { Select } from "ui-kit/Select";
import { Search } from "./Search";

const options = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europa", label: "Europa" },
    { value: "Oceania", label: "Oceania" },
    { value: "All", label: "All" },
];

export const Controls = ({ onChangeSearch, onChangeRegion }) => {
    const isDesktop = window.innerWidth > 767;
    return (
        <Flex
            direction={isDesktop ? "row" : "column"}
            gap="1rem"
            align="center"
            justify="space-between"
            margin="0 0 1rem"
        >
            <Search changeSearch={onChangeSearch} />
            <Select placeholder="Filter by Region" options={options} onChange={onChangeRegion} />
        </Flex>
    );
};
