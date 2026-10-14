import { render, screen, fireEvent } from "@testing-library/react";
import {
  setupIntersectionMocking,
  resetIntersectionMocking,
  mockAllIsIntersecting,
} from "react-intersection-observer/test-utils";
import App from "./App";
beforeEach(() => {
  window.scrollTo = jest.fn();
  Element.prototype.scrollIntoView = jest.fn();
  localStorage.clear();
  window.history.replaceState({}, "", "/");
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
  setupIntersectionMocking(jest.fn);
});
afterEach(() => resetIntersectionMocking());
test("original portrait, sections, and new work are present", () => {
  render(<App />);
  mockAllIsIntersecting(true);
  expect(
    screen.getByRole("heading", { name: "Ekansh Chawla", level: 1 }),
  ).toBeInTheDocument();
  expect(screen.getByAltText("Image of Ekansh Chawla")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "About Me" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Hobbies" })).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Read about Mercury" }),
  ).toHaveAttribute("href", "/projects/mercury");
  expect(
    screen.getByRole("link", { name: "Read about NodeAI" }),
  ).toHaveAttribute("href", "/projects/nodeai");
});
test("research deep link retains paper and limitations", () => {
  window.history.replaceState({}, "", "/research");
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Fewer Rebalances",
  );
  expect(screen.getByRole("link", { name: /Download paper/ })).toHaveAttribute(
    "href",
    expect.stringContaining("zenodo.org/records/23298207/files/"),
  );
  expect(
    screen.getByText(/This is a retrospective working paper/),
  ).toBeInTheDocument();
});
test("theme control updates the existing theme", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Change theme" }));
  expect(localStorage.getItem("theme")).toBe("dark");
});
test("unknown route offers an explicit return home", () => {
  window.history.replaceState({}, "", "/missing");
  render(<App />);
  expect(screen.getByRole("link", { name: "Back to home" })).toHaveAttribute(
    "href",
    "/",
  );
});
test("NodeAI scope and source are accurately represented", () => {
  window.history.replaceState({}, "", "/projects/nodeai");
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("NodeAI");
  expect(
    screen.getByRole("link", { name: /View source on GitHub/ }),
  ).toHaveAttribute("href", "https://github.com/Ekanshthegreat/NodeAI-rework");
  expect(
    screen.getByRole("link", { name: "Open the simulator" }),
  ).toHaveAttribute("href", "https://ekanshthegreat.github.io/NodeAI-rework/");
});

test("inference research deep link includes the report, artifact and limits", () => {
  window.history.replaceState({}, "", "/research/state-validity");
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "When Timely Answers",
  );
  expect(screen.getByRole("link", { name: /Download paper/ })).toHaveAttribute(
    "href",
    "https://zenodo.org/records/23328001/files/state_validity_report.pdf?download=1",
  );
  expect(screen.getByRole("link", { name: /Code & results/ })).toHaveAttribute(
    "href",
    "https://zenodo.org/records/23328001/files/state-validity-research-v1.0.1.zip?download=1",
  );
  expect(
    screen.getByRole("link", { name: /DOI: 10.5281\/zenodo.23328001/ }),
  ).toHaveAttribute("href", "https://doi.org/10.5281/zenodo.23328001");
  expect(screen.getByRole("link", { name: /Zenodo record/ })).toHaveAttribute(
    "href",
    "https://zenodo.org/records/23328001",
  );
  expect(
    screen.getByText(/This is an unreviewed technical report/),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/The native asynchronous controls/),
  ).toBeInTheDocument();
});
