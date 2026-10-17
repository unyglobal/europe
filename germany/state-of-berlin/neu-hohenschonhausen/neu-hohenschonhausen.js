// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"neu-hohenschonhausen","repository":"europe","path":"germany/state-of-berlin/neu-hohenschonhausen","depth":3,"parent":"germany/state-of-berlin","children":["wartenberg"]});
export const childModules = Object.freeze({"wartenberg":"./wartenberg/wartenberg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
