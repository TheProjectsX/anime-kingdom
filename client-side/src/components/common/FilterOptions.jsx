import { capitalizeWord } from "@/utils/HelperFunctions";
import { TextInput } from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import ReactSelect from "react-select";

const FilterOptions = ({
    filters = {},
    onChange = () => {},
    preset = {},
    className = "",
}) => {
    const router = useRouter();
    const pathname = usePathname();

    const findItemAndConvert = (arr, item) => {
        const found = arr.find(
            (i) => String(i).toLowerCase() === String(item).toLowerCase()
        );
        return found ? { value: found, label: capitalizeWord(found) } : {};
    };

    return (
        <form
            className={`flex gap-2 items-center justify-evenly flex-wrap ${className}`}
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
                    defaultValue={filters?.query ?? ""}
                    title="Search anime by name"
                    className="w-full"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            const params = new URLSearchParams();
                            params.set("query", e.target.value);
                            router.push(`${pathname}?${params.toString()}`);

                            onChange({ query: e.target.value });
                        }
                    }}
                />
            </label>

            {filters.years && (
                <label className="flex flex-col gap-1 w-48">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Year:
                    </span>
                    <ReactSelect
                        isMulti={false}
                        name="year"
                        defaultValue={findItemAndConvert(
                            filters?.years,
                            preset?.year
                        )}
                        options={(filters?.years ?? []).map((item) => ({
                            label: item,
                            value: item,
                        }))}
                        className="basic-multi-select w-full"
                        classNamePrefix="select"
                        placeholder="Any"
                        isClearable={true}
                        isSearchable={false}
                        onChange={(item) =>
                            onChange({ year: item?.value ?? "" })
                        }
                    />
                </label>
            )}

            {filters.seasons && (
                <label className="flex flex-col gap-1 w-48">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Season:
                    </span>
                    <ReactSelect
                        isMulti={false}
                        name="season"
                        defaultValue={findItemAndConvert(
                            filters?.seasons,
                            preset?.season
                        )}
                        options={(filters?.seasons ?? []).map((item) => ({
                            label: capitalizeWord(item),
                            value: item,
                        }))}
                        className="basic-multi-select w-full"
                        classNamePrefix="select"
                        placeholder="Any"
                        isClearable={true}
                        isSearchable={false}
                        onChange={(item) =>
                            onChange({ season: item?.value ?? "" })
                        }
                    />
                </label>
            )}

            {filters.genres && (
                <label className="flex flex-col gap-1 w-48">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Genres:
                    </span>
                    <ReactSelect
                        isMulti={false}
                        name="genres"
                        options={filters?.genres ?? []}
                        className="basic-multi-select w-full"
                        classNamePrefix="select"
                        placeholder="Any"
                        isClearable={true}
                        onChange={(item) =>
                            onChange({ genres: item?.value ?? "" })
                        }
                    />
                </label>
            )}

            {filters.type && (
                <label className="flex flex-col gap-1 min-w-48">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Type:
                    </span>
                    <ReactSelect
                        isMulti={false}
                        name="type"
                        options={filters?.type ?? []}
                        className="basic-multi-select w-full"
                        classNamePrefix="select"
                        placeholder="Any"
                        isClearable={true}
                        isSearchable={false}
                        onChange={(item) =>
                            onChange({ type: item?.value ?? "" })
                        }
                    />
                </label>
            )}

            {filters.status && (
                <label className="flex flex-col gap-1 min-w-48">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Status:
                    </span>
                    <ReactSelect
                        isMulti={false}
                        name="status"
                        options={filters?.status ?? []}
                        className="basic-multi-select w-full"
                        classNamePrefix="select"
                        placeholder="Any"
                        isClearable={true}
                        isSearchable={false}
                        onChange={(item) =>
                            onChange({ status: item?.value ?? "" })
                        }
                    />
                </label>
            )}
        </form>
    );
};

export default FilterOptions;
