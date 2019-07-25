// const str1 = 'http://local.zx-math.test.17zuoye.net:10032/templates/index.html#/v/exam/exam_task?a=3';
// const str2 = 'http://zx-math.test.17zuoye.net/v/exam/exam_task';
// const reg = /\.\w+#?(\/[^?#]+)/;
//
// const res1 = reg.exec(str1);
// console.log(res1);
// const res2 = reg.exec(str2);
// console.log(res2);
const moduleReg = /[\/]v[\/](exam|exercise|cop_card)/;
const arr = [
    '/v/exam',
    '/v/exam/xx',
    '/v/exm/xx',
    '/v/exercise',
    '/v/exercise/xx',
    '/v/cop_card',
    '/v/cop_card/xx',
];

arr.forEach(item => {
    console.log(item);
    console.log(moduleReg.test(item));
});
