// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"morecambe","repository":"europe","path":"united-kingdom/england/morecambe","depth":3,"parent":"united-kingdom/england","children":["west-end"]});
export const childModules = Object.freeze({"west-end":"./west-end/west-end.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
