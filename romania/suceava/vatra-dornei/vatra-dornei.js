// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vatra-dornei","repository":"europe","path":"romania/suceava/vatra-dornei","depth":3,"parent":"romania/suceava","children":["buliceni","calinesti","colbu","sarisor","saru","sunatori"]});
export const childModules = Object.freeze({"buliceni":"./buliceni/buliceni.js","calinesti":"./calinesti/calinesti.js","colbu":"./colbu/colbu.js","sarisor":"./sarisor/sarisor.js","saru":"./saru/saru.js","sunatori":"./sunatori/sunatori.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
