import greeter from "./greeter";

describe("greeter", () => {
    it("receives name and returns 'hello name'", () => {
        expect(greeter("Robyn")).toBe("Hello Robyn");
    });
})