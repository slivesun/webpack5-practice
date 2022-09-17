import axios from 'axios';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config, 'config')
    // let token = window.localStorage.getItem('NEW_EP_TOKEN')
    // if (token) {
    //     config.headers['Sinzetech-Auth'] = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIyNTMzODg2MzM4NTMiLCJ0ZW5hbnRfbmFtZSI6IkVQ5rWL6K-V5YWs5Y-4IiwidXNlcl9uYW1lIjoiMTMzMzMzMzMzMzMiLCJyZWFsX25hbWUiOiIxMzMzMzMzMzMzMyIsImF1dGhvcml0aWVzIjpbIueuoeeQhuWRmOinkuiJsiJdLCJjbGllbnRfaWQiOiJzaW56ZXRlY2gtZXJwIiwicm9sZV9uYW1lIjoi566h55CG5ZGY6KeS6ImyIiwibGljZW5zZSI6InBvd2VyZWQgYnkgc2luemV0ZWNoIiwidXNlcl9pZCI6IjE0MDg0MjcxMjQ1Njk4MDQ4MDAiLCJyb2xlX2lkIjoiMTU2NDk0MDg1NTAwMzEzMTkwNSwxNTY0OTQwODU1MDAzMTMxOTA1LDE1NjQ5NDA4NTUwMDMxMzE5MDUsMTU2NDk0MDg1NTAwMzEzMTkwNSIsInNjb3BlIjpbImFsbCJdLCJuaWNrX25hbWUiOiIxMzMzMzMzMzMzMyIsIm9hdXRoX2lkIjoiIiwiZXhwIjoxNjYzMjYyNjM2LCJqdGkiOiIxODUzOWM1MC05MDFmLTQxMzItOWQ0ZC1iNTljODdiODMwMzMiLCJhY2NvdW50IjoiMTMzMzMzMzMzMzMifQ.8pdW61YozW1MMmUfxn9lwYWIPBz7x8rb9IFsktDeEak`;
    // }
    config.headers['Sinzetech-Auth'] = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIyNTMzODg2MzM4NTMiLCJ0ZW5hbnRfbmFtZSI6IkVQ5rWL6K-V5YWs5Y-4IiwidXNlcl9uYW1lIjoiMTMzMzMzMzMzMzMiLCJyZWFsX25hbWUiOiIxMzMzMzMzMzMzMyIsImF1dGhvcml0aWVzIjpbIueuoeeQhuWRmOinkuiJsiJdLCJjbGllbnRfaWQiOiJzaW56ZXRlY2gtZXJwIiwicm9sZV9uYW1lIjoi566h55CG5ZGY6KeS6ImyIiwibGljZW5zZSI6InBvd2VyZWQgYnkgc2luemV0ZWNoIiwidXNlcl9pZCI6IjE0MDg0MjcxMjQ1Njk4MDQ4MDAiLCJyb2xlX2lkIjoiMTU2NDk0MDg1NTAwMzEzMTkwNSwxNTY0OTQwODU1MDAzMTMxOTA1LDE1NjQ5NDA4NTUwMDMxMzE5MDUsMTU2NDk0MDg1NTAwMzEzMTkwNSIsInNjb3BlIjpbImFsbCJdLCJuaWNrX25hbWUiOiIxMzMzMzMzMzMzMyIsIm9hdXRoX2lkIjoiIiwiZXhwIjoxNjYzMjYyNjM2LCJqdGkiOiIxODUzOWM1MC05MDFmLTQxMzItOWQ0ZC1iNTljODdiODMwMzMiLCJhY2NvdW50IjoiMTMzMzMzMzMzMzMifQ.8pdW61YozW1MMmUfxn9lwYWIPBz7x8rb9IFsktDeEak`;
    config.headers['Tenant-Id'] = 253388633853;

    // 这里可以设置请求头,一般设置 token 等后端需要的每个接口的公共字段


    return config;
}, function (error) {
    // 对请求错误做些什么
    console.log(error, '对请求错误做些什么')
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
    // 对响应数据做点什么
    console.log(response, '对响应数据做点什么')

    return response.data;
}, (error) => {
    // 对响应错误做点什么
    console.log(error.response.data.code, '对响应错误做点什么')
    if(error.response.data.code==401){//退出登陆
        // location.href = '/login'
    }
    return Promise.reject(error);
});