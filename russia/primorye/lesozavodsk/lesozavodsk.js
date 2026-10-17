// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lesozavodsk","repository":"europe","path":"russia/primorye/lesozavodsk","depth":3,"parent":"russia/primorye","children":["mezhgor-ye"]});
export const childModules = Object.freeze({"mezhgor-ye":"./mezhgor-ye/mezhgor-ye.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
