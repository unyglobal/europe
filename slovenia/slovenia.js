// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"slovenia","repository":"europe","path":"slovenia","depth":1,"parent":"","children":["ljubljana","municipality-of-trbovlje","urban-municipality-of-celje","urban-municipality-of-koper","urban-municipality-of-kranj","urban-municipality-of-maribor","urban-municipality-of-novo-mesto","urban-municipality-of-ptuj","urban-municipality-of-velenje"]});
export const childModules = Object.freeze({"ljubljana":"./ljubljana/ljubljana.js","municipality-of-trbovlje":"./municipality-of-trbovlje/municipality-of-trbovlje.js","urban-municipality-of-celje":"./urban-municipality-of-celje/urban-municipality-of-celje.js","urban-municipality-of-koper":"./urban-municipality-of-koper/urban-municipality-of-koper.js","urban-municipality-of-kranj":"./urban-municipality-of-kranj/urban-municipality-of-kranj.js","urban-municipality-of-maribor":"./urban-municipality-of-maribor/urban-municipality-of-maribor.js","urban-municipality-of-novo-mesto":"./urban-municipality-of-novo-mesto/urban-municipality-of-novo-mesto.js","urban-municipality-of-ptuj":"./urban-municipality-of-ptuj/urban-municipality-of-ptuj.js","urban-municipality-of-velenje":"./urban-municipality-of-velenje/urban-municipality-of-velenje.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
