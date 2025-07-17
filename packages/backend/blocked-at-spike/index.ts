import blockedAt from "blocked-at";

const THRESHOLD_SECONDS = 3;

export async function run() {
  console.log("🚀 Starting blocked-at spike");
  console.log("=".repeat(50));

  blockedAt(
    (time, stack) => {
      console.log(`⚠️  Event loop blocked for ${time}ms`);
      console.log(`📍 Stack trace:`, stack.join("\n"));
      console.log("-".repeat(30));
    },
    {
      threshold: THRESHOLD_SECONDS * 1000, // 10 seconds
    }
  );

  // Example 1: Non-blocking operation (async/await)
  console.log("\n 1️⃣ Testing non-blocking async operation:");
  await nonBlockingAsync();

  // Example 2: CPU-intensive blocking operation
  console.log("\n 2️⃣ Testing CPU-intensive blocking operation:");
  await cpuIntensiveBlocking();

  // Example 3: Synchronous file operation (blocking)
  console.log("\n 3️⃣ Testing synchronous file operation:");
  await syncFileOperation();

  // Example 4: setTimeout (non-blocking)
  console.log("\n 4️⃣ Testing setTimeout (non-blocking):");
  await setTimeoutExample();

  // Example 5: Heavy computation in a loop
  console.log("\n 5️⃣ Testing heavy computation loop:");
  await heavyComputationLoop();

  console.log("\n ✅ Blocked-at spike completed");
}

// Non-blocking: Uses async/await properly
async function nonBlockingAsync() {
  console.log("   Starting non-blocking operation...");
  await new Promise((resolve) => setTimeout(resolve, 100));
  console.log("   ✅ Non-blocking operation completed");
}

// Blocking: CPU-intensive operation
async function cpuIntensiveBlocking() {
  console.log("   Starting CPU-intensive operation...");
  const start = Date.now();

  // This will block the event loop
  let result = 0;
  let i = 0;
  const now = Date.now();
  while (Date.now() - now < (THRESHOLD_SECONDS + 1) * 1000) {
    result += Math.sqrt(i);
    i++;
  }

  const duration = Date.now() - start;
  console.log(
    `   ✅ CPU-intensive operation completed in ${duration}ms (result: ${result.toFixed(
      2
    )})`
  );
}

// Blocking: Synchronous file operation
async function syncFileOperation() {
  console.log("   Starting sync file operation...");
  const fs = require("fs");
  const path = require("path");

  try {
    // Create a large string to write
    const largeData = "x".repeat(1000000);
    const tempFile = path.join(__dirname, "temp-test.txt");

    // This will block the event loop
    fs.writeFileSync(tempFile, largeData);
    console.log("   ✅ Sync file write completed");

    // Clean up
    fs.unlinkSync(tempFile);
  } catch (error) {
    console.log("   ❌ File operation failed:", (error as Error).message);
  }
}

// Non-blocking: setTimeout
async function setTimeoutExample() {
  console.log("   Starting setTimeout operation...");
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("   ✅ setTimeout callback executed");
      resolve(undefined);
    }, 100);
  });
}

// Blocking: Heavy computation in a loop
async function heavyComputationLoop() {
  console.log("   Starting heavy computation loop...");
  const start = Date.now();

  // This will block the event loop
  const results = [];
  for (let i = 0; i < 10000000; i++) {
    results.push({
      id: i,
      value: Math.pow(i, 2) + Math.sin(i) + Math.cos(i),
    });
  }

  const duration = Date.now() - start;
  console.log(
    `   ✅ Heavy computation completed in ${duration}ms (processed ${results.length} items)`
  );
}
