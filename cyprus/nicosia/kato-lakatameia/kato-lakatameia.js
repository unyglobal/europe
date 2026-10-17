// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kato-lakatameia","repository":"europe","path":"cyprus/nicosia/kato-lakatameia","depth":3,"parent":"cyprus/nicosia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
