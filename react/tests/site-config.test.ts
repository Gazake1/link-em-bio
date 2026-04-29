import { describe, expect, it } from "vitest";

import { siteConfig } from "../lib/site-config";

describe("siteConfig", () => {
  it("exposes the SGA identity", () => {
    expect(siteConfig.name).toBe("Santos Games Arena");
    expect(siteConfig.description).toContain("Linktree oficial");
    expect(siteConfig.basePath).toBe("/saiba-mais");
    expect(siteConfig.url).toBe("https://santos-games.com/saiba-mais");
  });
});
