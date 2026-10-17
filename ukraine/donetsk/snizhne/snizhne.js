// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"snizhne","repository":"europe","path":"ukraine/donetsk/snizhne","depth":3,"parent":"ukraine/donetsk","children":["kremennoye","zaprudnoye"]});
export const childModules = Object.freeze({"kremennoye":"./kremennoye/kremennoye.js","zaprudnoye":"./zaprudnoye/zaprudnoye.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
