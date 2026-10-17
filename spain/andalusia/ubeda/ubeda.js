// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ubeda","repository":"europe","path":"spain/andalusia/ubeda","depth":3,"parent":"spain/andalusia","children":["san-pablo-church"]});
export const childModules = Object.freeze({"san-pablo-church":"./san-pablo-church/san-pablo-church.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
