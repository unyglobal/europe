// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sao-pedro-da-cova","repository":"europe","path":"portugal/porto/sao-pedro-da-cova","depth":3,"parent":"portugal/porto","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
