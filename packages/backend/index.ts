import { run } from "./blocked-at-spike";

const greeting: string = "Hello, Node!!!!!";
console.log(greeting);

async function main() {
  await run();
}

main().catch(console.error);
