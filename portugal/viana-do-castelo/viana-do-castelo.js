// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"viana-do-castelo","repository":"europe","path":"portugal/viana-do-castelo","depth":2,"parent":"portugal","children":["arcos-de-valdevez","moncao","ponte-de-lima"]});
export const childModules = Object.freeze({"arcos-de-valdevez":"./arcos-de-valdevez/arcos-de-valdevez.js","moncao":"./moncao/moncao.js","ponte-de-lima":"./ponte-de-lima/ponte-de-lima.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
