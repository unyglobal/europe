// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"corsica","repository":"europe","path":"france/corsica","depth":2,"parent":"france","children":["ajaccio","bastia"]});
export const childModules = Object.freeze({"ajaccio":"./ajaccio/ajaccio.js","bastia":"./bastia/bastia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
