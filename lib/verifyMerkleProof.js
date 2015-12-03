var crypto = require('crypto');

module.exports = function verifyMerkleProof(proof, target, root, hashFuncName) {
  var hash = target;

  for (var level = 0; level < proof.length; level++) {
    var proofLevel = proof[level];

    if (hash.compare(proofLevel.left) !== 0 &&
        (!proofLevel.right || hash.compare(proofLevel.right) !== 0)) {
      return false;
    }

    if (proofLevel.right) {
      var parent = crypto
        .createHash(hashFuncName)
        .update(Buffer.concat([proofLevel.left, proofLevel.right]))
        .digest();
    } else {
      parent = proofLevel.left;
    }

    if (proofLevel.parent.compare(parent) !== 0) {
      return false;
    }

    hash = parent;
  }

  return hash.compare(root) === 0;
};
