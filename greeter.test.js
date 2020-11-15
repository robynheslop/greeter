import greeter from "./greeter";

describe("greeter", () => {
    it("receives name and returns 'hello name'", () => {
        expect(greeter("Robyn")).toBe("Hello Robyn");
    });
    it("returns trimmed input", () => {
        expect(greeter("    Robyn    ")).toBe("Hello Robyn")
    });
    it("returns first letter of name capitalised", () => {
        expect(greeter("robyn")).toBe("Hello Robyn");
    })
})