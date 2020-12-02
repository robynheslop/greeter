import greeter from "./greeter"

describe("greeter", () => {
    it("receives a name, returns 'Hello <name>", () => {
        expect(greeter("Robyn")).toBe("Hello Robyn")
    })
    it("receives a name, returns 'Hello <name>' trimmed of white space", () => {
        expect(greeter("       Robyn            ")).toBe("Hello Robyn")
    })
    it("receives a name, returns 'Hello <name>' with first letter of name capitalied", () => {
        expect(greeter("robyn")).toBe("Hello Robyn")
    })
    it("receives a full name, returns 'Hello <full name>' with first letter of each name capitalied", () => {
        expect(greeter("robyn heslop")).toBe("Hello Robyn Heslop")
    })
    it("returns 'Good Morning <name> if the time is 06:00", () => {
        let time = new Date('December 17, 1995 06:00:00')
        expect(greeter("Robyn", time)).toBe("Good Morning Robyn")
    })
})