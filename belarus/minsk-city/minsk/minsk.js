// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"minsk","repository":"europe","path":"belarus/minsk-city/minsk","depth":3,"parent":"belarus/minsk-city","children":["barysaw","dzyarzhynsk","fanipol","horad-zhodzina","kalodzishchy","logoysk","maladziecna","mar-ina-gorka"]});
export const childModules = Object.freeze({"barysaw":"./barysaw/barysaw.js","dzyarzhynsk":"./dzyarzhynsk/dzyarzhynsk.js","fanipol":"./fanipol/fanipol.js","horad-zhodzina":"./horad-zhodzina/horad-zhodzina.js","kalodzishchy":"./kalodzishchy/kalodzishchy.js","logoysk":"./logoysk/logoysk.js","maladziecna":"./maladziecna/maladziecna.js","mar-ina-gorka":"./mar-ina-gorka/mar-ina-gorka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
