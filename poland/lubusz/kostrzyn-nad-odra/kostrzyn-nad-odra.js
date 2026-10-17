// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kostrzyn-nad-odra","repository":"europe","path":"poland/lubusz/kostrzyn-nad-odra","depth":3,"parent":"poland/lubusz","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
