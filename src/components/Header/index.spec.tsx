import { render } from "@testing-library/react"
import Header from "."

describe("Header Component", () => {
  it("Should if header componet is rederized...", () => {
    const { getByText } = render(<Header>Lorem ipsum</Header>)
    
    getByText(/Lorem ipsum/i)
  })
})