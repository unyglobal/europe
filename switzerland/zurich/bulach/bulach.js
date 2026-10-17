// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bulach","repository":"europe","path":"switzerland/zurich/bulach","depth":3,"parent":"switzerland/zurich","children":["bulach-altstadt","bulach-chropfli","bulach-grossstein","bulach-gstuckt","bulach-herti","bulach-irchel","bulach-neuguet","bulach-niederflachs","bulach-seematt","bulach-soliganter"]});
export const childModules = Object.freeze({"bulach-altstadt":"./bulach-altstadt/bulach-altstadt.js","bulach-chropfli":"./bulach-chropfli/bulach-chropfli.js","bulach-grossstein":"./bulach-grossstein/bulach-grossstein.js","bulach-gstuckt":"./bulach-gstuckt/bulach-gstuckt.js","bulach-herti":"./bulach-herti/bulach-herti.js","bulach-irchel":"./bulach-irchel/bulach-irchel.js","bulach-neuguet":"./bulach-neuguet/bulach-neuguet.js","bulach-niederflachs":"./bulach-niederflachs/bulach-niederflachs.js","bulach-seematt":"./bulach-seematt/bulach-seematt.js","bulach-soliganter":"./bulach-soliganter/bulach-soliganter.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
