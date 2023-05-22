import { createLockFile } from "@nx/js";
import { writeFileSync, readFileSync } from "fs";

const prunedPackageJson = JSON.parse(
  readFileSync("./app/package.json", "utf8")
);
const prunedLockFile = createLockFile(prunedPackageJson, "pnpm");

writeFileSync("./app/pnpm-lock.yaml", prunedLockFile);
