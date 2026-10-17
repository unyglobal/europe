// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aylesbury","repository":"europe","path":"united-kingdom/england/aylesbury","depth":3,"parent":"united-kingdom/england","children":["manor-park"]});
export const childModules = Object.freeze({"manor-park":"./manor-park/manor-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
