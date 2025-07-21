async function loadIcon(name) {
    try {
        const icon = await import(`../icons/${name}.svg`);
        return icon.default;
    } catch (e) {
        console.error(`Icon "${name}" not found`, e);
        return null;
    }
}

export { loadIcon };