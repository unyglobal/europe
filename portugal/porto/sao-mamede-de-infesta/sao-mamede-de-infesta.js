// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sao-mamede-de-infesta","repository":"europe","path":"portugal/porto/sao-mamede-de-infesta","depth":3,"parent":"portugal/porto","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
