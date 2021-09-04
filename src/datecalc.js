// import {
//     DateTime
// } from "./luxon.js";

export const formatError = text => `
<span style="color: red;">
    ${text}
</span>
`;

let DateTime = luxon.DateTime;

export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate)
        // secondDate = [firstDate, firstDate = secondDate][0];
        [firstDate, secondDate] = [secondDate, firstDate];

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}

export const diffToHtml = diff => `
    <span> 
        ${diff.years ? 'Лет: ' + diff.years : ''} 
        ${diff.months ? 'Месяцев: ' + diff.months : ''} 
        ${diff.days ? 'Дней: ' + diff.days : ''}
    </span>
`;

// const now = DateTime.now()

// console.log(now.second)