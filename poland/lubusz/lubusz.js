// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lubusz","repository":"europe","path":"poland/lubusz","depth":2,"parent":"poland","children":["gorzow-wielkopolski","gubin","kostrzyn-nad-odra","miedzyrzecz","nowa-sol","s-ubice","sulechow","swiebodzin","zagan","zary","zielona-gora"]});
export const childModules = Object.freeze({"gorzow-wielkopolski":"./gorzow-wielkopolski/gorzow-wielkopolski.js","gubin":"./gubin/gubin.js","kostrzyn-nad-odra":"./kostrzyn-nad-odra/kostrzyn-nad-odra.js","miedzyrzecz":"./miedzyrzecz/miedzyrzecz.js","nowa-sol":"./nowa-sol/nowa-sol.js","s-ubice":"./s-ubice/s-ubice.js","sulechow":"./sulechow/sulechow.js","swiebodzin":"./swiebodzin/swiebodzin.js","zagan":"./zagan/zagan.js","zary":"./zary/zary.js","zielona-gora":"./zielona-gora/zielona-gora.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
