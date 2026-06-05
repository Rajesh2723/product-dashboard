import React from "react";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders product dashboard", () => {
  render(<App />);
  expect(screen.getByText(/Laptop/i)).toBeTruthy();
});