// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mohacs","repository":"europe","path":"hungary/baranya/mohacs","depth":3,"parent":"hungary/baranya","children":["felsokanda","felsolog","felsomezo","kismohacs","ordas","papret","porond","telek"]});
export const childModules = Object.freeze({"felsokanda":"./felsokanda/felsokanda.js","felsolog":"./felsolog/felsolog.js","felsomezo":"./felsomezo/felsomezo.js","kismohacs":"./kismohacs/kismohacs.js","ordas":"./ordas/ordas.js","papret":"./papret/papret.js","porond":"./porond/porond.js","telek":"./telek/telek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
