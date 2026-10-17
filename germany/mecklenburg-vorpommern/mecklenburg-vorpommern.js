// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mecklenburg-vorpommern","repository":"europe","path":"germany/mecklenburg-vorpommern","depth":2,"parent":"germany","children":["gustrow","kropeliner-tor-vorstadt","neubrandenburg","neustrelitz","parchim","ribnitz-damgarten","rostock","schwerin","stralsund","universitats-und-hansestadt-greifswald","waren","wismar"]});
export const childModules = Object.freeze({"gustrow":"./gustrow/gustrow.js","kropeliner-tor-vorstadt":"./kropeliner-tor-vorstadt/kropeliner-tor-vorstadt.js","neubrandenburg":"./neubrandenburg/neubrandenburg.js","neustrelitz":"./neustrelitz/neustrelitz.js","parchim":"./parchim/parchim.js","ribnitz-damgarten":"./ribnitz-damgarten/ribnitz-damgarten.js","rostock":"./rostock/rostock.js","schwerin":"./schwerin/schwerin.js","stralsund":"./stralsund/stralsund.js","universitats-und-hansestadt-greifswald":"./universitats-und-hansestadt-greifswald/universitats-und-hansestadt-greifswald.js","waren":"./waren/waren.js","wismar":"./wismar/wismar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
