import React from "react"
import Welcome from "./welcome"
import { render } from "@testing-library/react-native"

describe("Welcome tests", () => {
    it("prints a welcome message", () => {
        const { getByText } = render(<Welcome message="Hello world!" />)
        expect(getByText("Hello world!")).toBeTruthy()
    })
})