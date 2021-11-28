export default function ReadMind([[r1, s1], [r2, s2], [r3, s3], [r4, s4]]: [
  number,
  string
][]): [number, string] {
  console.log(r1, r2, r3, r4, s1, s2, s3, s4);

  var s5 = s1;
  var offset = orderOf(+r2, s2, +r3, s3, +r4, s4);
  var r5 = offset + Number(r1);
  if (r5 >= 15) r5 = r5 - 13;
  // document.getElementById("result").innerHTML =
  //   "the " + r2t(r5) + " of " + s2t(s5) + "!";
  return [r5, s5];
}

function orderOf(r2, s2, r3, s3, r4, s4) {
  if (compare(r2, s2, r3, s3)) {
    // 2 > 3
    if (compare(r2, s2, r4, s4)) {
      //card 2 is largest
      if (compare(r3, s3, r4, s4)) {
        // 2 > 3 > 4
        return 6;
      } else {
        // 2 > 4 > 3
        return 5;
      }
    } else {
      // 4 > 2 > 3
      return 3;
    }
  } else {
    // 3 > 2
    if (compare(r3, s3, r4, s4)) {
      // card 3 is largest
      if (compare(r2, s2, r4, s4)) {
        // 3 > 2 > 4
        return 4;
      } else {
        // 3 > 4 > 2
        return 2;
      }
    } else {
      // 4 > 3 > 2
      return 1;
    }
  }
}
function compare(r1, s1, r2, s2) {
  if (r1 > r2) return 1;
  if (r2 > r1) return 0;
  if (s2n(s1) > s2n(s2)) return 1;
  return 0;
}
function s2n(s) {
  if (s === "c") return 1;
  if (s === "h") return 2;
  if (s === "s") return 3;
  if (s === "d") return 4;
}
function r2t(r) {
  if (r <= 10) return r;
  if (r === 11) return "jack";
  if (r === 12) return "queen";
  if (r === 13) return "king";
  if (r === 14) return "ace";
}
function s2t(s) {
  if (s === "c") return "clubs";
  if (s === "h") return "hearts";
  if (s === "s") return "spades";
  if (s === "d") return "diamonds";
}
