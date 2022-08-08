const FAVORITE_INSTRUCTOR = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const favoriteFood = process.env.FAVORITE_FOOD;
    console.log(`My favorite food is ${FAVORITE_INSTRUCTOR}`);
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
