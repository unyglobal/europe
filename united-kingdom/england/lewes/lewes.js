// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lewes","repository":"europe","path":"united-kingdom/england/lewes","depth":3,"parent":"united-kingdom/england","children":["cliffe","cuilfail","southover","st-anne-s","wallands-park"]});
export const childModules = Object.freeze({"cliffe":"./cliffe/cliffe.js","cuilfail":"./cuilfail/cuilfail.js","southover":"./southover/southover.js","st-anne-s":"./st-anne-s/st-anne-s.js","wallands-park":"./wallands-park/wallands-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
