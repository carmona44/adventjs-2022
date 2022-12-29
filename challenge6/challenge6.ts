function createCube(size: number): string {
    let cube: string = '';

    for (let i = 1; i <= size; i++) {
        cube = `${cube}${' '.repeat(size - i)}${'/\\'.repeat(i)}${'_\\'.repeat(size)}\n`;
    }

    for (let i = size; i > 0; i--) {
        cube = `${cube}${' '.repeat(size - i)}${'\\/'.repeat(i)}${'_/'.repeat(size)}\n`;
    }

    return cube.slice(0, cube.length - 1);
}