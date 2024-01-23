const formatTitle = (title: string) => {
    const parts = title.split('/');
    if (parts.length > 1) {
        const name = parts[1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return name;
    }
    return title;
};

export {
    formatTitle
}