async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account:', deployer.address);

  const Project = await ethers.getContractFactory('Project');
  const project = await Project.deploy();
  console.log('Project contract deployed to:', project.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
