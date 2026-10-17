// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"glossop","repository":"europe","path":"united-kingdom/england/glossop","depth":3,"parent":"united-kingdom/england","children":["whitfield-park"]});
export const childModules = Object.freeze({"whitfield-park":"./whitfield-park/whitfield-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
