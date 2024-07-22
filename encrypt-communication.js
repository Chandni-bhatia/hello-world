
// Create Base64 Object
var Base64 = {
	_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	encode: function (e) {
	  var t = "";
	  var n, r, i, s, o, u, a;
	  var f = 0;
	  e = Base64._utf8_encode(e);
	  while (f < e.length) {
		n = e.charCodeAt(f++);
		r = e.charCodeAt(f++);
		i = e.charCodeAt(f++);
		s = n >> 2;
		o = (n & 3) << 4 | r >> 4;
		u = (r & 15) << 2 | i >> 6;
		a = i & 63;
		if (isNaN(r)) {
		  u = a = 64
		} else if (isNaN(i)) {
		  a = 64
		}
		t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
	  }
	  return t
	},
  
	_utf8_encode: function (e) {
	  e = e.replace(/\r\n/g, "\\" + "n");
	  var t = "";
	  for (var n = 0; n < e.length; n++) {
		var r = e.charCodeAt(n);
		if (r < 128) {
		  t += String.fromCharCode(r)
		} else if (r > 127 && r < 2048) {
		  t += String.fromCharCode(r >> 6 | 192);
		  t += String.fromCharCode(r & 63 | 128)
		} else {
		  t += String.fromCharCode(r >> 12 | 224);
		  t += String.fromCharCode(r >> 6 & 63 | 128);
		  t += String.fromCharCode(r & 63 | 128)
		}
	  }
	  return t
	}
  }
  
  var encodedid = Base64.encode(lsuserid);
  lsuserid=Base64.encode(encodedid);
  var encodepass=Base64.encode(lspassword);
  lspassword=Base64.encode(encodepass);
// 	_utf8_encode: function (e) {
// 		e = e.replace(/\r\n/g, "\n");
// 		var t = "";
// 		for (var n = 0; n < e.length; n++) {
// 			var r = e.charCodeAt(n);
// 			if (r < 128) {
// 				t += String.fromCharCode(r)
// 			} else if (r > 127 && r < 2048) {
// 				t += String.fromCharCode(r >> 6 | 192);
// 				t += String.fromCharCode(r & 63 | 128)
// 			} else {
// 				t += String.fromCharCode(r >> 12 | 224);
// 				t += String.fromCharCode(r >> 6 & 63 | 128);
// 				t += String.fromCharCode(r & 63 | 128)
// 			}
// 		}
// 		return t
// 	},
// 	_utf8_decode: function (e) {
// 		var t = "";
// 		var n = 0;
// 		var r = c1 = c2 = 0;
// 		while (n < e.length) {
// 			r = e.charCodeAt(n);
// 			if (r < 128) {
// 				t += String.fromCharCode(r);
// 				n++
// 			} else if (r > 191 && r < 224) {
// 				c2 = e.charCodeAt(n + 1);
// 				t += String.fromCharCode((r & 31) << 6 | c2 & 63);
// 				n += 2
// 			} else {
// 				c2 = e.charCodeAt(n + 1);
// 				c3 = e.charCodeAt(n + 2);
// 				t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
// 				n += 3
// 			}
// 		}
// 		return t
// 	}
// }

// // Define the string
// var string = 'Hello World!';

// // Encode the String
// var encodedString = Base64.encode(string);
// console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

// // Decode the String
// var decodedString = Base64.decode(encodedString);
// console.log(decodedString); // Outputs: "Hello World!"
