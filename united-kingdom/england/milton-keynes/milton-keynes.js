// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"milton-keynes","repository":"europe","path":"united-kingdom/england/milton-keynes","depth":3,"parent":"united-kingdom/england","children":["central-milton-keynes"]});
export const childModules = Object.freeze({"central-milton-keynes":"./central-milton-keynes/central-milton-keynes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
