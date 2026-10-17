// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"berkovitsa","repository":"europe","path":"bulgaria/montana/berkovitsa","depth":3,"parent":"bulgaria/montana","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
