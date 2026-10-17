// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stoke-on-trent","repository":"europe","path":"united-kingdom/england/stoke-on-trent","depth":3,"parent":"united-kingdom/england","children":["boothen","penkhull","stoke-upon-trent"]});
export const childModules = Object.freeze({"boothen":"./boothen/boothen.js","penkhull":"./penkhull/penkhull.js","stoke-upon-trent":"./stoke-upon-trent/stoke-upon-trent.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
