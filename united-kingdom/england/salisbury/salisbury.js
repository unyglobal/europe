// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salisbury","repository":"europe","path":"united-kingdom/england/salisbury","depth":3,"parent":"united-kingdom/england","children":["st-paul-s","the-close","wyndham-park"]});
export const childModules = Object.freeze({"st-paul-s":"./st-paul-s/st-paul-s.js","the-close":"./the-close/the-close.js","wyndham-park":"./wyndham-park/wyndham-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
