import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("The app", () => {
  test("renders the app", () => {
    render(<App />);
    const headerElement = screen.getByText(/Dummy divider/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("for dzielnik 3 i dzielna 2 result should be 1.5", () => {
    const app = render(<App />);
    const inputdzielna = app.getByTestId("dzielna");
    const inputdzielnik = app.getByTestId("dzielnik");

    fireEvent.change(inputdzielna, { target: { value: "3.0" } });
    expect(inputdzielna.value).toBe("3");

    fireEvent.change(inputdzielnik, { target: { value: "2" } });
    expect(inputdzielnik.value).toBe("2");

    expect(app.getByTestId("result")).toHaveTextContent("1.5");
    expect(app.getByTestId("modulo")).toHaveTextContent("1");
  });

  test("for dzielnik 3 i dzielna 0 result should be 🤬!!!", () => {
    const app = render(<App />);
    const inputdzielna = app.getByTestId("dzielna");
    const inputdzielnik = app.getByTestId("dzielnik");

    fireEvent.change(inputdzielna, { target: { value: "3.0" } });
    expect(inputdzielna.value).toBe("3");

    fireEvent.change(inputdzielnik, { target: { value: "0" } });
    expect(inputdzielnik.value).toBe("0");

    expect(app.getByTestId("result")).toHaveTextContent("🤬");
    expect(app.getByTestId("modulo")).toHaveTextContent("🤬");

    // 🤬
  });
});
