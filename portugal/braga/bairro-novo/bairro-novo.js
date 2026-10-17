// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bairro-novo","repository":"europe","path":"portugal/braga/bairro-novo","depth":3,"parent":"portugal/braga","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
