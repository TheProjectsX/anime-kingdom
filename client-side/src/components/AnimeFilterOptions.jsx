import { TextInput } from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Select from "react-select";

const AnimeFilterOptions = ({
    options,
    onChange = (data) => {},
    seasonal,
    slug,
}) => {
    const router = useRouter();
    const pathname = usePathname();

    const formRef = useRef(null);

    const [filterOptions, setFilterOptions] = useState({
        query: "",
        genres: "",
        type: "",
        status: "",
        ...(seasonal ? { year: slug.at(-2) } : {}),
        ...(seasonal ? { season: slug.at(-1) } : {}),
    });

    const onStatusChange = ({ genres, type, status, year, season } = {}) => {
        const form = formRef.current;
        const query = form.query?.value;

        let data = filterOptions;

        data = {
            ...data,
            ...(query !== undefined ? { query: query } : {}),
            ...(genres !== undefined ? { genres: genres } : {}),
            ...(type !== undefined ? { type: type } : {}),
            ...(status !== undefined ? { status: status } : {}),
            ...(year !== undefined ? { year: year } : {}),
            ...(season !== undefined ? { season: season } : {}),
        };

        setFilterOptions(data);
        onChange(data);
    };

    function capitalizeWord(word) {
        if (!word) return ""; // Handle empty strings

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    return (
        <form
            className="flex gap-2 items-center justify-evenly flex-wrap mb-3"
            ref={formRef}
            onSubmit={(e) => {
                e.preventDefault();
                onStatusChange();
            }}
        >
            {!seasonal && (
                <label className="flex flex-col gap-1 w-full lg:w-auto">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Search:
                    </span>
                    <TextInput
                        type="text"
                        name="query"
                        icon={IoSearch}
                        placeholder="Type name and press Enter..."
                        defaultValue={options?.query ?? ""}
                        title="Search anime by name"
                        className="w-full"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                const params = new URLSearchParams();
                                params.set("query", e.target.value);
                                router.push(`${pathname}?${params.toString()}`);

                                onStatusChange();
                            }
                        }}
                    />
                </label>
            )}

            {!seasonal && (
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
            )}
            {seasonal && (
                <label className="flex flex-col gap-1 w-48">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Year:
                    </span>
                    <Select
                        isMulti={false}
                        name="year"
                        defaultValue={{
                            label: slug.at(-2),
                            value: slug.at(-2),
                        }}
                        options={
                            options?.years?.map((item) => ({
                                value: item,
                                label: item,
                            })) ?? []
                        }
                        className="basic-multi-select w-full"
                        classNamePrefix="select"
                        placeholder="Any"
                        // isClearable={true}
                        onChange={(item) =>
                            onStatusChange({ year: item?.value ?? "" })
                        }
                    />
                </label>
            )}
            {seasonal && (
                <label className="flex flex-col gap-1 w-48">
                    <span className="text-sm font-semibold text-gray-600 ml-2">
                        Season:
                    </span>
                    <Select
                        isMulti={false}
                        name="season"
                        defaultValue={{
                            label: capitalizeWord(slug.at(-1)),
                            value: slug.at(-1),
                        }}
                        options={
                            options?.seasons?.map((item) => ({
                                label: capitalizeWord(item),
                                value: item.toLowerCase(),
                            })) ?? []
                        }
                        className="basic-multi-select w-full"
                        classNamePrefix="select"
                        placeholder="Any"
                        // isClearable={true}
                        onChange={(item) =>
                            onStatusChange({ season: item?.value ?? "" })
                        }
                    />
                </label>
            )}
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
            {!seasonal && (
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
            )}
        </form>
    );
};

export default AnimeFilterOptions;
