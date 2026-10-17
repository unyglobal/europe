// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mateszalka","repository":"europe","path":"hungary/szabolcs-szatmar-bereg/mateszalka","depth":3,"parent":"hungary/szabolcs-szatmar-bereg","children":["graftag","lorincitanya","monustanya","nagyecsedi-tanya","nagyszolo","racztanya"]});
export const childModules = Object.freeze({"graftag":"./graftag/graftag.js","lorincitanya":"./lorincitanya/lorincitanya.js","monustanya":"./monustanya/monustanya.js","nagyecsedi-tanya":"./nagyecsedi-tanya/nagyecsedi-tanya.js","nagyszolo":"./nagyszolo/nagyszolo.js","racztanya":"./racztanya/racztanya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
