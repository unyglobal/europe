// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sofia","repository":"europe","path":"bulgaria/sofia-capital/sofia","depth":3,"parent":"bulgaria/sofia-capital","children":["botevgrad","samokov"]});
export const childModules = Object.freeze({"botevgrad":"./botevgrad/botevgrad.js","samokov":"./samokov/samokov.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
