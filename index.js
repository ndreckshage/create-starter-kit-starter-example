#!/usr/bin/env node

const starterKitStarter = require("starter-kit-starter");
const { prompt } = require("enquirer");
const path = require("path");

const {
  _: [outputDirectory]
} = require("minimist")(process.argv.slice(2));

starterKitStarter({
  prompt: prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is the project name?",
      default: outputDirectory
    },
    {
      type: "confirm",
      name: "confirm",
      message:
        "Go wild creating prompts... https://github.com/enquirer/enquirer",
      default: true
    }
  ]),
  finalizeKit: kit => kit,
  kitDirectory: path.resolve(__dirname, "kit"),
  outputDirectory: path.resolve(process.cwd(), outputDirectory)
});
