export const splitCamel = (camelStr) => {
    const reg = /[A-Z]?[a-z]+/g;
    const res = (`${camelStr}`).match(reg);
    if (res) {
        return res.map(item => item.toLowerCase());
    }
    return [camelStr];
};
export const getChildRoutePath = (props, childPath) => {
    const {
        match
    } = props;
        // console.log(match);
    const parentPath = match.path;
    return `${parentPath}/${childPath}`;
};

const Util = {
    splitCamel,
    getChildRoutePath
};
export default Util;
