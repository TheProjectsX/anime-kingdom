import { TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Select from "react-select";

const FilterOptions = ({ options, onChange = (data) => {} }) => {
    const formRef = useRef(null);
    const [filterOptions, setFilterOptions] = useState({
        query: "",
        genres: "",
        type: "",
        status: "",
    });

    const onStatusChange = ({ genres, type, status } = {}) => {
        const form = formRef.current;
        const query = form.query.value;

        let data = filterOptions;

        data = {
            ...data,
            ...(query !== undefined ? { query: query } : {}),
            ...(genres !== undefined ? { genres: genres } : {}),
            ...(type !== undefined ? { type: type } : {}),
            ...(status !== undefined ? { status: status } : {}),
        };
        setFilterOptions(data);
        onChange(data);
    };

    return (
        <form
            className="flex gap-2 items-center justify-evenly flex-wrap mb-3"
            ref={formRef}
            onSubmit={(e) => {
                e.preventDefault();
                onStatusChange();
            }}
        >
            <label className="flex flex-col gap-1 w-full lg:w-auto">
                <span className="text-sm font-semibold text-gray-600 ml-2">
                    Search:
                </span>
                <TextInput
                    type="text"
                    name="query"
                    icon={IoSearch}
                    placeholder="Type name and press Enter..."
                    title="Search anime by name"
                    className="w-full"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onStatusChange();
                        }
                    }}
                />
            </label>

            <label className="flex flex-col gap-1 w-48">
                <span className="text-sm font-semibold text-gray-600 ml-2">
                    Genres:
                </span>
                <Select
                    isMulti={false}
                    name="genres"
                    options={options?.genres ?? []}
                    className="basic-multi-select w-full"
                    classNamePrefix="select"
                    placeholder="Any"
                    isClearable={true}
                    onChange={(item) =>
                        onStatusChange({ genres: item?.value ?? "" })
                    }
                />
            </label>

            <label className="flex flex-col gap-1 min-w-48">
                <span className="text-sm font-semibold text-gray-600 ml-2">
                    Type:
                </span>
                <Select
                    isMulti={false}
                    name="type"
                    options={options?.type ?? []}
                    className="basic-multi-select w-full"
                    classNamePrefix="select"
                    placeholder="Any"
                    isClearable={true}
                    isSearchable={false}
                    onChange={(item) =>
                        onStatusChange({ type: item?.value ?? "" })
                    }
                />
            </label>
            <label className="flex flex-col gap-1 min-w-48">
                <span className="text-sm font-semibold text-gray-600 ml-2">
                    Status:
                </span>
                <Select
                    isMulti={false}
                    name="status"
                    options={options?.status ?? []}
                    className="basic-multi-select w-full"
                    classNamePrefix="select"
                    placeholder="Any"
                    isClearable={true}
                    isSearchable={false}
                    onChange={(item) =>
                        onStatusChange({ status: item?.value ?? "" })
                    }
                />
            </label>
        </form>
    );
};

export default FilterOptions;
