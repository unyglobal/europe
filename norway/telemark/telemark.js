// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"telemark","repository":"europe","path":"norway/telemark","depth":2,"parent":"norway","children":["porsgrunn","skien"]});
export const childModules = Object.freeze({"porsgrunn":"./porsgrunn/porsgrunn.js","skien":"./skien/skien.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
