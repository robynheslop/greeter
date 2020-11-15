const greeter = name => {
    const nameTrimmed = name.trim();
    const nameCapitalised = nameTrimmed.charAt(0).toUpperCase() + nameTrimmed.slice(1);
    return `Hello ${nameCapitalised}`;
};

export default greeter;