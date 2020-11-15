import greeter from "./greeter";

const date = new Date();
date.setHours(15);
date.setMinutes(0);

describe("greeter", () => {
    it("receives name and returns 'hello name'", () => {
        expect(greeter("Robyn", date)).toBe("Hello Robyn");
    });
    it("returns trimmed input", () => {
        expect(greeter("    Robyn    ", date)).toBe("Hello Robyn")
    });
    it("returns first letter of name capitalised", () => {
        expect(greeter("robyn", date)).toBe("Hello Robyn");
    });
    it("returns Good Morning <name> if time is 06:00 - 12:00", () => {
        date.setHours(7);
        expect(greeter("Robyn", date)).toBe("Good Morning Robyn");
    });
    it("returns Good Evening <name> if time is 18:00 - 22:00", () => {
        date.setHours(18);
        expect(greeter("Robyn", date)).toBe("Good Evening Robyn");
    })
})