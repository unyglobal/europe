// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"toulouse","repository":"europe","path":"france/occitanie/toulouse","depth":3,"parent":"france/occitanie","children":["capitole","dalbade","esquirol","saint-georges","saint-sernin"]});
export const childModules = Object.freeze({"capitole":"./capitole/capitole.js","dalbade":"./dalbade/dalbade.js","esquirol":"./esquirol/esquirol.js","saint-georges":"./saint-georges/saint-georges.js","saint-sernin":"./saint-sernin/saint-sernin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
