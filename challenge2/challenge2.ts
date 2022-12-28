function countHours(year: number, holidays: string[]): number {
    let extraHours: number = 0;

    for (const holiday of holidays) {
        const dayString: string = `${holiday}/${year}`;
        const dayOfTheWeek: number = new Date(dayString).getDay();

        if (dayOfTheWeek !== 0 && dayOfTheWeek !== 6) extraHours += 2;
    }

    return extraHours;
}


function optimizedCountHours(year: number, holidays: string[]): number {
    const weekendDays = [0, 6];
    let extraHours: number = 0;

    holidays.forEach((holiday) => {
        const dayOfTheWeek: number = new Date(`${holiday}/${year}`).getDay();
        if (!weekendDays.includes(dayOfTheWeek)) extraHours += 2;
    });

    return extraHours;
}
