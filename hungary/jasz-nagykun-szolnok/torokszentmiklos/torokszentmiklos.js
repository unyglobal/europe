// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"torokszentmiklos","repository":"europe","path":"hungary/jasz-nagykun-szolnok/torokszentmiklos","depth":3,"parent":"hungary/jasz-nagykun-szolnok","children":["ballatelep","nagybartalaposdulo","nagymorotvadulo","szigetdulo","szolohatuljadulo","ujballa","ujtabladulo"]});
export const childModules = Object.freeze({"ballatelep":"./ballatelep/ballatelep.js","nagybartalaposdulo":"./nagybartalaposdulo/nagybartalaposdulo.js","nagymorotvadulo":"./nagymorotvadulo/nagymorotvadulo.js","szigetdulo":"./szigetdulo/szigetdulo.js","szolohatuljadulo":"./szolohatuljadulo/szolohatuljadulo.js","ujballa":"./ujballa/ujballa.js","ujtabladulo":"./ujtabladulo/ujtabladulo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
