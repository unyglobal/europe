// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aragon","repository":"europe","path":"spain/aragon","depth":2,"parent":"spain","children":["alcaniz","almozara","barbastro","calatayud","ejea-de-los-caballeros","huesca","montecanal","monzon","oliver-valdefierro","teruel","utebo","zaragoza"]});
export const childModules = Object.freeze({"alcaniz":"./alcaniz/alcaniz.js","almozara":"./almozara/almozara.js","barbastro":"./barbastro/barbastro.js","calatayud":"./calatayud/calatayud.js","ejea-de-los-caballeros":"./ejea-de-los-caballeros/ejea-de-los-caballeros.js","huesca":"./huesca/huesca.js","montecanal":"./montecanal/montecanal.js","monzon":"./monzon/monzon.js","oliver-valdefierro":"./oliver-valdefierro/oliver-valdefierro.js","teruel":"./teruel/teruel.js","utebo":"./utebo/utebo.js","zaragoza":"./zaragoza/zaragoza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
