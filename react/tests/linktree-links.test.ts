import { describe, expect, it } from "vitest";

import { homeLinktreeLinks, linktreeLinks } from "../lib/linktree-links";

describe("linktreeLinks", () => {
  it("keeps the current SGA shortcut order and disabled states", () => {
    expect(linktreeLinks.map((item) => item.title)).toEqual([
      "Suporte",
      "Twitch",
      "VCT Ribeirão",
      "Corujão",
      "CS Prime",
      "Lan House",
      "Aniversário",
      "Mix",
      "SGA",
      "YouTube",
    ]);

    expect(
      linktreeLinks.filter((item) => item.disabled).map((item) => item.title),
    ).toEqual([
      "Corujão",
      "CS Prime",
      "Lan House",
      "Aniversário",
      "Mix",
      "SGA",
      "YouTube",
    ]);
  });

  it("shows the Corujão shortcut on the home page as maintenance", () => {
    expect(homeLinktreeLinks.map((item) => item.title)).toEqual([
      "Suporte",
      "Twitch",
      "VCT Ribeirão",
      "Corujão",
      "CS Prime",
      "Lan House",
      "Aniversário",
      "Mix",
      "SGA",
      "YouTube",
    ]);

    expect(homeLinktreeLinks.find((item) => item.title === "Corujão")).toMatchObject({
      title: "Corujão",
      href: "/corujao",
      disabled: true,
      disabledLabel: "Manutenção",
    });
    expect(
      homeLinktreeLinks.filter((item) => item.disabled).map((item) => item.title),
    ).toContain("Corujão");
    expect(
      homeLinktreeLinks.filter((item) => item.disabledLabel).map((item) => item.title),
    ).toEqual(["Corujão"]);
    expect(linktreeLinks.find((item) => item.title === "Corujão")).toMatchObject({
      title: "Corujão",
      disabled: true,
      disabledLabel: "Manutenção",
    });
  });

  it("keeps regular coming-soon shortcuts without a custom disabled label", () => {
    expect(
      linktreeLinks
        .filter((item) => item.disabled && item.title !== "Corujão")
        .every((item) => item.disabledLabel === undefined),
    ).toBe(
      true,
    );
  });

  it("prefixes public image assets with the base path", () => {
    expect(linktreeLinks.every((item) => item.image.startsWith("/saiba-mais/"))).toBe(
      true,
    );
  });
});
