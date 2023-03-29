export default {
"abi":[
{"inputs":[{"internalType":"address","name":"_signer","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"payload","type":"bytes"}],"name":"getLatestPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"payload","type":"bytes"}],"name":"getRatio","outputs":[{"internalType":"uint256","name":"numerator","type":"uint256"},{"internalType":"uint256","name":"denominator","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isSupported","outputs":[{"internalType":"bool","name":"supported","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"sequenceNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"signer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"payload","type":"bytes"}],"name":"updateSequenceNumber","outputs":[],"stateMutability":"nonpayable","type":"function"}
],
"bytecode":"60a060405234801561001057600080fd5b506040516109063803806109068339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b031661089a61006c6000398061032552806106c8525061089a6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806364ca23ef1161005b57806364ca23ef1461017957806388462c8d146101815780638f47e82e146101d0578063d9da4fe6146102685761007d565b8063238ac93314610082578063313ce567146100b3578063495e4348146100d1575b600080fd5b61008a610323565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100bb610347565b6040805160ff9092168252519081900360200190f35b610167600480360360608110156100e757600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169181019060608101604082013564010000000081111561012857600080fd5b82018360208201111561013a57600080fd5b8035906020019184600183028401116401000000008311171561015c57600080fd5b50909250905061034c565b60408051918252519081900360200190f35b610167610399565b6101bc6004803603604081101561019757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661039f565b604080519115158252519081900360200190f35b610266600480360360608110156101e657600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169181019060608101604082013564010000000081111561022757600080fd5b82018360208201111561023957600080fd5b8035906020019184600183028401116401000000008311171561025b57600080fd5b5090925090506103a7565b005b61030a600480360360a081101561027e57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a0810160808201356401000000008111156102cb57600080fd5b8201836020820111156102dd57600080fd5b803590602001918460018302840111640100000000831117156102ff57600080fd5b509092509050610466565b6040805192835260208301919091528051918290030190f35b7f000000000000000000000000000000000000000000000000000000000000000081565b601290565b600061038f858585858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061048b92505050565b5095945050505050565b60005481565b600192915050565b60006103ea858585858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061048b92505050565b915050600054811161045d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4f535741503a20496e76616c69642073657175656e6365206e756d6265720000604482015290519081900360640190fd5b60005550505050565b6000806104758888868661034c565b98670de0b6b3a764000098509650505050505050565b600080825160a1146104fe57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4f535741503a20496e76616c6964207061796c6f61642073697a650000000000604482015290519081900360640190fd5b505060208101516040820151606083015160005446919083101561058357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4f535741503a20496e76616c69642073657175656e6365206e756d6265720000604482015290519081900360640190fd5b8042106105f157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4f535741503a2050726963652065787069726564000000000000000000000000604482015290519081900360640190fd5b6040805130606090811b6020808401919091527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008b831b81166034850152918a901b9091166048830152605c8201879052607c8201869052609c820184905260bc8083018690528351808403909101815260dc830184528051908201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000060fc8401526101188084019190915283518084039091018152610138909201909252805191012060006106c48288608061078c565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461078057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4f535741503a20496e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b50505050935093915050565b8181018051602082015160409092015160009290831a601b8110156107af57601b015b8060ff16601b141580156107c757508060ff16601c14155b156107d8576000935050505061085d565b604080516000815260208082018084528a905260ff8416828401526060820186905260808201859052915160019260a08084019391927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081019281900390910190855afa15801561084d573d6000803e3d6000fd5b5050506020604051035193505050505b939250505056fea26469706673582212209bfd43e770f351041a653a30ee8a972575efad2f413f0874ad638e3f4e681f3d64736f6c634300060b0033"
}