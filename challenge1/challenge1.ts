function wrapping(gifts: string[]) {

    const SYMBOL = "*";
    let wrappedGifts: string[] = [];

    gifts.forEach((gift: string) => {
        let wrappedGift: string = `\n${SYMBOL}${gift}${SYMBOL}\n`;

        for (let i: number = 0; i < gift.length + 2; i++) {
            wrappedGift = `${SYMBOL}${wrappedGift}${SYMBOL}`;
        }

        wrappedGifts.push(wrappedGift);
    });

    return wrappedGifts;
}
