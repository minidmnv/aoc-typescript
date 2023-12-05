import process from "node:process";

const main = async (): Promise<void> => {
  console.log(process.argv[2]);
  console.log('Its alive!');
}

main();
