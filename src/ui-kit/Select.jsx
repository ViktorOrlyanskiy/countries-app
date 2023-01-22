import styled from "styled-components";
import { Listbox } from "@headlessui/react";
import { useEffect, useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const StWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    color: var(--color-text);

    @media (min-width: 767px) {
        width: 150px;
    }
`;

const StTrigger = styled(Listbox.Button)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    padding: 0.7rem 1rem;

    border-radius: var(--radius);
    background-color: var(--color-ui-base);
    box-shadow: var(--shadow);
    text-align: start;
    color: var(--color-text);
`;

const StBody = styled(Listbox.Options)`
    position: absolute;
    left: 0;
    top: 62px;
    width: 100%;
    padding: 0.7rem 0;

    border-radius: var(--radius);
    background-color: var(--color-ui-base);
    box-shadow: var(--shadow);
    font-size: var(--fs-s);
`;

const StOption = styled(Listbox.Option)`
    padding: 0.5rem 1rem;
    color: ${(p) => p.selected && `grey`};
    font-weight: var(--fw-light);
    cursor: ${(p) => (!p.selected ? `pointer` : "default")};
    &:hover {
        background-color: ${(p) => !p.selected && `var(--color-text)`};
        color: ${(p) => (!p.selected ? `var(--color-bg)` : `grey`)};
    }
`;

export const Select = ({ placeholder, options, onChange }) => {
    const [selectedOption, setSelectedOption] = useState(placeholder);

    useEffect(() => {
        if (selectedOption !== placeholder) onChange(selectedOption === "All" ? "" : selectedOption);
    }, [placeholder, selectedOption, onChange]);

    return (
        <StWrapper>
            <Listbox value={selectedOption} onChange={setSelectedOption}>
                <StTrigger>
                    {selectedOption} <IoChevronDownSharp size={15} />
                </StTrigger>
                <StBody>
                    {options.map((option) => (
                        <StOption key={option.value} value={option.value} selected={selectedOption === option.value}>
                            {option.label}
                        </StOption>
                    ))}
                </StBody>
            </Listbox>
        </StWrapper>
    );
};
