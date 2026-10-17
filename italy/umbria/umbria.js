// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"umbria","repository":"europe","path":"italy/umbria","depth":2,"parent":"italy","children":["bastia-umbra","citta-di-castello","foligno","perugia","spoleto","terni","todi"]});
export const childModules = Object.freeze({"bastia-umbra":"./bastia-umbra/bastia-umbra.js","citta-di-castello":"./citta-di-castello/citta-di-castello.js","foligno":"./foligno/foligno.js","perugia":"./perugia/perugia.js","spoleto":"./spoleto/spoleto.js","terni":"./terni/terni.js","todi":"./todi/todi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
