// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"homyel-voblasc","repository":"europe","path":"belarus/homyel-voblasc","depth":2,"parent":"belarus","children":["dobrush","homyel","kalinkovichi","mazyr","rahachow","rechytsa","svetlogorsk","zhlobin","zytkavicy"]});
export const childModules = Object.freeze({"dobrush":"./dobrush/dobrush.js","homyel":"./homyel/homyel.js","kalinkovichi":"./kalinkovichi/kalinkovichi.js","mazyr":"./mazyr/mazyr.js","rahachow":"./rahachow/rahachow.js","rechytsa":"./rechytsa/rechytsa.js","svetlogorsk":"./svetlogorsk/svetlogorsk.js","zhlobin":"./zhlobin/zhlobin.js","zytkavicy":"./zytkavicy/zytkavicy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
