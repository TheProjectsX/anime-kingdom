import { TextInput } from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import ReactSelect from "react-select";

const FilterOptions = ({
    filters = {},
    onChange = () => {},
    className = "",
}) => {
    const router = useRouter();
    const pathname = usePathname();

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
