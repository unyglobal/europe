// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ryde","repository":"europe","path":"united-kingdom/england/ryde","depth":3,"parent":"united-kingdom/england","children":["pelhamfield","st-john-s-park","weeks"]});
export const childModules = Object.freeze({"pelhamfield":"./pelhamfield/pelhamfield.js","st-john-s-park":"./st-john-s-park/st-john-s-park.js","weeks":"./weeks/weeks.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
