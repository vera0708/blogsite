const formatDate = date => {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    console.log('formatDate =>date:', date)
    return new Intl.DateTimeFormat('ru', options)
        .format(new Date(date));
};

export default formatDate;