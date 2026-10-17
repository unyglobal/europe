// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northern-ireland","repository":"europe","path":"united-kingdom/northern-ireland","depth":2,"parent":"united-kingdom","children":["antrim","ballymena","banbridge","belfast","carrickfergus","castlereagh","coleraine","craigavon","derry","larne","lisburn","londonderry-county-borough","newry","newtownabbey","newtownards","omagh","portadown"]});
export const childModules = Object.freeze({"antrim":"./antrim/antrim.js","ballymena":"./ballymena/ballymena.js","banbridge":"./banbridge/banbridge.js","belfast":"./belfast/belfast.js","carrickfergus":"./carrickfergus/carrickfergus.js","castlereagh":"./castlereagh/castlereagh.js","coleraine":"./coleraine/coleraine.js","craigavon":"./craigavon/craigavon.js","derry":"./derry/derry.js","larne":"./larne/larne.js","lisburn":"./lisburn/lisburn.js","londonderry-county-borough":"./londonderry-county-borough/londonderry-county-borough.js","newry":"./newry/newry.js","newtownabbey":"./newtownabbey/newtownabbey.js","newtownards":"./newtownards/newtownards.js","omagh":"./omagh/omagh.js","portadown":"./portadown/portadown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
