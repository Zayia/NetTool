/* China Mobile capture v2.0.0 — GPL-3.0-only.
 * CryptoJS derived from ChinaTelecomOperators/ChinaMobile 10086.js 1.2.0.
 * Build: Scripts/build_mobile.py. License: Scripts/ChinaMobile.LICENSE.
 * Capture only; no login, balance queries, scheduled tasks or network I/O. */
(function () {
function a0_0x4f40() {} // unused decoder aliases in the upstream crypto library
const captureCrypto = (function () {
  var _0x2179fa = { 955: function(_0x4bc4e2, _0x302546, _0x2a5130) {
    var _0x19f666 = a0_0x4f40, _0x8e12d5;
    _0x4bc4e2["exports"] = (_0x8e12d5 = _0x2a5130(21), _0x2a5130(754), _0x2a5130(636), _0x2a5130(506), _0x2a5130(165), (function() {
      var _0x3e82d7 = _0x19f666, _0x42b57d = _0x8e12d5, _0x52d44b = _0x42b57d["lib"], _0x31a01c = _0x52d44b["BlockCipher"], _0x2981ce = _0x42b57d["algo"], _0x368bcb = [], _0x151110 = [], _0x143bde = [], _0x3249cf = [], _0x459ae8 = [], _0x3505e3 = [], _0x3c8cba = [], _0x3b731f = [], _0x1406af = [], _0x84caa6 = [];
      !(function() {
        for (var _0x36c46f = [], _0x1e019d = 0; _0x1e019d < 256; _0x1e019d++) _0x36c46f[_0x1e019d] = _0x1e019d < 128 ? _0x1e019d << 1 : _0x1e019d << 1 ^ 283;
        var _0x3c57ba = 0, _0x2b7cb2 = 0;
        for (_0x1e019d = 0; _0x1e019d < 256; _0x1e019d++) {
          var _0x2d65bb = _0x2b7cb2 ^ _0x2b7cb2 << 1 ^ _0x2b7cb2 << 2 ^ _0x2b7cb2 << 3 ^ _0x2b7cb2 << 4;
          _0x2d65bb = _0x2d65bb >>> 8 ^ 255 & _0x2d65bb ^ 99, _0x368bcb[_0x3c57ba] = _0x2d65bb, _0x151110[_0x2d65bb] = _0x3c57ba;
          var _0x348a7d = _0x36c46f[_0x3c57ba], _0x14ccff = _0x36c46f[_0x348a7d], _0x8e3f08 = _0x36c46f[_0x14ccff], _0x1c5a76 = 257 * _0x36c46f[_0x2d65bb] ^ 16843008 * _0x2d65bb;
          _0x143bde[_0x3c57ba] = _0x1c5a76 << 24 | _0x1c5a76 >>> 8, _0x3249cf[_0x3c57ba] = _0x1c5a76 << 16 | _0x1c5a76 >>> 16, _0x459ae8[_0x3c57ba] = _0x1c5a76 << 8 | _0x1c5a76 >>> 24, _0x3505e3[_0x3c57ba] = _0x1c5a76, _0x1c5a76 = 16843009 * _0x8e3f08 ^ 65537 * _0x14ccff ^ 257 * _0x348a7d ^ 16843008 * _0x3c57ba, _0x3c8cba[_0x2d65bb] = _0x1c5a76 << 24 | _0x1c5a76 >>> 8, _0x3b731f[_0x2d65bb] = _0x1c5a76 << 16 | _0x1c5a76 >>> 16, _0x1406af[_0x2d65bb] = _0x1c5a76 << 8 | _0x1c5a76 >>> 24, _0x84caa6[_0x2d65bb] = _0x1c5a76, _0x3c57ba ? (_0x3c57ba = _0x348a7d ^ _0x36c46f[_0x36c46f[_0x36c46f[_0x8e3f08 ^ _0x348a7d]]], _0x2b7cb2 ^= _0x36c46f[_0x36c46f[_0x2b7cb2]]) : _0x3c57ba = _0x2b7cb2 = 1;
        }
      })();
      var _0x546d59 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], _0x598894 = _0x2981ce["AES"] = _0x31a01c["extend"]({ "_doReset": function() {
        var _0x4afdc4 = _0x3e82d7;
        if (!this["_nRounds"] || this["_keyPriorReset"] !== this["_key"]) {
          for (var _0x1502f1 = this["_keyPriorReset"] = this["_key"], _0x719cfa = _0x1502f1["words"], _0x8286ff = _0x1502f1["sigBytes"] / 4, _0xd9faf5 = this["_nRounds"] = _0x8286ff + 6, _0x22d4bb = 4 * (_0xd9faf5 + 1), _0x1f9cf4 = this["_keySchedule"] = [], _0x181b2a = 0; _0x181b2a < _0x22d4bb; _0x181b2a++) _0x181b2a < _0x8286ff ? _0x1f9cf4[_0x181b2a] = _0x719cfa[_0x181b2a] : (_0x2ec305 = _0x1f9cf4[_0x181b2a - 1], _0x181b2a % _0x8286ff ? _0x8286ff > 6 && _0x181b2a % _0x8286ff == 4 && (_0x2ec305 = _0x368bcb[_0x2ec305 >>> 24] << 24 | _0x368bcb[_0x2ec305 >>> 16 & 255] << 16 | _0x368bcb[_0x2ec305 >>> 8 & 255] << 8 | _0x368bcb[255 & _0x2ec305]) : (_0x2ec305 = _0x2ec305 << 8 | _0x2ec305 >>> 24, _0x2ec305 = _0x368bcb[_0x2ec305 >>> 24] << 24 | _0x368bcb[_0x2ec305 >>> 16 & 255] << 16 | _0x368bcb[_0x2ec305 >>> 8 & 255] << 8 | _0x368bcb[255 & _0x2ec305], _0x2ec305 ^= _0x546d59[_0x181b2a / _0x8286ff | 0] << 24), _0x1f9cf4[_0x181b2a] = _0x1f9cf4[_0x181b2a - _0x8286ff] ^ _0x2ec305);
          for (var _0x47d421 = this["_invKeySchedule"] = [], _0x3c266f = 0; _0x3c266f < _0x22d4bb; _0x3c266f++) {
            if (_0x181b2a = _0x22d4bb - _0x3c266f, _0x3c266f % 4) var _0x2ec305 = _0x1f9cf4[_0x181b2a];
            else _0x2ec305 = _0x1f9cf4[_0x181b2a - 4];
            _0x47d421[_0x3c266f] = _0x3c266f < 4 || _0x181b2a <= 4 ? _0x2ec305 : _0x3c8cba[_0x368bcb[_0x2ec305 >>> 24]] ^ _0x3b731f[_0x368bcb[_0x2ec305 >>> 16 & 255]] ^ _0x1406af[_0x368bcb[_0x2ec305 >>> 8 & 255]] ^ _0x84caa6[_0x368bcb[255 & _0x2ec305]];
          }
        }
      }, "encryptBlock": function(_0xfd9e14, _0x25a8f6) {
        var _0x34967a = _0x3e82d7;
        this["_doCryptBlock"](_0xfd9e14, _0x25a8f6, this["_keySchedule"], _0x143bde, _0x3249cf, _0x459ae8, _0x3505e3, _0x368bcb);
      }, "decryptBlock": function(_0x4d71e6, _0x3dfed8) {
        var _0x1b3b1a = _0x3e82d7, _0x1d3982 = _0x4d71e6[_0x3dfed8 + 1];
        _0x4d71e6[_0x3dfed8 + 1] = _0x4d71e6[_0x3dfed8 + 3], _0x4d71e6[_0x3dfed8 + 3] = _0x1d3982, this["_doCryptBlock"](_0x4d71e6, _0x3dfed8, this["_invKeySchedule"], _0x3c8cba, _0x3b731f, _0x1406af, _0x84caa6, _0x151110), _0x1d3982 = _0x4d71e6[_0x3dfed8 + 1], _0x4d71e6[_0x3dfed8 + 1] = _0x4d71e6[_0x3dfed8 + 3], _0x4d71e6[_0x3dfed8 + 3] = _0x1d3982;
      }, "_doCryptBlock": function(_0x49993c, _0x5e1e8c, _0x495402, _0x53308b, _0x41bf02, _0x87ff52, _0x18228f, _0x2a4521) {
        var _0x5897f4 = _0x3e82d7;
        for (var _0x10bae8 = this["_nRounds"], _0x20a425 = _0x49993c[_0x5e1e8c] ^ _0x495402[0], _0x11c361 = _0x49993c[_0x5e1e8c + 1] ^ _0x495402[1], _0x16cb7f = _0x49993c[_0x5e1e8c + 2] ^ _0x495402[2], _0x582ae4 = _0x49993c[_0x5e1e8c + 3] ^ _0x495402[3], _0x5547a2 = 4, _0x31517b = 1; _0x31517b < _0x10bae8; _0x31517b++) {
          var _0x1f73f8 = _0x53308b[_0x20a425 >>> 24] ^ _0x41bf02[_0x11c361 >>> 16 & 255] ^ _0x87ff52[_0x16cb7f >>> 8 & 255] ^ _0x18228f[255 & _0x582ae4] ^ _0x495402[_0x5547a2++], _0x10e4e6 = _0x53308b[_0x11c361 >>> 24] ^ _0x41bf02[_0x16cb7f >>> 16 & 255] ^ _0x87ff52[_0x582ae4 >>> 8 & 255] ^ _0x18228f[255 & _0x20a425] ^ _0x495402[_0x5547a2++], _0x1f719b = _0x53308b[_0x16cb7f >>> 24] ^ _0x41bf02[_0x582ae4 >>> 16 & 255] ^ _0x87ff52[_0x20a425 >>> 8 & 255] ^ _0x18228f[255 & _0x11c361] ^ _0x495402[_0x5547a2++], _0x5ac982 = _0x53308b[_0x582ae4 >>> 24] ^ _0x41bf02[_0x20a425 >>> 16 & 255] ^ _0x87ff52[_0x11c361 >>> 8 & 255] ^ _0x18228f[255 & _0x16cb7f] ^ _0x495402[_0x5547a2++];
          _0x20a425 = _0x1f73f8, _0x11c361 = _0x10e4e6, _0x16cb7f = _0x1f719b, _0x582ae4 = _0x5ac982;
        }
        _0x1f73f8 = (_0x2a4521[_0x20a425 >>> 24] << 24 | _0x2a4521[_0x11c361 >>> 16 & 255] << 16 | _0x2a4521[_0x16cb7f >>> 8 & 255] << 8 | _0x2a4521[255 & _0x582ae4]) ^ _0x495402[_0x5547a2++], _0x10e4e6 = (_0x2a4521[_0x11c361 >>> 24] << 24 | _0x2a4521[_0x16cb7f >>> 16 & 255] << 16 | _0x2a4521[_0x582ae4 >>> 8 & 255] << 8 | _0x2a4521[255 & _0x20a425]) ^ _0x495402[_0x5547a2++], _0x1f719b = (_0x2a4521[_0x16cb7f >>> 24] << 24 | _0x2a4521[_0x582ae4 >>> 16 & 255] << 16 | _0x2a4521[_0x20a425 >>> 8 & 255] << 8 | _0x2a4521[255 & _0x11c361]) ^ _0x495402[_0x5547a2++], _0x5ac982 = (_0x2a4521[_0x582ae4 >>> 24] << 24 | _0x2a4521[_0x20a425 >>> 16 & 255] << 16 | _0x2a4521[_0x11c361 >>> 8 & 255] << 8 | _0x2a4521[255 & _0x16cb7f]) ^ _0x495402[_0x5547a2++], _0x49993c[_0x5e1e8c] = _0x1f73f8, _0x49993c[_0x5e1e8c + 1] = _0x10e4e6, _0x49993c[_0x5e1e8c + 2] = _0x1f719b, _0x49993c[_0x5e1e8c + 3] = _0x5ac982;
      }, "keySize": 8 });
      _0x42b57d["AES"] = _0x31a01c["_createHelper"](_0x598894);
    })(), _0x8e12d5["AES"]);
  }, 165: function(_0xe8785, _0x4463be, _0x4e11d7) {
    var _0x540a72 = a0_0x4f40, _0x4ea2e2;
    _0xe8785["exports"] = (_0x4ea2e2 = _0x4e11d7(21), _0x4e11d7(506), void (_0x4ea2e2["lib"]["Cipher"] || (function(_0x39e803) {
      var _0x2dc023 = _0x540a72, _0x105abb = _0x4ea2e2, _0x4a6308 = _0x105abb["lib"], _0x11abbb = _0x4a6308["Base"], _0x5c6bbe = _0x4a6308["WordArray"], _0x121305 = _0x4a6308["BufferedBlockAlgorithm"], _0xe2b879 = _0x105abb["enc"], _0x9e87f7 = (_0xe2b879["Utf8"], _0xe2b879["Base64"]), _0x482b3 = _0x105abb["algo"], _0x2c91c2 = _0x482b3["EvpKDF"], _0x3dc04d = _0x4a6308["Cipher"] = _0x121305["extend"]({ "cfg": _0x11abbb["extend"](), "createEncryptor": function(_0x3c47ea, _0x3cf45f) {
        var _0x550b1e = _0x2dc023;
        return this["create"](this["_ENC_XFORM_MODE"], _0x3c47ea, _0x3cf45f);
      }, "createDecryptor": function(_0x367817, _0x346acf) {
        var _0x13d58a = _0x2dc023;
        return this["create"](this["_DEC_XFORM_MODE"], _0x367817, _0x346acf);
      }, "init": function(_0x4178c0, _0x5e0797, _0x3e226d) {
        var _0x1c6594 = _0x2dc023;
        this["cfg"] = this["cfg"]["extend"](_0x3e226d), this["_xformMode"] = _0x4178c0, this["_key"] = _0x5e0797, this["reset"]();
      }, "reset": function() {
        var _0x1b8eb1 = _0x2dc023;
        _0x121305["reset"]["call"](this), this["_doReset"]();
      }, "process": function(_0xa6220e) {
        var _0x514718 = _0x2dc023;
        return this["_append"](_0xa6220e), this["_process"]();
      }, "finalize": function(_0x36d5e6) {
        var _0x1a12cb = _0x2dc023;
        _0x36d5e6 && this["_append"](_0x36d5e6);
        var _0xc6548f = this["_doFinalize"]();
        return _0xc6548f;
      }, "keySize": 4, "ivSize": 4, "_ENC_XFORM_MODE": 1, "_DEC_XFORM_MODE": 2, "_createHelper": /* @__PURE__ */ (function() {
        function _0x4d123f(_0x67a77b) {
          var _0x100764 = a0_0x4f40;
          return "string" == typeof _0x67a77b ? _0x3a5a30 : _0x5195a9;
        }
        return function(_0x572b1d) {
          return { "encrypt": function(_0x2e899e, _0x237d70, _0x44fa7d) {
            var _0x236b24 = a0_0x4f40;
            return _0x4d123f(_0x237d70)["encrypt"](_0x572b1d, _0x2e899e, _0x237d70, _0x44fa7d);
          }, "decrypt": function(_0x2b564d, _0x15df52, _0x4760a2) {
            var _0x392225 = a0_0x4f40;
            return _0x4d123f(_0x15df52)["decrypt"](_0x572b1d, _0x2b564d, _0x15df52, _0x4760a2);
          } };
        };
      })() }), _0x1971df = (_0x4a6308["StreamCipher"] = _0x3dc04d["extend"]({ "_doFinalize": function() {
        var _0x3ce8d2 = _0x2dc023, _0x298877 = this["_process"](true);
        return _0x298877;
      }, "blockSize": 1 }), _0x105abb["mode"] = {}), _0x23e564 = _0x4a6308["BlockCipherMode"] = _0x11abbb["extend"]({ "createEncryptor": function(_0x2f59c0, _0x276be1) {
        var _0x56c273 = _0x2dc023;
        return this["Encryptor"]["create"](_0x2f59c0, _0x276be1);
      }, "createDecryptor": function(_0x38687d, _0x40d5b5) {
        var _0x5bb646 = _0x2dc023;
        return this["Decryptor"]["create"](_0x38687d, _0x40d5b5);
      }, "init": function(_0x4ae0b1, _0x35b7e6) {
        var _0x27a81c = _0x2dc023;
        this["_cipher"] = _0x4ae0b1, this["_iv"] = _0x35b7e6;
      } }), _0x11f49b = _0x1971df["CBC"] = (function() {
        var _0x230d58 = _0x2dc023, _0x1ec639 = _0x23e564["extend"]();
        function _0x1958c0(_0x4433cc, _0x27d98c, _0x1869fc) {
          var _0x21f490 = a0_0x4f40, _0x47f923, _0x3dcfb2 = this["_iv"];
          _0x3dcfb2 ? (_0x47f923 = _0x3dcfb2, this["_iv"] = _0x39e803) : _0x47f923 = this["_prevBlock"];
          for (var _0x1d6e5f = 0; _0x1d6e5f < _0x1869fc; _0x1d6e5f++) _0x4433cc[_0x27d98c + _0x1d6e5f] ^= _0x47f923[_0x1d6e5f];
        }
        return _0x1ec639["Encryptor"] = _0x1ec639["extend"]({ "processBlock": function(_0x467a89, _0x4ac36d) {
          var _0x5571fe = _0x230d58, _0x10d1d4 = this["_cipher"], _0x5e7e93 = _0x10d1d4["blockSize"];
          _0x1958c0["call"](this, _0x467a89, _0x4ac36d, _0x5e7e93), _0x10d1d4["encryptBlock"](_0x467a89, _0x4ac36d), this["_prevBlock"] = _0x467a89["slice"](_0x4ac36d, _0x4ac36d + _0x5e7e93);
        } }), _0x1ec639["Decryptor"] = _0x1ec639["extend"]({ "processBlock": function(_0x3e925d, _0x549a74) {
          var _0xe081be = _0x230d58, _0x557c96 = this["_cipher"], _0x3d15b4 = _0x557c96["blockSize"], _0x4a2797 = _0x3e925d["slice"](_0x549a74, _0x549a74 + _0x3d15b4);
          _0x557c96["decryptBlock"](_0x3e925d, _0x549a74), _0x1958c0["call"](this, _0x3e925d, _0x549a74, _0x3d15b4), this["_prevBlock"] = _0x4a2797;
        } }), _0x1ec639;
      })(), _0x41a238 = _0x105abb["pad"] = {}, _0x3f8bb8 = _0x41a238["Pkcs7"] = { "pad": function(_0x174646, _0x1087ad) {
        var _0x21b6b9 = _0x2dc023;
        for (var _0x310131 = 4 * _0x1087ad, _0x23183e = _0x310131 - _0x174646["sigBytes"] % _0x310131, _0x535780 = _0x23183e << 24 | _0x23183e << 16 | _0x23183e << 8 | _0x23183e, _0x3c4d41 = [], _0x551632 = 0; _0x551632 < _0x23183e; _0x551632 += 4) _0x3c4d41["push"](_0x535780);
        var _0x401ffd = _0x5c6bbe["create"](_0x3c4d41, _0x23183e);
        _0x174646["concat"](_0x401ffd);
      }, "unpad": function(_0x41191b) {
        var _0x35540a = _0x2dc023, _0x5e7e8d = 255 & _0x41191b["words"][_0x41191b["sigBytes"] - 1 >>> 2];
        _0x41191b["sigBytes"] -= _0x5e7e8d;
      } }, _0xc51448 = (_0x4a6308["BlockCipher"] = _0x3dc04d["extend"]({ "cfg": _0x3dc04d["cfg"]["extend"]({ "mode": _0x11f49b, "padding": _0x3f8bb8 }), "reset": function() {
        var _0x8aa309 = _0x2dc023, _0x3cf2a0;
        _0x3dc04d["reset"]["call"](this);
        var _0x514994 = this["cfg"], _0x21f658 = _0x514994["iv"], _0x4d095e = _0x514994["mode"];
        this["_xformMode"] == this["_ENC_XFORM_MODE"] ? _0x3cf2a0 = _0x4d095e["createEncryptor"] : (_0x3cf2a0 = _0x4d095e["createDecryptor"], this["_minBufferSize"] = 1), this["_mode"] && this["_mode"]["__creator"] == _0x3cf2a0 ? this["_mode"]["init"](this, _0x21f658 && _0x21f658["words"]) : (this["_mode"] = _0x3cf2a0["call"](_0x4d095e, this, _0x21f658 && _0x21f658["words"]), this["_mode"]["__creator"] = _0x3cf2a0);
      }, "_doProcessBlock": function(_0x716e2a, _0x3133e8) {
        this["_mode"]["processBlock"](_0x716e2a, _0x3133e8);
      }, "_doFinalize": function() {
        var _0x20fb4b = _0x2dc023, _0x32b8c2, _0x10ea05 = this["cfg"]["padding"];
        return this["_xformMode"] == this["_ENC_XFORM_MODE"] ? (_0x10ea05["pad"](this["_data"], this["blockSize"]), _0x32b8c2 = this["_process"](true)) : (_0x32b8c2 = this["_process"](true), _0x10ea05["unpad"](_0x32b8c2)), _0x32b8c2;
      }, "blockSize": 4 }), _0x4a6308["CipherParams"] = _0x11abbb["extend"]({ "init": function(_0x36807d) {
        var _0xc62e30 = _0x2dc023;
        this["mixIn"](_0x36807d);
      }, "toString": function(_0x32b49d) {
        var _0x207673 = _0x2dc023;
        return (_0x32b49d || this["formatter"])["stringify"](this);
      } })), _0x2d42f9 = _0x105abb["format"] = {}, _0x653781 = _0x2d42f9["OpenSSL"] = { "stringify": function(_0x55c1c6) {
        var _0xed5688 = _0x2dc023, _0x3c7f49, _0x5b607e = _0x55c1c6["ciphertext"], _0x2b9b3b = _0x55c1c6["salt"];
        return _0x3c7f49 = _0x2b9b3b ? _0x5c6bbe["create"]([1398893684, 1701076831])["concat"](_0x2b9b3b)["concat"](_0x5b607e) : _0x5b607e, _0x3c7f49["toString"](_0x9e87f7);
      }, "parse": function(_0x32aabb) {
        var _0x7bd8d4 = _0x2dc023, _0x2f7420, _0x49c4a7 = _0x9e87f7["parse"](_0x32aabb), _0x53a39c = _0x49c4a7["words"];
        return 1398893684 == _0x53a39c[0] && 1701076831 == _0x53a39c[1] && (_0x2f7420 = _0x5c6bbe["create"](_0x53a39c["slice"](2, 4)), _0x53a39c["splice"](0, 4), _0x49c4a7["sigBytes"] -= 16), _0xc51448["create"]({ "ciphertext": _0x49c4a7, "salt": _0x2f7420 });
      } }, _0x5195a9 = _0x4a6308["SerializableCipher"] = _0x11abbb["extend"]({ "cfg": _0x11abbb["extend"]({ "format": _0x653781 }), "encrypt": function(_0x55e051, _0x345d18, _0x322341, _0x2036ca) {
        var _0x161e3d = _0x2dc023;
        _0x2036ca = this["cfg"]["extend"](_0x2036ca);
        var _0x5cef6e = _0x55e051["createEncryptor"](_0x322341, _0x2036ca), _0x23adde = _0x5cef6e["finalize"](_0x345d18), _0x56c4cf = _0x5cef6e["cfg"];
        return _0xc51448["create"]({ "ciphertext": _0x23adde, "key": _0x322341, "iv": _0x56c4cf["iv"], "algorithm": _0x55e051, "mode": _0x56c4cf["mode"], "padding": _0x56c4cf["padding"], "blockSize": _0x55e051["blockSize"], "formatter": _0x2036ca["format"] });
      }, "decrypt": function(_0x445fe0, _0x70560b, _0x95cdfa, _0x81fd95) {
        var _0x1ffcf5 = _0x2dc023;
        _0x81fd95 = this["cfg"]["extend"](_0x81fd95), _0x70560b = this["_parse"](_0x70560b, _0x81fd95["format"]);
        var _0x1ecfc9 = _0x445fe0["createDecryptor"](_0x95cdfa, _0x81fd95)["finalize"](_0x70560b["ciphertext"]);
        return _0x1ecfc9;
      }, "_parse": function(_0x4fd022, _0x4c6563) {
        var _0x37af89 = _0x2dc023;
        return "string" == typeof _0x4fd022 ? _0x4c6563["parse"](_0x4fd022, this) : _0x4fd022;
      } }), _0x15e54e = _0x105abb["kdf"] = {}, _0x1d0005 = _0x15e54e["OpenSSL"] = { "execute": function(_0xda4f9f, _0x422e9e, _0x117c24, _0x475e93, _0x52e4e6) {
        var _0x58428f = _0x2dc023;
        if (_0x475e93 || (_0x475e93 = _0x5c6bbe["random"](8)), _0x52e4e6) _0x8b6bda = _0x2c91c2["create"]({ "keySize": _0x422e9e + _0x117c24, "hasher": _0x52e4e6 })["compute"](_0xda4f9f, _0x475e93);
        else var _0x8b6bda = _0x2c91c2["create"]({ "keySize": _0x422e9e + _0x117c24 })["compute"](_0xda4f9f, _0x475e93);
        var _0x3102e6 = _0x5c6bbe["create"](_0x8b6bda["words"]["slice"](_0x422e9e), 4 * _0x117c24);
        return _0x8b6bda["sigBytes"] = 4 * _0x422e9e, _0xc51448["create"]({ "key": _0x8b6bda, "iv": _0x3102e6, "salt": _0x475e93 });
      } }, _0x3a5a30 = _0x4a6308["PasswordBasedCipher"] = _0x5195a9["extend"]({ "cfg": _0x5195a9["cfg"]["extend"]({ "kdf": _0x1d0005 }), "encrypt": function(_0xfe7083, _0x3e6882, _0x12432e, _0x13fb2e) {
        var _0x21406e = _0x2dc023;
        _0x13fb2e = this["cfg"]["extend"](_0x13fb2e);
        var _0x3bd091 = _0x13fb2e["kdf"]["execute"](_0x12432e, _0xfe7083["keySize"], _0xfe7083["ivSize"], _0x13fb2e["salt"], _0x13fb2e["hasher"]);
        _0x13fb2e["iv"] = _0x3bd091["iv"];
        var _0x275ad0 = _0x5195a9["encrypt"]["call"](this, _0xfe7083, _0x3e6882, _0x3bd091["key"], _0x13fb2e);
        return _0x275ad0["mixIn"](_0x3bd091), _0x275ad0;
      }, "decrypt": function(_0x3d8703, _0x38bcf7, _0x410ca0, _0x214cc2) {
        var _0x187d02 = _0x2dc023;
        _0x214cc2 = this["cfg"]["extend"](_0x214cc2), _0x38bcf7 = this["_parse"](_0x38bcf7, _0x214cc2["format"]);
        var _0x5551dd = _0x214cc2["kdf"]["execute"](_0x410ca0, _0x3d8703["keySize"], _0x3d8703["ivSize"], _0x38bcf7["salt"], _0x214cc2["hasher"]);
        _0x214cc2["iv"] = _0x5551dd["iv"];
        var _0x42b9f7 = _0x5195a9["decrypt"]["call"](this, _0x3d8703, _0x38bcf7, _0x5551dd["key"], _0x214cc2);
        return _0x42b9f7;
      } });
    })()));
  }, 21: function(_0x32424f, _0x764a5e, _0x1eab09) {
    var _0x3e6f97 = a0_0x4f40, _0x1c08cb;
    _0x32424f["exports"] = (_0x1c08cb = _0x1c08cb || (function(_0x16f8c5, _0x149b1b) {
      var _0x2f89a6 = _0x3e6f97, _0x5408e6;
      if ("undefined" != typeof window && window["crypto"] && (_0x5408e6 = window["crypto"]), "undefined" != typeof self && self["crypto"] && (_0x5408e6 = self["crypto"]), "undefined" != typeof globalThis && globalThis["crypto"] && (_0x5408e6 = globalThis["crypto"]), !_0x5408e6 && "undefined" != typeof window && window["msCrypto"] && (_0x5408e6 = window["msCrypto"]), !_0x5408e6 && void 0 !== _0x1eab09["g"] && _0x1eab09["g"]["crypto"] && (_0x5408e6 = _0x1eab09["g"]["crypto"]), !_0x5408e6) try {
        _0x5408e6 = _0x1eab09(477);
      } catch (_0x5c4998) {
      }
      var _0x4389e7 = function() {
        var _0x235d2c = _0x2f89a6;
        if (_0x5408e6) {
          if ("function" == typeof _0x5408e6["getRandomValues"]) try {
            return _0x5408e6["getRandomValues"](new Uint32Array(1))[0];
          } catch (_0x99f6df) {
          }
          if ("function" == typeof _0x5408e6["randomBytes"]) try {
            return _0x5408e6["randomBytes"](4)["readInt32LE"]();
          } catch (_0x53506d) {
          }
        }
        throw new Error("Native crypto module could not be used to get secure random number.");
      }, _0x4f83a9 = Object["create"] || /* @__PURE__ */ (function() {
        function _0x38a4af() {
        }
        return function(_0x42fcd7) {
          var _0xf2ef53 = a0_0x4f40, _0xc77d10;
          return _0x38a4af["prototype"] = _0x42fcd7, _0xc77d10 = new _0x38a4af(), _0x38a4af["prototype"] = null, _0xc77d10;
        };
      })(), _0x433354 = {}, _0x447815 = _0x433354["lib"] = {}, _0x577691 = _0x447815["Base"] = { "extend": function(_0x64f4c5) {
        var _0xeb8f1 = _0x2f89a6, _0x1ad63e = _0x4f83a9(this);
        return _0x64f4c5 && _0x1ad63e["mixIn"](_0x64f4c5), _0x1ad63e["hasOwnProperty"]("init") && this["init"] !== _0x1ad63e["init"] || (_0x1ad63e["init"] = function() {
          var _0x2652bf = _0xeb8f1;
          _0x1ad63e["$super"]["init"]["apply"](this, arguments);
        }), _0x1ad63e["init"]["prototype"] = _0x1ad63e, _0x1ad63e["$super"] = this, _0x1ad63e;
      }, "create": function() {
        var _0x3cba45 = _0x2f89a6, _0x2dd3d2 = this["extend"]();
        return _0x2dd3d2["init"]["apply"](_0x2dd3d2, arguments), _0x2dd3d2;
      }, "init": function() {
      }, "mixIn": function(_0x3983d6) {
        var _0x4a37ee = _0x2f89a6;
        for (var _0x3f12e3 in _0x3983d6) _0x3983d6["hasOwnProperty"](_0x3f12e3) && (this[_0x3f12e3] = _0x3983d6[_0x3f12e3]);
        _0x3983d6["hasOwnProperty"]("toString") && (this["toString"] = _0x3983d6["toString"]);
      }, "clone": function() {
        var _0x4bd2c6 = _0x2f89a6;
        return this["init"]["prototype"]["extend"](this);
      } }, _0x4d04f1 = _0x447815["WordArray"] = _0x577691["extend"]({ "init": function(_0x390b10, _0x5e9d92) {
        var _0x3d4bd9 = _0x2f89a6;
        _0x390b10 = this["words"] = _0x390b10 || [], this["sigBytes"] = _0x5e9d92 != _0x149b1b ? _0x5e9d92 : 4 * _0x390b10["length"];
      }, "toString": function(_0x547da2) {
        var _0x36333f = _0x2f89a6;
        return (_0x547da2 || _0x1c4983)["stringify"](this);
      }, "concat": function(_0xf74df2) {
        var _0x21d335 = _0x2f89a6, _0x3935b5 = this["words"], _0x4e784e = _0xf74df2["words"], _0x1813eb = this["sigBytes"], _0x4257ad = _0xf74df2["sigBytes"];
        if (this["clamp"](), _0x1813eb % 4) for (var _0x4e42f6 = 0; _0x4e42f6 < _0x4257ad; _0x4e42f6++) {
          var _0x1ad6df = _0x4e784e[_0x4e42f6 >>> 2] >>> 24 - _0x4e42f6 % 4 * 8 & 255;
          _0x3935b5[_0x1813eb + _0x4e42f6 >>> 2] |= _0x1ad6df << 24 - (_0x1813eb + _0x4e42f6) % 4 * 8;
        }
        else {
          for (var _0x2af821 = 0; _0x2af821 < _0x4257ad; _0x2af821 += 4) _0x3935b5[_0x1813eb + _0x2af821 >>> 2] = _0x4e784e[_0x2af821 >>> 2];
        }
        return this["sigBytes"] += _0x4257ad, this;
      }, "clamp": function() {
        var _0x55b862 = _0x2f89a6, _0x248c00 = this["words"], _0x19f351 = this["sigBytes"];
        _0x248c00[_0x19f351 >>> 2] &= 4294967295 << 32 - _0x19f351 % 4 * 8, _0x248c00["length"] = _0x16f8c5["ceil"](_0x19f351 / 4);
      }, "clone": function() {
        var _0x4b5029 = _0x2f89a6, _0x58d059 = _0x577691["clone"]["call"](this);
        return _0x58d059["words"] = this["words"]["slice"](0), _0x58d059;
      }, "random": function(_0x60b926) {
        for (var _0xcd52ef = [], _0x8b8ebe = 0; _0x8b8ebe < _0x60b926; _0x8b8ebe += 4) _0xcd52ef["push"](_0x4389e7());
        return new _0x4d04f1["init"](_0xcd52ef, _0x60b926);
      } }), _0x3ca39f = _0x433354["enc"] = {}, _0x1c4983 = _0x3ca39f["Hex"] = { "stringify": function(_0x1cb626) {
        var _0x4621d0 = _0x2f89a6;
        for (var _0x5ef082 = _0x1cb626["words"], _0x122919 = _0x1cb626["sigBytes"], _0x23f7a2 = [], _0x3cfe94 = 0; _0x3cfe94 < _0x122919; _0x3cfe94++) {
          var _0x1b662e = _0x5ef082[_0x3cfe94 >>> 2] >>> 24 - _0x3cfe94 % 4 * 8 & 255;
          _0x23f7a2["push"]((_0x1b662e >>> 4)["toString"](16)), _0x23f7a2["push"]((15 & _0x1b662e)["toString"](16));
        }
        return _0x23f7a2["join"]("");
      }, "parse": function(_0x16e862) {
        var _0x40fb81 = _0x2f89a6;
        for (var _0x4438ec = _0x16e862["length"], _0x2b5ddb = [], _0x4913bb = 0; _0x4913bb < _0x4438ec; _0x4913bb += 2) _0x2b5ddb[_0x4913bb >>> 3] |= parseInt(_0x16e862["substr"](_0x4913bb, 2), 16) << 24 - _0x4913bb % 8 * 4;
        return new _0x4d04f1["init"](_0x2b5ddb, _0x4438ec / 2);
      } }, _0x5071ec = _0x3ca39f["Latin1"] = { "stringify": function(_0x31e94a) {
        var _0x27816f = _0x2f89a6;
        for (var _0x2056b9 = _0x31e94a["words"], _0x4d812b = _0x31e94a["sigBytes"], _0x31e20d = [], _0x34585e = 0; _0x34585e < _0x4d812b; _0x34585e++) {
          var _0x115af2 = _0x2056b9[_0x34585e >>> 2] >>> 24 - _0x34585e % 4 * 8 & 255;
          _0x31e20d["push"](String["fromCharCode"](_0x115af2));
        }
        return _0x31e20d["join"]("");
      }, "parse": function(_0x5b190d) {
        var _0x560a94 = _0x2f89a6;
        for (var _0x1ed3be = _0x5b190d["length"], _0x4aa678 = [], _0x5e0849 = 0; _0x5e0849 < _0x1ed3be; _0x5e0849++) _0x4aa678[_0x5e0849 >>> 2] |= (255 & _0x5b190d["charCodeAt"](_0x5e0849)) << 24 - _0x5e0849 % 4 * 8;
        return new _0x4d04f1["init"](_0x4aa678, _0x1ed3be);
      } }, _0x32d317 = _0x3ca39f["Utf8"] = { "stringify": function(_0x1d9a3c) {
        var _0x49fcdd = _0x2f89a6;
        try {
          return decodeURIComponent(escape(_0x5071ec["stringify"](_0x1d9a3c)));
        } catch (_0x38be40) {
          throw new Error("Malformed UTF-8 data");
        }
      }, "parse": function(_0x31f68b) {
        var _0x3a1d9f = _0x2f89a6;
        return _0x5071ec["parse"](unescape(encodeURIComponent(_0x31f68b)));
      } }, _0x5dcfa4 = _0x447815["BufferedBlockAlgorithm"] = _0x577691["extend"]({ "reset": function() {
        var _0xcf246e = _0x2f89a6;
        this["_data"] = new _0x4d04f1["init"](), this["_nDataBytes"] = 0;
      }, "_append": function(_0x126e50) {
        var _0x384254 = _0x2f89a6;
        "string" == typeof _0x126e50 && (_0x126e50 = _0x32d317["parse"](_0x126e50)), this["_data"]["concat"](_0x126e50), this["_nDataBytes"] += _0x126e50["sigBytes"];
      }, "_process": function(_0x614193) {
        var _0x242894 = _0x2f89a6, _0x43ce87, _0x5d16d7 = this["_data"], _0x424275 = _0x5d16d7["words"], _0x3fce2f = _0x5d16d7["sigBytes"], _0x209243 = this["blockSize"], _0xc7d53 = 4 * _0x209243, _0xc60948 = _0x3fce2f / _0xc7d53;
        _0xc60948 = _0x614193 ? _0x16f8c5["ceil"](_0xc60948) : _0x16f8c5["max"]((0 | _0xc60948) - this["_minBufferSize"], 0);
        var _0x261b0a = _0xc60948 * _0x209243, _0x22283a = _0x16f8c5["min"](4 * _0x261b0a, _0x3fce2f);
        if (_0x261b0a) {
          for (var _0x591f04 = 0; _0x591f04 < _0x261b0a; _0x591f04 += _0x209243) this["_doProcessBlock"](_0x424275, _0x591f04);
          _0x43ce87 = _0x424275["splice"](0, _0x261b0a), _0x5d16d7["sigBytes"] -= _0x22283a;
        }
        return new _0x4d04f1["init"](_0x43ce87, _0x22283a);
      }, "clone": function() {
        var _0x18f084 = _0x2f89a6, _0x23c75a = _0x577691["clone"]["call"](this);
        return _0x23c75a["_data"] = this["_data"]["clone"](), _0x23c75a;
      }, "_minBufferSize": 0 }), _0x3c0668 = (_0x447815["Hasher"] = _0x5dcfa4["extend"]({ "cfg": _0x577691["extend"](), "init": function(_0x4c9ce7) {
        var _0x66e72b = _0x2f89a6;
        this["cfg"] = this["cfg"]["extend"](_0x4c9ce7), this["reset"]();
      }, "reset": function() {
        var _0x2512b6 = _0x2f89a6;
        _0x5dcfa4["reset"]["call"](this), this["_doReset"]();
      }, "update": function(_0x26f017) {
        var _0x38f39c = _0x2f89a6;
        return this["_append"](_0x26f017), this["_process"](), this;
      }, "finalize": function(_0x40e7de) {
        _0x40e7de && this["_append"](_0x40e7de);
        var _0x2b57e7 = this["_doFinalize"]();
        return _0x2b57e7;
      }, "blockSize": 16, "_createHelper": function(_0x4f99ea) {
        return function(_0x5d3256, _0x566596) {
          var _0x1bc939 = a0_0x4f40;
          return new _0x4f99ea["init"](_0x566596)["finalize"](_0x5d3256);
        };
      }, "_createHmacHelper": function(_0xd58ca) {
        return function(_0x1f2ad5, _0x2f1aed) {
          var _0x4cc02d = a0_0x4f40;
          return new _0x3c0668["HMAC"]["init"](_0xd58ca, _0x2f1aed)["finalize"](_0x1f2ad5);
        };
      } }), _0x433354["algo"] = {});
      return _0x433354;
    })(Math), _0x1c08cb);
  }, 754: function(_0x56be34, _0x1b76dd, _0x18eb9a) {
    var _0x5a2e44 = a0_0x4f40, _0x5248b9;
    _0x56be34["exports"] = (_0x5248b9 = _0x18eb9a(21), (function() {
      var _0x431d30 = _0x5a2e44, _0x509bc6 = _0x5248b9, _0x20bdaa = _0x509bc6["lib"], _0x588f13 = _0x20bdaa["WordArray"], _0x22b615 = _0x509bc6["enc"];
      function _0x33abe1(_0x1c5a2c, _0x5aca97, _0xf95c48) {
        var _0x1f132e = _0x431d30;
        for (var _0x55087b = [], _0x1881ea = 0, _0x22df46 = 0; _0x22df46 < _0x5aca97; _0x22df46++) if (_0x22df46 % 4) {
          var _0x341d2b = _0xf95c48[_0x1c5a2c["charCodeAt"](_0x22df46 - 1)] << _0x22df46 % 4 * 2, _0x29bd9c = _0xf95c48[_0x1c5a2c["charCodeAt"](_0x22df46)] >>> 6 - _0x22df46 % 4 * 2, _0x493ef9 = _0x341d2b | _0x29bd9c;
          _0x55087b[_0x1881ea >>> 2] |= _0x493ef9 << 24 - _0x1881ea % 4 * 8, _0x1881ea++;
        }
        return _0x588f13["create"](_0x55087b, _0x1881ea);
      }
      _0x22b615["Base64"] = { "stringify": function(_0x1e7eb4) {
        var _0x32ccc5 = _0x431d30, _0x3d9a25 = _0x1e7eb4["words"], _0x44c0a4 = _0x1e7eb4["sigBytes"], _0x200e7c = this["_map"];
        _0x1e7eb4["clamp"]();
        for (var _0x57f96c = [], _0x4127e5 = 0; _0x4127e5 < _0x44c0a4; _0x4127e5 += 3) for (var _0x3c6b90 = _0x3d9a25[_0x4127e5 >>> 2] >>> 24 - _0x4127e5 % 4 * 8 & 255, _0x32ac34 = _0x3d9a25[_0x4127e5 + 1 >>> 2] >>> 24 - (_0x4127e5 + 1) % 4 * 8 & 255, _0x1b9c73 = _0x3d9a25[_0x4127e5 + 2 >>> 2] >>> 24 - (_0x4127e5 + 2) % 4 * 8 & 255, _0x816713 = _0x3c6b90 << 16 | _0x32ac34 << 8 | _0x1b9c73, _0x884ec6 = 0; _0x884ec6 < 4 && _0x4127e5 + 0.75 * _0x884ec6 < _0x44c0a4; _0x884ec6++) _0x57f96c["push"](_0x200e7c["charAt"](_0x816713 >>> 6 * (3 - _0x884ec6) & 63));
        var _0x42ae1e = _0x200e7c["charAt"](64);
        if (_0x42ae1e) {
          for (; _0x57f96c["length"] % 4; ) _0x57f96c["push"](_0x42ae1e);
        }
        return _0x57f96c["join"]("");
      }, "parse": function(_0x472d2d) {
        var _0x915ff7 = _0x431d30, _0x2b81ea = _0x472d2d["length"], _0x276557 = this["_map"], _0x3cff95 = this["_reverseMap"];
        if (!_0x3cff95) {
          _0x3cff95 = this["_reverseMap"] = [];
          for (var _0x492083 = 0; _0x492083 < _0x276557["length"]; _0x492083++) _0x3cff95[_0x276557["charCodeAt"](_0x492083)] = _0x492083;
        }
        var _0x300b77 = _0x276557["charAt"](64);
        if (_0x300b77) {
          var _0x20cb55 = _0x472d2d["indexOf"](_0x300b77);
          -1 !== _0x20cb55 && (_0x2b81ea = _0x20cb55);
        }
        return _0x33abe1(_0x472d2d, _0x2b81ea, _0x3cff95);
      }, "_map": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    })(), _0x5248b9["enc"]["Base64"]);
  }, 506: function(_0x1589d2, _0x3a5fab, _0x3490d6) {
    var _0x5911a0 = a0_0x4f40, _0x42e5be, _0x5d75e3, _0x5b6288, _0x59897a, _0x290cad, _0x23217e, _0x42ddaa, _0x1e7bf6;
    _0x1589d2["exports"] = (_0x1e7bf6 = _0x3490d6(21), _0x3490d6(471), _0x3490d6(25), _0x42e5be = _0x1e7bf6, _0x5d75e3 = _0x42e5be["lib"], _0x5b6288 = _0x5d75e3["Base"], _0x59897a = _0x5d75e3["WordArray"], _0x290cad = _0x42e5be["algo"], _0x23217e = _0x290cad["MD5"], _0x42ddaa = _0x290cad["EvpKDF"] = _0x5b6288["extend"]({ "cfg": _0x5b6288["extend"]({ "keySize": 4, "hasher": _0x23217e, "iterations": 1 }), "init": function(_0x44deb6) {
      var _0x474ada = _0x5911a0;
      this["cfg"] = this["cfg"]["extend"](_0x44deb6);
    }, "compute": function(_0x1d554c, _0x7acc3f) {
      var _0x15de21 = _0x5911a0;
      for (var _0x42b318, _0x3eaa9e = this["cfg"], _0xb67385 = _0x3eaa9e["hasher"]["create"](), _0x4b0c02 = _0x59897a["create"](), _0x33a55f = _0x4b0c02["words"], _0x1cfac3 = _0x3eaa9e["keySize"], _0x461f17 = _0x3eaa9e["iterations"]; _0x33a55f["length"] < _0x1cfac3; ) {
        _0x42b318 && _0xb67385["update"](_0x42b318), _0x42b318 = _0xb67385["update"](_0x1d554c)["finalize"](_0x7acc3f), _0xb67385["reset"]();
        for (var _0x2baf3b = 1; _0x2baf3b < _0x461f17; _0x2baf3b++) _0x42b318 = _0xb67385["finalize"](_0x42b318), _0xb67385["reset"]();
        _0x4b0c02["concat"](_0x42b318);
      }
      return _0x4b0c02["sigBytes"] = 4 * _0x1cfac3, _0x4b0c02;
    } }), _0x42e5be["EvpKDF"] = function(_0x493fee, _0x21b42a, _0x54045a) {
      var _0x3af463 = _0x5911a0;
      return _0x42ddaa["create"](_0x54045a)["compute"](_0x493fee, _0x21b42a);
    }, _0x1e7bf6["EvpKDF"]);
  }, 25: function(_0x5cb6e2, _0x158d49, _0x251ae7) {
    var _0x223c3c = a0_0x4f40, _0x4c7462, _0x38c673, _0x342ba0, _0x22481f, _0x3c948a, _0x54f622, _0x2895da;
    _0x5cb6e2["exports"] = (_0x4c7462 = _0x251ae7(21), _0x38c673 = _0x4c7462, _0x342ba0 = _0x38c673["lib"], _0x22481f = _0x342ba0["Base"], _0x3c948a = _0x38c673["enc"], _0x54f622 = _0x3c948a["Utf8"], _0x2895da = _0x38c673["algo"], void (_0x2895da["HMAC"] = _0x22481f["extend"]({ "init": function(_0x3db0fe, _0x16d65e) {
      var _0x1f9e0f = _0x223c3c;
      _0x3db0fe = this["_hasher"] = new _0x3db0fe["init"](), "string" == typeof _0x16d65e && (_0x16d65e = _0x54f622["parse"](_0x16d65e));
      var _0x179a4e = _0x3db0fe["blockSize"], _0x1e88fa = 4 * _0x179a4e;
      _0x16d65e["sigBytes"] > _0x1e88fa && (_0x16d65e = _0x3db0fe["finalize"](_0x16d65e)), _0x16d65e["clamp"]();
      for (var _0x518d6e = this["_oKey"] = _0x16d65e["clone"](), _0x22c10b = this["_iKey"] = _0x16d65e["clone"](), _0x99d33e = _0x518d6e["words"], _0x29ec40 = _0x22c10b["words"], _0x4748 = 0; _0x4748 < _0x179a4e; _0x4748++) _0x99d33e[_0x4748] ^= 1549556828, _0x29ec40[_0x4748] ^= 909522486;
      _0x518d6e["sigBytes"] = _0x22c10b["sigBytes"] = _0x1e88fa, this["reset"]();
    }, "reset": function() {
      var _0x382fde = _0x223c3c, _0x45fff3 = this["_hasher"];
      _0x45fff3["reset"](), _0x45fff3["update"](this["_iKey"]);
    }, "update": function(_0x5b9654) {
      var _0x294c75 = _0x223c3c;
      return this["_hasher"]["update"](_0x5b9654), this;
    }, "finalize": function(_0x5b20af) {
      var _0x1c6cf4 = _0x223c3c, _0xe7c360 = this["_hasher"], _0x2d6387 = _0xe7c360["finalize"](_0x5b20af);
      _0xe7c360["reset"]();
      var _0x59a5e6 = _0xe7c360["finalize"](this["_oKey"]["clone"]()["concat"](_0x2d6387));
      return _0x59a5e6;
    } })));
  }, 636: function(_0x3d102a, _0x456b48, _0x4c08fb) {
    var _0x22a2d9 = a0_0x4f40, _0x316a46;
    _0x3d102a["exports"] = (_0x316a46 = _0x4c08fb(21), (function(_0x4767f7) {
      var _0x56f3eb = _0x22a2d9, _0x26b6e7 = _0x316a46, _0x440676 = _0x26b6e7["lib"], _0x47d48c = _0x440676["WordArray"], _0x4fffe3 = _0x440676["Hasher"], _0x131b3b = _0x26b6e7["algo"], _0x43e735 = [];
      !(function() {
        var _0x395d33 = _0x56f3eb;
        for (var _0x179bb7 = 0; _0x179bb7 < 64; _0x179bb7++) _0x43e735[_0x179bb7] = 4294967296 * _0x4767f7["abs"](_0x4767f7["sin"](_0x179bb7 + 1)) | 0;
      })();
      var _0x370d52 = _0x131b3b["MD5"] = _0x4fffe3["extend"]({ "_doReset": function() {
        var _0x3ef373 = _0x56f3eb;
        this["_hash"] = new _0x47d48c["init"]([1732584193, 4023233417, 2562383102, 271733878]);
      }, "_doProcessBlock": function(_0x457a54, _0x2239a7) {
        var _0x219e98 = _0x56f3eb;
        for (var _0x547fb4 = 0; _0x547fb4 < 16; _0x547fb4++) {
          var _0xd27e17 = _0x2239a7 + _0x547fb4, _0x5a3e02 = _0x457a54[_0xd27e17];
          _0x457a54[_0xd27e17] = 16711935 & (_0x5a3e02 << 8 | _0x5a3e02 >>> 24) | 4278255360 & (_0x5a3e02 << 24 | _0x5a3e02 >>> 8);
        }
        var _0x2f2719 = this["_hash"]["words"], _0x5be6e = _0x457a54[_0x2239a7 + 0], _0x24db9d = _0x457a54[_0x2239a7 + 1], _0x4f5d5b = _0x457a54[_0x2239a7 + 2], _0x1e4f29 = _0x457a54[_0x2239a7 + 3], _0x2e6b30 = _0x457a54[_0x2239a7 + 4], _0x4610b6 = _0x457a54[_0x2239a7 + 5], _0x492da2 = _0x457a54[_0x2239a7 + 6], _0x1feee2 = _0x457a54[_0x2239a7 + 7], _0x1b0ab9 = _0x457a54[_0x2239a7 + 8], _0x1e01d7 = _0x457a54[_0x2239a7 + 9], _0x461227 = _0x457a54[_0x2239a7 + 10], _0x226a0d = _0x457a54[_0x2239a7 + 11], _0x512200 = _0x457a54[_0x2239a7 + 12], _0x24be77 = _0x457a54[_0x2239a7 + 13], _0x483a1e = _0x457a54[_0x2239a7 + 14], _0x368c28 = _0x457a54[_0x2239a7 + 15], _0x536633 = _0x2f2719[0], _0x34709e = _0x2f2719[1], _0x2dfc16 = _0x2f2719[2], _0x1ee60f = _0x2f2719[3];
        _0x536633 = _0xf21bb8(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x5be6e, 7, _0x43e735[0]), _0x1ee60f = _0xf21bb8(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x24db9d, 12, _0x43e735[1]), _0x2dfc16 = _0xf21bb8(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x4f5d5b, 17, _0x43e735[2]), _0x34709e = _0xf21bb8(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x1e4f29, 22, _0x43e735[3]), _0x536633 = _0xf21bb8(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x2e6b30, 7, _0x43e735[4]), _0x1ee60f = _0xf21bb8(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x4610b6, 12, _0x43e735[5]), _0x2dfc16 = _0xf21bb8(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x492da2, 17, _0x43e735[6]), _0x34709e = _0xf21bb8(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x1feee2, 22, _0x43e735[7]), _0x536633 = _0xf21bb8(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x1b0ab9, 7, _0x43e735[8]), _0x1ee60f = _0xf21bb8(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x1e01d7, 12, _0x43e735[9]), _0x2dfc16 = _0xf21bb8(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x461227, 17, _0x43e735[10]), _0x34709e = _0xf21bb8(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x226a0d, 22, _0x43e735[11]), _0x536633 = _0xf21bb8(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x512200, 7, _0x43e735[12]), _0x1ee60f = _0xf21bb8(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x24be77, 12, _0x43e735[13]), _0x2dfc16 = _0xf21bb8(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x483a1e, 17, _0x43e735[14]), _0x34709e = _0xf21bb8(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x368c28, 22, _0x43e735[15]), _0x536633 = _0x10befa(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x24db9d, 5, _0x43e735[16]), _0x1ee60f = _0x10befa(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x492da2, 9, _0x43e735[17]), _0x2dfc16 = _0x10befa(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x226a0d, 14, _0x43e735[18]), _0x34709e = _0x10befa(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x5be6e, 20, _0x43e735[19]), _0x536633 = _0x10befa(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x4610b6, 5, _0x43e735[20]), _0x1ee60f = _0x10befa(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x461227, 9, _0x43e735[21]), _0x2dfc16 = _0x10befa(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x368c28, 14, _0x43e735[22]), _0x34709e = _0x10befa(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x2e6b30, 20, _0x43e735[23]), _0x536633 = _0x10befa(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x1e01d7, 5, _0x43e735[24]), _0x1ee60f = _0x10befa(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x483a1e, 9, _0x43e735[25]), _0x2dfc16 = _0x10befa(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x1e4f29, 14, _0x43e735[26]), _0x34709e = _0x10befa(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x1b0ab9, 20, _0x43e735[27]), _0x536633 = _0x10befa(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x24be77, 5, _0x43e735[28]), _0x1ee60f = _0x10befa(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x4f5d5b, 9, _0x43e735[29]), _0x2dfc16 = _0x10befa(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x1feee2, 14, _0x43e735[30]), _0x34709e = _0x10befa(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x512200, 20, _0x43e735[31]), _0x536633 = _0x35494e(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x4610b6, 4, _0x43e735[32]), _0x1ee60f = _0x35494e(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x1b0ab9, 11, _0x43e735[33]), _0x2dfc16 = _0x35494e(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x226a0d, 16, _0x43e735[34]), _0x34709e = _0x35494e(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x483a1e, 23, _0x43e735[35]), _0x536633 = _0x35494e(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x24db9d, 4, _0x43e735[36]), _0x1ee60f = _0x35494e(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x2e6b30, 11, _0x43e735[37]), _0x2dfc16 = _0x35494e(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x1feee2, 16, _0x43e735[38]), _0x34709e = _0x35494e(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x461227, 23, _0x43e735[39]), _0x536633 = _0x35494e(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x24be77, 4, _0x43e735[40]), _0x1ee60f = _0x35494e(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x5be6e, 11, _0x43e735[41]), _0x2dfc16 = _0x35494e(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x1e4f29, 16, _0x43e735[42]), _0x34709e = _0x35494e(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x492da2, 23, _0x43e735[43]), _0x536633 = _0x35494e(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x1e01d7, 4, _0x43e735[44]), _0x1ee60f = _0x35494e(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x512200, 11, _0x43e735[45]), _0x2dfc16 = _0x35494e(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x368c28, 16, _0x43e735[46]), _0x34709e = _0x35494e(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x4f5d5b, 23, _0x43e735[47]), _0x536633 = _0xbafb87(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x5be6e, 6, _0x43e735[48]), _0x1ee60f = _0xbafb87(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x1feee2, 10, _0x43e735[49]), _0x2dfc16 = _0xbafb87(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x483a1e, 15, _0x43e735[50]), _0x34709e = _0xbafb87(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x4610b6, 21, _0x43e735[51]), _0x536633 = _0xbafb87(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x512200, 6, _0x43e735[52]), _0x1ee60f = _0xbafb87(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x1e4f29, 10, _0x43e735[53]), _0x2dfc16 = _0xbafb87(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x461227, 15, _0x43e735[54]), _0x34709e = _0xbafb87(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x24db9d, 21, _0x43e735[55]), _0x536633 = _0xbafb87(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x1b0ab9, 6, _0x43e735[56]), _0x1ee60f = _0xbafb87(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x368c28, 10, _0x43e735[57]), _0x2dfc16 = _0xbafb87(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x492da2, 15, _0x43e735[58]), _0x34709e = _0xbafb87(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x24be77, 21, _0x43e735[59]), _0x536633 = _0xbafb87(_0x536633, _0x34709e, _0x2dfc16, _0x1ee60f, _0x2e6b30, 6, _0x43e735[60]), _0x1ee60f = _0xbafb87(_0x1ee60f, _0x536633, _0x34709e, _0x2dfc16, _0x226a0d, 10, _0x43e735[61]), _0x2dfc16 = _0xbafb87(_0x2dfc16, _0x1ee60f, _0x536633, _0x34709e, _0x4f5d5b, 15, _0x43e735[62]), _0x34709e = _0xbafb87(_0x34709e, _0x2dfc16, _0x1ee60f, _0x536633, _0x1e01d7, 21, _0x43e735[63]), _0x2f2719[0] = _0x2f2719[0] + _0x536633 | 0, _0x2f2719[1] = _0x2f2719[1] + _0x34709e | 0, _0x2f2719[2] = _0x2f2719[2] + _0x2dfc16 | 0, _0x2f2719[3] = _0x2f2719[3] + _0x1ee60f | 0;
      }, "_doFinalize": function() {
        var _0x1375a7 = _0x56f3eb, _0x24ef8f = this["_data"], _0x595729 = _0x24ef8f["words"], _0x71238a = 8 * this["_nDataBytes"], _0x113057 = 8 * _0x24ef8f["sigBytes"];
        _0x595729[_0x113057 >>> 5] |= 128 << 24 - _0x113057 % 32;
        var _0x3df787 = _0x4767f7["floor"](_0x71238a / 4294967296), _0x64e68c = _0x71238a;
        _0x595729[15 + (_0x113057 + 64 >>> 9 << 4)] = 16711935 & (_0x3df787 << 8 | _0x3df787 >>> 24) | 4278255360 & (_0x3df787 << 24 | _0x3df787 >>> 8), _0x595729[14 + (_0x113057 + 64 >>> 9 << 4)] = 16711935 & (_0x64e68c << 8 | _0x64e68c >>> 24) | 4278255360 & (_0x64e68c << 24 | _0x64e68c >>> 8), _0x24ef8f["sigBytes"] = 4 * (_0x595729["length"] + 1), this["_process"]();
        for (var _0x272347 = this["_hash"], _0x3edcdc = _0x272347["words"], _0x2ff084 = 0; _0x2ff084 < 4; _0x2ff084++) {
          var _0x4839d4 = _0x3edcdc[_0x2ff084];
          _0x3edcdc[_0x2ff084] = 16711935 & (_0x4839d4 << 8 | _0x4839d4 >>> 24) | 4278255360 & (_0x4839d4 << 24 | _0x4839d4 >>> 8);
        }
        return _0x272347;
      }, "clone": function() {
        var _0x4e6378 = _0x56f3eb, _0x24b0eb = _0x4fffe3["clone"]["call"](this);
        return _0x24b0eb["_hash"] = this["_hash"]["clone"](), _0x24b0eb;
      } });
      function _0xf21bb8(_0x37f604, _0x53bbcc, _0x1237d4, _0x439d6c, _0x2666da, _0x249ed4, _0x1948e8) {
        var _0x5ca345 = _0x37f604 + (_0x53bbcc & _0x1237d4 | ~_0x53bbcc & _0x439d6c) + _0x2666da + _0x1948e8;
        return (_0x5ca345 << _0x249ed4 | _0x5ca345 >>> 32 - _0x249ed4) + _0x53bbcc;
      }
      function _0x10befa(_0x286d12, _0x403fb6, _0x5f1d03, _0x2cba74, _0x7e66cb, _0x3155d3, _0x24474d) {
        var _0x1eeb08 = _0x286d12 + (_0x403fb6 & _0x2cba74 | _0x5f1d03 & ~_0x2cba74) + _0x7e66cb + _0x24474d;
        return (_0x1eeb08 << _0x3155d3 | _0x1eeb08 >>> 32 - _0x3155d3) + _0x403fb6;
      }
      function _0x35494e(_0x1bf680, _0x46edd5, _0x3d8974, _0x24ec56, _0x390d41, _0x374f49, _0x5d87e8) {
        var _0x250997 = _0x1bf680 + (_0x46edd5 ^ _0x3d8974 ^ _0x24ec56) + _0x390d41 + _0x5d87e8;
        return (_0x250997 << _0x374f49 | _0x250997 >>> 32 - _0x374f49) + _0x46edd5;
      }
      function _0xbafb87(_0x2fbccf, _0x4c0f1d, _0x52eafb, _0x59098b, _0x527fbc, _0x181da3, _0xd51589) {
        var _0x461ed0 = _0x2fbccf + (_0x52eafb ^ (_0x4c0f1d | ~_0x59098b)) + _0x527fbc + _0xd51589;
        return (_0x461ed0 << _0x181da3 | _0x461ed0 >>> 32 - _0x181da3) + _0x4c0f1d;
      }
      _0x26b6e7["MD5"] = _0x4fffe3["_createHelper"](_0x370d52), _0x26b6e7["HmacMD5"] = _0x4fffe3["_createHmacHelper"](_0x370d52);
    })(Math), _0x316a46["MD5"]);
  }, 471: function(_0xd29913, _0x366ae4, _0x1f98c0) {
    var _0x3e0e5a = a0_0x4f40, _0x5283ee, _0x54c81c, _0x305ca9, _0x3fb98b, _0x340536, _0x552742, _0x3c370b, _0x18a6e6;
    _0xd29913["exports"] = (_0x18a6e6 = _0x1f98c0(21), _0x5283ee = _0x18a6e6, _0x54c81c = _0x5283ee["lib"], _0x305ca9 = _0x54c81c["WordArray"], _0x3fb98b = _0x54c81c["Hasher"], _0x340536 = _0x5283ee["algo"], _0x552742 = [], _0x3c370b = _0x340536["SHA1"] = _0x3fb98b["extend"]({ "_doReset": function() {
      var _0x217543 = _0x3e0e5a;
      this["_hash"] = new _0x305ca9["init"]([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
    }, "_doProcessBlock": function(_0x13d19b, _0x5ad366) {
      var _0x5d8c22 = _0x3e0e5a;
      for (var _0x3cadcc = this["_hash"]["words"], _0x5c17fe = _0x3cadcc[0], _0x216fdd = _0x3cadcc[1], _0x4635f7 = _0x3cadcc[2], _0x2a167e = _0x3cadcc[3], _0x58c834 = _0x3cadcc[4], _0x2915be = 0; _0x2915be < 80; _0x2915be++) {
        if (_0x2915be < 16) _0x552742[_0x2915be] = 0 | _0x13d19b[_0x5ad366 + _0x2915be];
        else {
          var _0x154467 = _0x552742[_0x2915be - 3] ^ _0x552742[_0x2915be - 8] ^ _0x552742[_0x2915be - 14] ^ _0x552742[_0x2915be - 16];
          _0x552742[_0x2915be] = _0x154467 << 1 | _0x154467 >>> 31;
        }
        var _0x3e22ac = (_0x5c17fe << 5 | _0x5c17fe >>> 27) + _0x58c834 + _0x552742[_0x2915be];
        _0x3e22ac += _0x2915be < 20 ? 1518500249 + (_0x216fdd & _0x4635f7 | ~_0x216fdd & _0x2a167e) : _0x2915be < 40 ? 1859775393 + (_0x216fdd ^ _0x4635f7 ^ _0x2a167e) : _0x2915be < 60 ? (_0x216fdd & _0x4635f7 | _0x216fdd & _0x2a167e | _0x4635f7 & _0x2a167e) - 1894007588 : (_0x216fdd ^ _0x4635f7 ^ _0x2a167e) - 899497514, _0x58c834 = _0x2a167e, _0x2a167e = _0x4635f7, _0x4635f7 = _0x216fdd << 30 | _0x216fdd >>> 2, _0x216fdd = _0x5c17fe, _0x5c17fe = _0x3e22ac;
      }
      _0x3cadcc[0] = _0x3cadcc[0] + _0x5c17fe | 0, _0x3cadcc[1] = _0x3cadcc[1] + _0x216fdd | 0, _0x3cadcc[2] = _0x3cadcc[2] + _0x4635f7 | 0, _0x3cadcc[3] = _0x3cadcc[3] + _0x2a167e | 0, _0x3cadcc[4] = _0x3cadcc[4] + _0x58c834 | 0;
    }, "_doFinalize": function() {
      var _0x5900cd = _0x3e0e5a, _0x519101 = this["_data"], _0xd07a53 = _0x519101["words"], _0x1261d7 = 8 * this["_nDataBytes"], _0x10ad52 = 8 * _0x519101["sigBytes"];
      return _0xd07a53[_0x10ad52 >>> 5] |= 128 << 24 - _0x10ad52 % 32, _0xd07a53[14 + (_0x10ad52 + 64 >>> 9 << 4)] = Math["floor"](_0x1261d7 / 4294967296), _0xd07a53[15 + (_0x10ad52 + 64 >>> 9 << 4)] = _0x1261d7, _0x519101["sigBytes"] = 4 * _0xd07a53["length"], this["_process"](), this["_hash"];
    }, "clone": function() {
      var _0x25b538 = _0x3e0e5a, _0x5ece0d = _0x3fb98b["clone"]["call"](this);
      return _0x5ece0d["_hash"] = this["_hash"]["clone"](), _0x5ece0d;
    } }), _0x5283ee["SHA1"] = _0x3fb98b["_createHelper"](_0x3c370b), _0x5283ee["HmacSHA1"] = _0x3fb98b["_createHmacHelper"](_0x3c370b), _0x18a6e6["SHA1"]);
  }, 477: () => {
  } }, _0x9cbcd2 = {};
  function _0x418d9a(_0x176144) {
    var _0xe1ef40 = a0_0x4f40, _0x4e1a58 = _0x9cbcd2[_0x176144];
    if (void 0 !== _0x4e1a58) return _0x4e1a58["exports"];
    var _0x36cb75 = _0x9cbcd2[_0x176144] = { "exports": {} };
    return _0x2179fa[_0x176144]["call"](_0x36cb75["exports"], _0x36cb75, _0x36cb75["exports"], _0x418d9a), _0x36cb75["exports"];
  }


_0x418d9a["g"] = {};
_0x418d9a(955);
return _0x418d9a(21);
})();
// China Mobile capture-only application, v2.0.0. GPL-3.0-only.
// AES validation is provided by the bundled CryptoJS library. No network requests.
(function () {
  const prefix = "zayia_china_mobile_";
  const target = /^https:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/[LD]N\/(?:uam(?:onekey|randcode)login|realPersonAuthentication)\/autoLogin(?:\?.*)?$/;
  const keys = { "2": "bAIgvwAuA4tbDr9d", "12": "V0dSUFZtS1NWRnJa", "14": "tVkdaRWRY0ZkV1Vr" };
  const ivs = { "2": "9791027341711819", "12": "UkdWMVpWTVVWaGVq", "14": "VjFSQ1ZtVkQxRTlQ" };
  const read = key => typeof $prefs !== "undefined" ? $prefs.valueForKey(prefix + key) : $persistentStore.read(prefix + key);
  const write = (key, value) => typeof $prefs !== "undefined" ? $prefs.setValueForKey(value, prefix + key) : $persistentStore.write(value, prefix + key);
  try {
    if (typeof $request === "undefined" || !target.test($request.url || "") || String($request.method || "").toUpperCase() !== "POST") return;
    const headers = $request.headers || {};
    const headerKey = Object.keys(headers).find(key => key.toLowerCase() === "x-qen");
    const mode = String(headerKey ? headers[headerKey] : "");
    const body = $request.body;
    if (!Object.prototype.hasOwnProperty.call(keys, mode) || typeof body !== "string" || !body) throw new Error("unsupported capture");
    const params = JSON.parse(captureCrypto.AES.decrypt(body, captureCrypto.enc.Utf8.parse(keys[mode]), {
      iv: captureCrypto.enc.Utf8.parse(ivs[mode]), mode: captureCrypto.mode.CBC, padding: captureCrypto.pad.Pkcs7,
    }).toString(captureCrypto.enc.Utf8));
    if (!params?.xk || !params.reqBody || typeof params.reqBody !== "object" || Array.isArray(params.reqBody)) throw new Error("invalid capture");
    if (params.reqBody.devToken && params.reqBody.riskToken) {
      console.log("[中国移动] 请先在 App 完成验证后重新抓取。");
      return;
    }
    const previous = { params: read("params") || "", url: read("url") || "", x_qen: read("x_qen") || "" };
    if (previous.params === body && previous.url === $request.url && String(previous.x_qen) === mode) return;
    try {
      if (!write("params", body) || !write("url", $request.url) || !write("x_qen", mode)) throw new Error("write failed");
    } catch (error) {
      for (const key of Object.keys(previous)) { try { write(key, previous[key]); } catch {} }
      throw error;
    }
    const silent = /^(true|1|是)$/i.test(String(read("silent") || ""));
    const now = Date.now(), last = Number(read("capture_notice_at") || 0);
    if (!silent && (!last || now - last >= 600000 || now < last)) {
      const text = /^1\d{10}$/.test(String(read("phonenumber") || "")) ? "已保存登录参数，供 Scripting 直接查询。" : "请在 BoxJS「Zayia 组件服务 → 中国移动」中填写手机号。";
      if (typeof $notify === "function") $notify("中国移动", "小组件凭据已更新", text);
      else $notification.post("中国移动", "小组件凭据已更新", text);
      write("capture_notice_at", now);
    }
  } catch {
    console.log("[中国移动] 捕获或保存失败，请重新打开 App 登录并检查存储。");
  } finally { $done({}); }
})();

})();
