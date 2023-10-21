import { describe, expect, test } from "bun:test";

import { add, multiply } from "./helpers";

describe("Some arithmetic operations", () => {
    test("Addition", () => {
        expect(add(1, 2)).toBe(3);
    });

    test("Multiplication", () => {
        expect(multiply(3, 4)).toBe(12);
    });
});
