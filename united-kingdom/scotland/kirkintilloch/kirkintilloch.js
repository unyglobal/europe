// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kirkintilloch","repository":"europe","path":"united-kingdom/scotland/kirkintilloch","depth":3,"parent":"united-kingdom/scotland","children":["back-o-loch","barleybank","broomhill","eastside","hillhead","townhead"]});
export const childModules = Object.freeze({"back-o-loch":"./back-o-loch/back-o-loch.js","barleybank":"./barleybank/barleybank.js","broomhill":"./broomhill/broomhill.js","eastside":"./eastside/eastside.js","hillhead":"./hillhead/hillhead.js","townhead":"./townhead/townhead.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
