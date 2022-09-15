
import { Badge, Card } from 'antd';
import React, { useEffect } from 'react';
import Axios from 'axios';
const Home = () => {
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        Axios.get('/api/sinzetech-storage/inStockEntries/web?current=1&size=10').then((res) => {
            if (res.data.code == 0) {

            } else {

            }
        })
    }
    return (
        <div className='home' style={{ padding: '10px' }}>
            home
            <>
                <Badge.Ribbon text="Hippies">
                    <Card title="Pushes open the window" size="small">
                        and raises the spyglass.
                    </Card>
                </Badge.Ribbon>
                <Badge.Ribbon text="Hippies" color="pink">
                    <Card title="Pushes open the window" size="small">
                        and raises the spyglass.
                    </Card>
                </Badge.Ribbon>
                <Badge.Ribbon text="Hippies" color="red">
                    <Card title="Pushes open the window" size="small">
                        and raises the spyglass.
                    </Card>
                </Badge.Ribbon>
                <Badge.Ribbon text="Hippies" color="cyan">
                    <Card title="Pushes open the window" size="small">
                        and raises the spyglass.
                    </Card>
                </Badge.Ribbon>
                <Badge.Ribbon text="Hippies" color="green">
                    <Card title="Pushes open the window" size="small">
                        and raises the spyglass.
                    </Card>
                </Badge.Ribbon>
                <Badge.Ribbon text="Hippies" color="purple">
                    <Card title="Pushes open the window" size="small">
                        and raises the spyglass.
                    </Card>
                </Badge.Ribbon>
                <Badge.Ribbon text="Hippies" color="volcano">
                    <Card title="Pushes open the window" size="small">
                        and raises the spyglass.
                    </Card>
                </Badge.Ribbon>
                <Badge.Ribbon text="Hippies" color="magenta">
                    <Card title="Pushes open the window" size="small">
                        and raises the spyglass.
                    </Card>
                </Badge.Ribbon>
            </>
        </div>
    )
}
export default Home