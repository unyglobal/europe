// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bergen","repository":"europe","path":"norway/vestland/bergen","depth":3,"parent":"norway/vestland","children":["bergenhus","eidemarken","jellet-nord","vagsbunnen"]});
export const childModules = Object.freeze({"bergenhus":"./bergenhus/bergenhus.js","eidemarken":"./eidemarken/eidemarken.js","jellet-nord":"./jellet-nord/jellet-nord.js","vagsbunnen":"./vagsbunnen/vagsbunnen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
