// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stavanger","repository":"europe","path":"norway/rogaland/stavanger","depth":3,"parent":"norway/rogaland","children":["kjelvene","straen"]});
export const childModules = Object.freeze({"kjelvene":"./kjelvene/kjelvene.js","straen":"./straen/straen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
