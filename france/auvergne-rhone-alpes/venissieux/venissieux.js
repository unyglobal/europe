// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"venissieux","repository":"europe","path":"france/auvergne-rhone-alpes/venissieux","depth":3,"parent":"france/auvergne-rhone-alpes","children":["centre","charles-perrault","max-barel-charreard"]});
export const childModules = Object.freeze({"centre":"./centre/centre.js","charles-perrault":"./charles-perrault/charles-perrault.js","max-barel-charreard":"./max-barel-charreard/max-barel-charreard.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
