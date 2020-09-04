/*
 * @Description:
 * @Version: 2.0
 * @Autor: joe
 * @Date: 2020-07-28 16:13:43
 * @LastEditors: gfge
 * @LastEditTime: 2020-07-28 16:24:37
 */

const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);
