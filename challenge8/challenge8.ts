function checkPart(part: string): boolean {
    if (part === part.split("").reverse().join("")) {
        return true;
    }

    for (let i: number = 0; i < part.length; i++) {
        const word: string = `${part.substring(0, i)}${part.substring(i + 1)}`;

        if (word === word.split("").reverse().join("")) {
            return true;
        }
    }

    return false;
}