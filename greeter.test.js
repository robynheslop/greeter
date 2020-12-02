import greeter from "./greeter"

describe("greeter", () => {
    it("receives a name, returns 'Hello <name>", () => {
        expect(greeter("Robyn")).toBe("Hello Robyn")
    });
    it("receives a name, returns 'Hello <name>' trimmed of white space", () => {
        expect(greeter("       Robyn            ")).toBe("Hello Robyn")
    });
    it("receives a name, returns 'Hello <name>' with first letter of name capitalied", () => {
        expect(greeter("robyn")).toBe("Hello Robyn")
    });
    it("receives a full name, returns 'Hello <full name>' with first letter of each name capitalied", () => {
        expect(greeter("robyn heslop")).toBe("Hello Robyn Heslop")
    });
    it("returns 'Good Morning <name> if the time is 06:00:00", () => {
        let time = new Date('December 17, 1995 06:00:00')
        expect(greeter("Robyn", time)).toBe("Good Morning Robyn")
    });
    it("returns 'Good Morning <name> if the time is 11:59:00", () => {
        let time = new Date('December 17, 1995 11:59:00')
        expect(greeter("Robyn", time)).toBe("Good Morning Robyn")
    });
    it("returns 'Good Evening <name> if the time is 18:00:00", () => {
        let time = new Date('December 17, 1995 18:00:00')
        expect(greeter("Robyn", time)).toBe("Good Evening Robyn")
    });
    it("returns 'Good Evening <name> if the time is 21:59:00", () => {
        let time = new Date('December 17, 1995 21:59:00')
        expect(greeter("Robyn", time)).toBe("Good Evening Robyn")
    });
    it("returns 'Good Night <name> if the time is 22:00:00", () => {
        let time = new Date('December 17, 1995 22:00:00')
        expect(greeter("Robyn", time)).toBe("Good Night Robyn")
    });
    it("returns 'Good Night <name> if the time is 05:59:00", () => {
        let time = new Date('December 17, 1995 05:59:00')
        expect(greeter("Robyn", time)).toBe("Good Night Robyn")
    });
})