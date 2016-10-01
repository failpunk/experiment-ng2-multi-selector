export default (selector: string): string => {
    let prefixes = [
        'splat',
        'one',
        'cbr',
        'ppc'
    ];

    return prefixes.map(prefix => `${prefix}-${selector}`).join(',');
};
