// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kohtla-jarve","repository":"europe","path":"estonia/ida-virumaa/kohtla-jarve","depth":3,"parent":"estonia/ida-virumaa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
