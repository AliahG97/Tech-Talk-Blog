module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    },
    formatTimeWithoutSeconds: (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        
        // Pad single digit minutes with a leading zero
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        return `${hours}:${minutes}`;
      },
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/
        ${new Date(date).getFullYear()}`;
    },
};