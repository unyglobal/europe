// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"portugal","repository":"europe","path":"portugal","depth":1,"parent":"","children":["aveiro","azores","beja","braga","braganca","castelo-branco","coimbra","evora","faro","guarda","laranjeiro","laranjeiro-a","leiria","lisbon","madeira","portalegre","porto","santarem","setubal","viana-do-castelo","vila-real","viseu"]});
export const childModules = Object.freeze({"aveiro":"./aveiro/aveiro.js","azores":"./azores/azores.js","beja":"./beja/beja.js","braga":"./braga/braga.js","braganca":"./braganca/braganca.js","castelo-branco":"./castelo-branco/castelo-branco.js","coimbra":"./coimbra/coimbra.js","evora":"./evora/evora.js","faro":"./faro/faro.js","guarda":"./guarda/guarda.js","laranjeiro":"./laranjeiro/laranjeiro.js","laranjeiro-a":"./laranjeiro-a/laranjeiro-a.js","leiria":"./leiria/leiria.js","lisbon":"./lisbon/lisbon.js","madeira":"./madeira/madeira.js","portalegre":"./portalegre/portalegre.js","porto":"./porto/porto.js","santarem":"./santarem/santarem.js","setubal":"./setubal/setubal.js","viana-do-castelo":"./viana-do-castelo/viana-do-castelo.js","vila-real":"./vila-real/vila-real.js","viseu":"./viseu/viseu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
