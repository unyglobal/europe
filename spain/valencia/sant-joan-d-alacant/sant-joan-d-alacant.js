// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sant-joan-d-alacant","repository":"europe","path":"spain/valencia/sant-joan-d-alacant","depth":3,"parent":"spain/valencia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
