// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"berezhany","repository":"europe","path":"ukraine/ternopil/berezhany","depth":3,"parent":"ukraine/ternopil","children":["adamovka"]});
export const childModules = Object.freeze({"adamovka":"./adamovka/adamovka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
