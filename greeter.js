const greeter = (name, time) => {
    const hourOfDay = time.getHours();
    const nameTrimmed = name.trim();
    const nameCapitalised = nameTrimmed.charAt(0).toUpperCase() + nameTrimmed.slice(1);
    if (hourOfDay >= 6 && hourOfDay <= 12) return `Good Morning ${nameCapitalised}`;
    return `Hello ${nameCapitalised}`;
};

export default greeter;