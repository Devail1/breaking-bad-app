import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Card from "../components/Card"

const cardObj = {
  id: 1,
  title: "Testing Title",
  airDate: "12/01/2022",
  printLog: () => {},
}

describe("cardTest", () => {
  test("should render 1 button, 1 link, 2 text elements", () => {
    render(
      <MemoryRouter initialEntries={["/users/mjackson"]}>
        <Card {...cardObj} />
      </MemoryRouter>
    )
    let button = screen.getByText("Print title")
    expect(button.innerHTML).toMatch("Print title")
  })
})
