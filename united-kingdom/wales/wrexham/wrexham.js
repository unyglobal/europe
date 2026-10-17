// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wrexham","repository":"europe","path":"united-kingdom/wales/wrexham","depth":3,"parent":"united-kingdom/wales","children":["croes-eneurys","hightown","maes-y-dre","rhosddu"]});
export const childModules = Object.freeze({"croes-eneurys":"./croes-eneurys/croes-eneurys.js","hightown":"./hightown/hightown.js","maes-y-dre":"./maes-y-dre/maes-y-dre.js","rhosddu":"./rhosddu/rhosddu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
