import { TextInput } from "flowbite-react";
import { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import Select from "react-select";

const FilterOptions = ({ options: o, onChange = (data) => {} }) => {
    const formRef = useRef(null);
    const options = {
        genres: [
            { value: 1, label: "Action", count: 5228 },
            { value: 2, label: "Adventure", count: 4153 },
            { value: 5, label: "Avant Garde", count: 919 },
            { value: 46, label: "Award Winning", count: 251 },
            { value: 28, label: "Boys Love", count: 181 },
            { value: 4, label: "Comedy", count: 7435 },
            { value: 8, label: "Drama", count: 2961 },
            { value: 10, label: "Fantasy", count: 5917 },
            { value: 26, label: "Girls Love", count: 109 },
            { value: 47, label: "Gourmet", count: 187 },
            { value: 14, label: "Horror", count: 566 },
            { value: 7, label: "Mystery", count: 931 },
            { value: 22, label: "Romance", count: 2045 },
            { value: 24, label: "Sci-Fi", count: 3317 },
            { value: 36, label: "Slice of Life", count: 1643 },
            { value: 30, label: "Sports", count: 782 },
            { value: 37, label: "Supernatural", count: 1529 },
            { value: 41, label: "Suspense", count: 411 },
            { value: 9, label: "Ecchi", count: 810 },
            { value: 49, label: "Erotica", count: 75 },
            { value: 12, label: "Hentai", count: 1539 },
            { value: 50, label: "Adult Cast", count: 633 },
            { value: 51, label: "Anthropomorphic", count: 1059 },
            { value: 52, label: "CGDCT", count: 242 },
            { value: 53, label: "Childcare", count: 71 },
            { value: 54, label: "Combat Sports", count: 92 },
            { value: 81, label: "Crossdressing", count: 51 },
            { value: 55, label: "Delinquents", count: 73 },
            { value: 39, label: "Detective", count: 309 },
            { value: 56, label: "Educational", count: 292 },
            { value: 57, label: "Gag Humor", count: 254 },
            { value: 58, label: "Gore", count: 262 },
            { value: 35, label: "Harem", count: 480 },
            { value: 59, label: "High Stakes Game", count: 52 },
            { value: 13, label: "Historical", count: 1593 },
            { value: 60, label: "Idols (Female)", count: 328 },
            { value: 61, label: "Idols (Male)", count: 177 },
            { value: 62, label: "Isekai", count: 392 },
            { value: 63, label: "Iyashikei", count: 176 },
            { value: 64, label: "Love Polygon", count: 100 },
            { value: 65, label: "Magical Sex Shift", count: 31 },
            { value: 66, label: "Mahou Shoujo", count: 342 },
            { value: 17, label: "Martial Arts", count: 642 },
            { value: 18, label: "Mecha", count: 1283 },
            { value: 67, label: "Medical", count: 48 },
            { value: 38, label: "Military", count: 714 },
            { value: 19, label: "Music", count: 4611 },
            { value: 6, label: "Mythology", count: 647 },
            { value: 68, label: "Organized Crime", count: 96 },
            { value: 69, label: "Otaku Culture", count: 104 },
            { value: 20, label: "Parody", count: 786 },
            { value: 70, label: "Performing Arts", count: 120 },
            { value: 71, label: "Pets", count: 125 },
            { value: 40, label: "Psychological", count: 432 },
            { value: 3, label: "Racing", count: 257 },
            { value: 72, label: "Reincarnation", count: 147 },
            { value: 73, label: "Reverse Harem", count: 77 },
            { value: 74, label: "Romantic Subtext", count: 56 },
            { value: 21, label: "Samurai", count: 243 },
            { value: 23, label: "School", count: 2112 },
            { value: 75, label: "Showbiz", count: 44 },
            { value: 29, label: "Space", count: 645 },
            { value: 11, label: "Strategy Game", count: 333 },
            { value: 31, label: "Super Power", count: 722 },
            { value: 76, label: "Survival", count: 74 },
            { value: 77, label: "Team Sports", count: 313 },
            { value: 78, label: "Time Travel", count: 145 },
            { value: 32, label: "Vampire", count: 172 },
            { value: 79, label: "Video Game", count: 153 },
            { value: 80, label: "Visual Arts", count: 91 },
            { value: 48, label: "Workplace", count: 211 },
            { value: 43, label: "Josei", count: 156 },
            { value: 15, label: "Kids", count: 6651 },
            { value: 42, label: "Seinen", count: 1033 },
            { value: 25, label: "Shoujo", count: 495 },
            { value: 27, label: "Shounen", count: 2004 },
        ],
        years: [
            2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015,
            2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004,
            2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993,
            1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982,
            1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972, 1971,
            1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961, 1960,
            1959, 1958, 1957, 1956, 1955, 1954, 1953, 1952, 1951, 1950, 1949,
            1948, 1947, 1946, 1945, 1944, 1943, 1942, 1941, 1940, 1939, 1938,
            1937, 1936, 1935, 1934, 1933, 1932, 1931, 1930, 1929, 1928, 1927,
            1926, 1925, 1924, 1923, 1922, 1921, 1920, 1919, 1918, 1917,
        ],
        seasons: ["Winter", "Spring", "Summer", "Fall"],
        type: [
            { value: "tv", label: "TV Series" },
            { value: "movie", label: "Movie" },
            { value: "special", label: "Specials" },
            { value: "ova", label: "OVA" },
            { value: "ona", label: "ONA" },
            { value: "music", label: "Music" },
            { value: "tv_special", label: "TV Specials" },
            { value: "cm", label: "CM" },
            { value: "pv", label: "PV" },
        ],
        status: [
            { value: "airing", label: "Airing" },
            { value: "complete", label: "Completed" },
            { value: "upcoming", label: "Upcoming" },
        ],
    };

    const onStatusChange = ({
        query = "",
        genres = "",
        type = "",
        status = "",
    }) => {
        const form = formRef.current;
        const data = {
            query: query === "" ? form.query.value : query,
            genres: genres,
            type: type,
            status: status,
        };

        onChange(data);
    };

    return (
        <form
            className="flex gap-2 items-center justify-evenly flex-wrap mb-8"
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
                    placeholder="Search"
                    title="Search anime by name"
                    className="w-full"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onStatusChange({ query: e.target.value });
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
                    options={options.genres ?? []}
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
                    options={options.type ?? []}
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
                    options={options.status ?? []}
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
