// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"norrbotten","repository":"europe","path":"sweden/norrbotten","depth":2,"parent":"sweden","children":["boden","kiruna","lulea","pitea"]});
export const childModules = Object.freeze({"boden":"./boden/boden.js","kiruna":"./kiruna/kiruna.js","lulea":"./lulea/lulea.js","pitea":"./pitea/pitea.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
