// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"slovakia","repository":"europe","path":"slovakia","depth":1,"parent":"","children":["banska-bystrica-region","bratislava-region","komarno","komarno-a","kosice-region","nitra-region","presov-region","trencin-region","trnava-region","zilina-region"]});
export const childModules = Object.freeze({"banska-bystrica-region":"./banska-bystrica-region/banska-bystrica-region.js","bratislava-region":"./bratislava-region/bratislava-region.js","komarno":"./komarno/komarno.js","komarno-a":"./komarno-a/komarno-a.js","kosice-region":"./kosice-region/kosice-region.js","nitra-region":"./nitra-region/nitra-region.js","presov-region":"./presov-region/presov-region.js","trencin-region":"./trencin-region/trencin-region.js","trnava-region":"./trnava-region/trnava-region.js","zilina-region":"./zilina-region/zilina-region.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
