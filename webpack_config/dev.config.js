const proxy = [{
    context: ['/api'],
    target: 'https://ep-test.saikul.com',
    isDevelop: false
}]

module.exports = {//必须用 commjs 的 模块导出，不然webpack 报错，这个是同步导出，导入时会阻塞下方代码
    proxy,
    port: 6001,
    host: '0.0.0.0'
}