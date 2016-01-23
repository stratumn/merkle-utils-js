# Merkle Utils

## Install

```bash
npm install --save merkle
npm install --save merkle-utils
```

## API

### getMerkleProof(tree, leafIndex)

Get merkle proof of tree for the leaf at specified index.

Ex:

```js
var merkle = require('merkle');
var getMerkleProof = require('merkle-utils').getMerkleProof;

var tree = merkle('sha256').sync(['a', 'b', 'c', 'd', 'e']);

getMerkleProof(tree, 3);

```

Ouput:

```js
[
	{
		left: Buffer('2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6'),
		right: Buffer('18ac3e7343f016890c510e93f935261169d9e3f565436429830faf0934f4f8e4'),
		parent: Buffer('a99e82f486656840a790c0ef6024d2c02359de7674a587562feb81c8970f24dd')
	},
	{
		left: Buffer('6a20f2ee7789e6bb7f404cc2dd729ff308b724d904f6a455b74d4851ade5aecb'),
		right: Buffer('a99e82f486656840a790c0ef6024d2c02359de7674a587562feb81c8970f24dd'),
		parent: Buffer('ab4587d9f4ad6990e0bf4a1c5a836c78cce881c2b7c4287c0a7da15b47b8cf1f')
	},
	{
	  	left: Buffer('ab4587d9f4ad6990e0bf4a1c5a836c78cce881c2b7c4287c0a7da15b47b8cf1f'),
		right: Buffer('3f79bb7b435b05321651daefd374cdc681dc06faa65e374e38337b88ca046dea'),
		parent: Buffer('16e6beb3e080910740a2923d6091618caa9968aead8a52d187d725d199548e2c')
	}
]
```

### verifyMerkleProof(proof, target, root, hashFuncName)

Verifies a merkle proof.

Ex:

```js
var merkle = require('merkle');
var getMerkleProof = require('merkle-utils').getMerkleProof;
var verifyMerkleProof = require('merkle-utils').verifyMerkleProof;

var tree = merkle('sha256').sync(['a', 'b', 'c', 'd', 'e']);
var proof = getMerkleProof(tree, 2);

verifyMerkleProof(proof, tree.level(3)[2], tree.root(), 'sha256'); // true
```
