// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cwmbran","repository":"europe","path":"united-kingdom/wales/cwmbran","depth":3,"parent":"united-kingdom/wales","children":["forge-hammer","northville","old-cwmbran","southville"]});
export const childModules = Object.freeze({"forge-hammer":"./forge-hammer/forge-hammer.js","northville":"./northville/northville.js","old-cwmbran":"./old-cwmbran/old-cwmbran.js","southville":"./southville/southville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
