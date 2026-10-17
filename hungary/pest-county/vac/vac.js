// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vac","repository":"europe","path":"hungary/pest-county/vac","depth":3,"parent":"hungary/pest-county","children":["fenyvesdulo","kohid","kozepmaj","kutvolgy","mihalytanya","patakfold","zsellerdulo"]});
export const childModules = Object.freeze({"fenyvesdulo":"./fenyvesdulo/fenyvesdulo.js","kohid":"./kohid/kohid.js","kozepmaj":"./kozepmaj/kozepmaj.js","kutvolgy":"./kutvolgy/kutvolgy.js","mihalytanya":"./mihalytanya/mihalytanya.js","patakfold":"./patakfold/patakfold.js","zsellerdulo":"./zsellerdulo/zsellerdulo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
