// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-ossetia-alania","repository":"europe","path":"russia/north-ossetia-alania","depth":2,"parent":"russia","children":["alagir","ardon","beslan","mozdok","vladikavkaz"]});
export const childModules = Object.freeze({"alagir":"./alagir/alagir.js","ardon":"./ardon/ardon.js","beslan":"./beslan/beslan.js","mozdok":"./mozdok/mozdok.js","vladikavkaz":"./vladikavkaz/vladikavkaz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
