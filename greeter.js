const formatName = name => {
    let trimmedName = name.trim();
    let nameArray = trimmedName.split(" ");
    let capitalisedName = nameArray.map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(" ");
    return capitalisedName;
}

const greeter = name => {
    return `Hello ${formatName(name)}`
}

export default greeter;