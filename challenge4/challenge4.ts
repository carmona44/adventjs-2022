function fitsInOneBox(boxes: { l: number, w: number, h: number }[]): boolean {
    const orderedBoxes = boxes.sort((a, b) => a.l - b.l);

    for (let i: number = 0; i < orderedBoxes.length - 1; i++) {
        const currentBox = orderedBoxes[i];
        const nextBox = orderedBoxes[i + 1];

        if (currentBox.l >= nextBox.l || currentBox.w >= nextBox.w || currentBox.h >= nextBox.h) {
            return false;
        }
    }

    return true;
}