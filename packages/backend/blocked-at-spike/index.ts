import blockedAt from "blocked-at";

export async function run() {
  console.log("Starting blocked-at spike");

  blockedAt(async () => {
    console.log("Hello, World!");
  });

  console.log("> Blocked-at spike completed");
}
