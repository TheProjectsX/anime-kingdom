// Capitalize a String
const capitalizeWord = (word) => {
    if (!word) return ""; // Handle empty strings

    return (
        String(word).charAt(0).toUpperCase() +
        String(word).slice(1).toLowerCase()
    );
};

// Format a date string to : DD MM, YYYY
const formatDate = (dateString) => {
    if (!dateString) return "Unknown";

    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
};

// Convert seconds to Time: HH:MM:SS
const convertSecondsToTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    // Pad with leading zeros if necessary
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = secs.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

// Convert number to Percentage
const convertToPercentage = (decimal) => {
    const percentage = (decimal * 100).toFixed(0); // Multiplies by 100 and rounds to nearest whole number
    return `${percentage}%`; // Appends '%' symbol
};

// Format Number (1...9 -> 01...09)
const formatNumber = (num) => {
    const n = Number(num);
    return n >= 0 && n <= 9 ? `0${n}` : String(n);
};

export {
    capitalizeWord,
    formatDate,
    convertSecondsToTime,
    convertToPercentage,
    formatNumber,
};
