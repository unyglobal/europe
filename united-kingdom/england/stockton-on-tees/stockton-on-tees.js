// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stockton-on-tees","repository":"europe","path":"united-kingdom/england/stockton-on-tees","depth":3,"parent":"united-kingdom/england","children":["newham-grange","newtown","primrose-hill","queen-s-park","stockton-grange"]});
export const childModules = Object.freeze({"newham-grange":"./newham-grange/newham-grange.js","newtown":"./newtown/newtown.js","primrose-hill":"./primrose-hill/primrose-hill.js","queen-s-park":"./queen-s-park/queen-s-park.js","stockton-grange":"./stockton-grange/stockton-grange.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
