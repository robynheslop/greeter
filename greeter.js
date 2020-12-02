const formatName = name => {
    let trimmedName = name.trim();
    let nameArray = trimmedName.split(" ");
    let capitalisedName = nameArray.map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(" ");
    return capitalisedName;
}

const greeter = (name, time) => {
    if (time) {
        let hour = time.getHours();
        if (hour >= 6 && hour < 12) {
            return `Good Morning ${formatName(name)}`
        } else if (hour >= 18 && hour < 22) {
            return `Good Evening ${formatName(name)}`
        }
    }
    return `Hello ${formatName(name)}`
}

export default greeter;