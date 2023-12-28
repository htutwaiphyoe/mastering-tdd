import { render, screen } from "@testing-library/react";
import SignUp from ".";

it("shows header", () => {
  render(<SignUp />);
  const header = screen.getByRole("heading", { name: "SignUp" });
  expect(header).toBeInTheDocument();
});
