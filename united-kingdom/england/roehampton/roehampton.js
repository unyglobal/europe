// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"roehampton","repository":"europe","path":"united-kingdom/england/roehampton","depth":3,"parent":"united-kingdom/england","children":["roehampton-and-putney-heath"]});
export const childModules = Object.freeze({"roehampton-and-putney-heath":"./roehampton-and-putney-heath/roehampton-and-putney-heath.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
