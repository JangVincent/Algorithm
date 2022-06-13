console.log(
  "49 27 6D 20 65 78 68 61 75 73 74 65 64 2E"
    .split(" ")
    .map((v) => (v = String.fromCharCode(parseInt(v, 16))))
    .join("")
);
