// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"praga-po-noc","repository":"europe","path":"poland/mazovia/praga-po-noc","depth":3,"parent":"poland/mazovia","children":["nowa-praga","praga","stara-praga"]});
export const childModules = Object.freeze({"nowa-praga":"./nowa-praga/nowa-praga.js","praga":"./praga/praga.js","stara-praga":"./stara-praga/stara-praga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
