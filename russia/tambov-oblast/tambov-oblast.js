// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tambov-oblast","repository":"europe","path":"russia/tambov-oblast","depth":2,"parent":"russia","children":["kirsanov","kotovsk","michurinsk","morshansk","rasskazovo","tambov","uvarovo","zherdevka"]});
export const childModules = Object.freeze({"kirsanov":"./kirsanov/kirsanov.js","kotovsk":"./kotovsk/kotovsk.js","michurinsk":"./michurinsk/michurinsk.js","morshansk":"./morshansk/morshansk.js","rasskazovo":"./rasskazovo/rasskazovo.js","tambov":"./tambov/tambov.js","uvarovo":"./uvarovo/uvarovo.js","zherdevka":"./zherdevka/zherdevka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
