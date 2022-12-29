function distributeGifts(packOfGifts: string[], reindeers: string[]): number {
    const giftsWeight: number = packOfGifts.reduce((a, b) => a + b.length, 0);
    const reindeersWeight: number = reindeers.reduce((a, b) => a + b.length, 0) * 2;

    return Math.floor(reindeersWeight / giftsWeight);
}