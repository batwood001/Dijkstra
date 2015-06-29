var _ = require('./node_modules/underscore/underscore.js');

var Graph = function(){
  this._nodes = {};
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var storage = this._nodes;

  storage[fromNode].push(toNode);
  storage[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var storage = this._nodes;

  storage[fromNode] = _.filter(storage[fromNode], 
};

Graph.prototype.addNode = function(node){
  if (!this._nodes[value]) this._nodes[value] = [];
};

Graph.prototype.removeNode = function(node){

};