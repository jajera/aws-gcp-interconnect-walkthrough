import * as fc from "fast-check";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { REQUIRED_PUBLIC_FILES } from "../fixtures/required-slugs";

const PUBLIC_DIR = join(process.cwd(), "public");

describe("Feature: aws-gcp-interconnect-walkthrough, Property 6: Required static assets", () => {
  it("og image assets exist in public/", () => {
    fc.assert(
      fc.property(fc.constantFrom(...REQUIRED_PUBLIC_FILES), (filename) => {
        expect(existsSync(join(PUBLIC_DIR, filename))).toBe(true);
      }),
      { numRuns: Math.max(100, REQUIRED_PUBLIC_FILES.length) }
    );
  });
});
