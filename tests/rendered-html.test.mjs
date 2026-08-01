import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("ships the answer desk and direct local portrait assets", async () => {
  const [home, desk, layout] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/components/QuestionDesk.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
  ]);

  assert.match(home, /What do you actually want to know\?/);
  assert.match(desk, /reviewQuestions/);
  assert.doesNotMatch(home, /next\/image|<Image/);
  assert.match(layout, /\/og\.png/);
});

test("includes the portrait and public social asset", async () => {
  await Promise.all([
    access(new URL("public/mark-mccanney.webp", root)),
    access(new URL("public/og.png", root)),
  ]);
});
