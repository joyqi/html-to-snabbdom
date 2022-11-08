import { toVNode, VNode, Fragment } from 'snabbdom';

/**
 * Create a VNode from a html string
 */
 export function h2v(html: string): VNode {
    const el = document.createElement('div');
    el.innerHTML = html.trim();
    const vnode = toVNode(el);

    if (vnode.children && vnode.children.length === 1) {
        const firstChild = vnode.children[0];

        if (typeof firstChild === 'string') {
            throw new Error('The html string must have a root element');
        }

        return firstChild;
    } else {
        return Fragment(null, vnode.children);
    }
}