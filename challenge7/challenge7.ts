function getGiftsToRefill(a1: string[], a2: string[], a3: string[]): string[] {
    const inventary: string[] = [...new Set(a1), ...new Set(a2), ...new Set(a3)];
    return inventary.filter(gift => inventary.filter(x => x === gift).length === 1);
}