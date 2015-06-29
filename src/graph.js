var Graph = function(){
  this._nodes = {};
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var storage = this._nodes;

  storage[fromNode].edges.push(toNode);
  storage[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var storage = this._nodes;

  storage[fromNode].edges = _.filter(storage[fromNode].edges, function(node) {
    return node !== toNode;
  });

  storage[toNode].edges = _.filter(storage[toNode].edges, function(node) {
    return node !== fromNode;
  });
};

Graph.prototype.addNode = function(node){
  var storage = this._nodes;

  storage[node] = storage[node] || { edges: [] };
};

Graph.prototype.removeNode = function(node){
  var storage = this._nodes,
        that  = this;

  storage[node].edges.forEach(function(el){
    that.removeEdge(node, el);
  });

  delete storage[node];
};

Graph.prototype.contains = function(node) {
  var storage = this._nodes;

  return !!storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  var storage = this._nodes;

  return _.contains(storage[fromNode].edges, toNode) && _.contains(storage[toNode].edges, fromNode);
};

Graph.prototype.forEachNode = function(cb){
  var storage = this._nodes;

  for (var node in storage) {
    cb(node);
  }
};