const proxy = [
    { context: ['/api', '/sk-ep'], tatget: 'https://ep-test.saikul.com' }
]

module.exports = {
    proxy,
    port: 6001,
    host: '0.0.0.0'
}