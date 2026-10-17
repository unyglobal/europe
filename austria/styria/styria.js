// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"styria","repository":"europe","path":"austria/styria","depth":2,"parent":"austria","children":["andritz","eggenberg","geidorf","graz","gries","jakomini","lend","sankt-leonhard","stra-gang","wetzelsdorf"]});
export const childModules = Object.freeze({"andritz":"./andritz/andritz.js","eggenberg":"./eggenberg/eggenberg.js","geidorf":"./geidorf/geidorf.js","graz":"./graz/graz.js","gries":"./gries/gries.js","jakomini":"./jakomini/jakomini.js","lend":"./lend/lend.js","sankt-leonhard":"./sankt-leonhard/sankt-leonhard.js","stra-gang":"./stra-gang/stra-gang.js","wetzelsdorf":"./wetzelsdorf/wetzelsdorf.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
