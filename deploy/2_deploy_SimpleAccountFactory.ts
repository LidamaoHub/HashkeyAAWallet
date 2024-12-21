import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'

const deploySimpleAccountFactory: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const provider = ethers.provider
  const from = await provider.getSigner().getAddress()
  const network = await provider.getNetwork()
  // only deploy on local test network.

  // if (network.chainId !== 31337 && network.chainId !== 1337) {
  //   return
  // }

  const entrypoint = await hre.deployments.get('EntryPoint')
  console.log("entrypoint")

  const gamer_card = await hre.deployments.deploy("GamerCard",{
    from,
    args:[],
    deterministicDeployment: true
  })
  // const GamerCard = await hre.ethers.getContractFactory("GamerCard");
  // console.log(1)
  // const gamer_card = await GamerCard.deploy();

  let gamer_card_address = gamer_card.address;
  console.log(1)

  console.log("game_card: ",gamer_card_address)
  

  let ret = await hre.deployments.deploy("SimpleAccountFactory",{
    from,
    args:[entrypoint.address,gamer_card_address],
    deterministicDeployment: true
  });


  console.log('Factory address', ret.address)
//   let privateKey1 =
//   "0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd";
// let privateKey2 =
//   "0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0";

//   const wallet1 = new ethers.Wallet(privateKey1,provider);
//   const wallet2 = new ethers.Wallet(privateKey2,provider);

//   console.log()
  // let gamer_card1 = gamer_card.connect(wallet1);
  // let factory1 = await ret.connect(wallet1);
// let t = await  ret.createAccount(wallet1.address,123)
//   let tx = await  t.wait()

// let owner_id = tx.events?.filter((e:any)=>e.event=="AccountCreated")[0].args.ownerId
// console.log(owner_id)
// // console.log(owner_id)
// let index = await gamer_card1.getNftId(wallet1.address)
// console.log("index",index)
// let aa_address =  await factory1.getAddress(wallet1.address,123,0);
// console.log("aa_address",aa_address)

// let test_address = test.address;

// let data = test.interface.encodeFunctionData('set', [1]);

// let aa_contract = await hre.ethers.getContractAt("SimpleAccount",aa_address);
// let aa1 = aa_contract.connect(wallet1);
// let aa2 = aa_contract.connect(wallet2);
// await aa1.execute(test_address,0,data)
// let id = await test.userIds(aa_address)
// console.log(id.toNumber())
// try{
//   data = test.interface.encodeFunctionData('set', [2]);
//   await aa2.execute(test_address,0,data)
// }catch{
// console.log("不能")
// }
// await gamer_card1.transferFrom(wallet1.address,wallet2.address,owner_id)

// data = test.interface.encodeFunctionData('set', [3]);
// try{
//   await aa1.execute(test_address,0,data)

// }catch{
// console.log("address1已經不能")
// }
// data = test.interface.encodeFunctionData('set', [2]);
// await aa2.execute(test_address,0,data)
// id = await test.userIds(aa_address)
// console.log("最終id應該為2",id.toNumber())
}

export default deploySimpleAccountFactory
