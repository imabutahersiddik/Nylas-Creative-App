export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export const truncateString = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    }
    return str;
};