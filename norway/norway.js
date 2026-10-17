// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"norway","repository":"europe","path":"norway","depth":1,"parent":"","children":["agder","akershus","buskerud","finnmark","innlandet","more-og-romsdal","nordland","oslo","ostfold","rogaland","telemark","troms","trondelag","vestfold","vestland"]});
export const childModules = Object.freeze({"agder":"./agder/agder.js","akershus":"./akershus/akershus.js","buskerud":"./buskerud/buskerud.js","finnmark":"./finnmark/finnmark.js","innlandet":"./innlandet/innlandet.js","more-og-romsdal":"./more-og-romsdal/more-og-romsdal.js","nordland":"./nordland/nordland.js","oslo":"./oslo/oslo.js","ostfold":"./ostfold/ostfold.js","rogaland":"./rogaland/rogaland.js","telemark":"./telemark/telemark.js","troms":"./troms/troms.js","trondelag":"./trondelag/trondelag.js","vestfold":"./vestfold/vestfold.js","vestland":"./vestland/vestland.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
