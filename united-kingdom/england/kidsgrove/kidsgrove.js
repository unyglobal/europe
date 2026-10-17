// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kidsgrove","repository":"europe","path":"united-kingdom/england/kidsgrove","depth":3,"parent":"united-kingdom/england","children":["clough-hall","dove-bank","woodshutts"]});
export const childModules = Object.freeze({"clough-hall":"./clough-hall/clough-hall.js","dove-bank":"./dove-bank/dove-bank.js","woodshutts":"./woodshutts/woodshutts.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
