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

const connectFiber = function (parent, childList) {
    const parentFiber = parent;
    parentFiber.child = childList.reduceRight(function (prev, cur) {
        const fiberNode = new FiberNode(cur);
        fiberNode.parent = parentFiber;
        fiberNode.sibling = prev;
        return fiberNode;
    }, null);
    return parentFiber.child;
};

const walk = function (fiberNode) {
    const { instance } = fiberNode;
    console.log(instance.name);
    const childList = instance.render();
    if (childList.length > 0) {
        return connectFiber(fiberNode, childList);
    }
    return null;
};
const goWalk = function (node) {
    const rootFiber = new FiberNode(node);
    let currentNode = rootFiber;

    while (true) {
        const child = walk(currentNode);
        if (child) {
            currentNode = child;
        } else {
            while (!currentNode.sibling) {
                currentNode = currentNode.parent;
                if (currentNode === rootFiber) {
                    return;
                }
            }
            currentNode = currentNode.sibling;
        }
    }
};
goWalk(a1);


export default {};
