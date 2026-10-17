// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"larkhall","repository":"europe","path":"united-kingdom/scotland/larkhall","depth":3,"parent":"united-kingdom/scotland","children":["burnhead","hareleeshill","machan","meadowhill","strutherhill"]});
export const childModules = Object.freeze({"burnhead":"./burnhead/burnhead.js","hareleeshill":"./hareleeshill/hareleeshill.js","machan":"./machan/machan.js","meadowhill":"./meadowhill/meadowhill.js","strutherhill":"./strutherhill/strutherhill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
