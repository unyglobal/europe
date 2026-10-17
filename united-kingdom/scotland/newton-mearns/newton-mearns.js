// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"newton-mearns","repository":"europe","path":"united-kingdom/scotland/newton-mearns","depth":3,"parent":"united-kingdom/scotland","children":["broom","burnhouse","crookfur","mearns"]});
export const childModules = Object.freeze({"broom":"./broom/broom.js","burnhouse":"./burnhouse/burnhouse.js","crookfur":"./crookfur/crookfur.js","mearns":"./mearns/mearns.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
