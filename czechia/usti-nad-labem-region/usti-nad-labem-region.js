// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"usti-nad-labem-region","repository":"europe","path":"czechia/usti-nad-labem-region","depth":2,"parent":"czechia","children":["chomutov","decin","jirkov","kadan","litomerice","litvinov","louny","most","teplice","usti-nad-labem","zatec"]});
export const childModules = Object.freeze({"chomutov":"./chomutov/chomutov.js","decin":"./decin/decin.js","jirkov":"./jirkov/jirkov.js","kadan":"./kadan/kadan.js","litomerice":"./litomerice/litomerice.js","litvinov":"./litvinov/litvinov.js","louny":"./louny/louny.js","most":"./most/most.js","teplice":"./teplice/teplice.js","usti-nad-labem":"./usti-nad-labem/usti-nad-labem.js","zatec":"./zatec/zatec.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
