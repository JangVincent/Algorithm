const GInfo = require('fs').readFileSync('t').toString().split('\n');
const s = GInfo.shift().trim().split(' ')[2];
const G = {}

for (let i in GInfo) {
  const pair = GInfo[i].trim().split(' ')
  if (!G[pair[0]]) {
    G[pair[0]]=[]
  }
  if (!G[pair[1]]) {
    G[pair[1]]=[]
  }
  G[pair[0]].push(pair[1])
  G[pair[1]].push(pair[0])
}

for (let i in G) {
  G[i] = G[i].sort((a,b) => a*1 - b*1)
}

const f = (G, s, flag) => {
  const v=[]
  let nv=[]

  nv.push(s);

  while (nv.length != 0) {
    let n = nv.shift();

    if (!v.includes(n)) {
      v.push(n);

      const tmp = (G[n] == undefined ? [] : G[n]);

      // true : bfs
      if (flag) {
        nv=[...nv, ...tmp]  
      } else {
        // false : dfs
        nv=[...tmp, ...nv]
      }
      
    }
  }
  return v.join(' ')
}
console.log(f(G,s,false)+'\n'+f(G,s,true))