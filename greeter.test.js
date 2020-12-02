import greeter from "./greeter"

describe("greeter", () => {
    it("receives a name, returns 'Hello <name>", () => {
        expect(greeter("Robyn")).toBe("Hello Robyn")
    })
    it("receives a name, returns 'Hello <name>' trimmed of white space", () => {
        expect(greeter("       Robyn            ")).toBe("Hello Robyn")
    })
})