import React, { useEffect, useRef } from 'react'
import { useSetState } from 'ahooks'
import './charts.scss'
import * as echarts from 'echarts';
// let china = require('./china.json');
import china from './china.json';
import hebei from './hebei.json';
let obj: any = {
    geoJSON: china
}
echarts.registerMap('china', obj)

const Echarts = () => {

    useEffect(() => {
        // renderChart();
    }, []);
    const renderChart = () => {
        var myChart = echarts.init(document.querySelector('map_china'));
        var option = {
            backgroundColor: '#fff',
            title: {
                top: 20,
                text: '用户注册区域展示',
                subtext: '',
                x: 'center',
                textStyle: {
                    color: '#000'
                }
            },
            geo: {
                type: 'map',
                map: 'hebei', //'jiangxi'
                roam: true,
                geoIndex: 1,
                zoom: 1.1,  //地图的比例
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#000000'  //字体颜色
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#000000'  //选中后的字体颜色
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#EEEEEE',
                        borderColor: '#8b8b8b',
                    },
                    emphasis: {
                        areaColor: '#ffffff',
                    }
                },
            },
        };
        myChart.setOption(option);
    };

    return (
        <div className='Charts' >
            <div id='map_china'></div>
        </div>
    )
}
export default Echarts