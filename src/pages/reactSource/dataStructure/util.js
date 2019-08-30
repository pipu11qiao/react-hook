const d2 = { name: 'd2', render: () => [] };
const d1 = { name: 'd1', render: () => [d2] };
const c2 = { name: 'c2', render: () => [] };
const c1 = { name: 'c1', render: () => [d1] };
const b3 = { name: 'b3', render: () => [] };
const b1 = { name: 'b1', render: () => [c1] };
const b2 = { name: 'b2', render: () => [c2] };
const a1 = { name: 'a1', render: () => [b1, b2, b3] };

const FiberNode = function (instance) {
    this.instance = instance;
    this.parent = null;
    this.sibling = null;
    this.child = null;
};

const connect = function (p, childList) {
    const parent = p;
    parent.child = childList.reduceRight(function (prev, current) {
        const newFiberNode = new FiberNode(current);
        newFiberNode.parent = parent;
        newFiberNode.sibling = prev;
        return newFiberNode;
    }, null);
    return parent.child;
};
const walk = function (fiberNode) {
    const { instance: node } = fiberNode;
    console.log(node.name);
    const childList = node.render();
    if (childList.length > 0) {
        return connect(fiberNode, childList);
    }
    return null;
};

const goWalk = function (rootNode) {
    const rootFiber = new FiberNode(rootNode);
    let currentNode = rootFiber;

    while (true) {
        const fiberChild = walk(currentNode);
        if (fiberChild) {
            currentNode = fiberChild;
            continue;
        }

        // 如果没有相邻节点, 则返回到父节点
        while (!currentNode.sibling) {
            currentNode = currentNode.parent;
            if (currentNode === rootFiber) {
                return;
            }
        }

        // 相邻节点
        currentNode = currentNode.sibling;
    }
};
goWalk(a1);

export default {};
