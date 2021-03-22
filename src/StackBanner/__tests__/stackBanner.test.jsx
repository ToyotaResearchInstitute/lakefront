import React from 'react';
import { render } from "@testing-library/react";
import StackBanner from "../StackBanner";

const CONTENT = "content";
const content = <div>{CONTENT}</div>;

describe("StackBanner", () => {
  it("displays stack banner rows when rows are provided.", () => {
    const { getByText } = render(
      <StackBanner
        rows={[
          {
            severity: "error",
            content,
          },
        ]}
      />
    );

    getByText(CONTENT);
  });

  it("displays no stack banner rows when rows is empty.", () => {
    const { queryByText } = render(
      <StackBanner
        rows={[]}
      />
    );

    expect(queryByText(CONTENT)).not.toBeInTheDocument();
  });

  it("displays no stack banner rows when rows is undefined.", () => {
    const { queryByText } = render(<StackBanner />);

    expect(queryByText(CONTENT)).not.toBeInTheDocument();
  });
});
