const nthNumber = (number: number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
};

export function formattedDate(date: string) {
    const dateObj = new Date(date);
    const day = dateObj.getUTCDate();
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getFullYear();

    return `${month} ${day}${nthNumber(day)} ${year}`;
}

export function categoryFormatted(category: string) {
    return category.charAt(0).toUpperCase() + category.slice(1);
}

export function formattedNumber(number: number) {
    if (number < 10) {
        return `0${number}`;
    } else {
        return number.toString();
    }
}