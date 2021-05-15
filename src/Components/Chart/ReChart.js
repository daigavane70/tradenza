import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import React from 'react';
import { useState, useEffect } from 'react';
import {setLTP} from '../../Store/dataReducer/dataActions';
import {connect} from 'react-redux';

function ReChart(props) {

    let len;
    const [currentData, setCurrentData] = useState([props.data[0]])

    const updateData = () => {
        len = currentData.length
        setCurrentData([...currentData, props.data[len]])
    }

    useEffect(() => {
        
        // const interval = setInterval(() => {
        //     // if( (Date().split(' ')[4].split(':')[1]%2 === 0) && Date().split(' ')[4].split(':')[2]%60 === 0) //for 2 min time frame
        //     //     console.log("Priniting Now")
            // updateData()
        //     // console.log("Current: ", (Date().split(' ')[4].split(':')))
        // }, 1000);

        // return () => clearInterval(interval);

    });

    return (
        <div>
            <div id='tradingViewChart'/>
            <ResponsiveContainer height={500} width="100%">
                <AreaChart className='bg-dark' data={props.data}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    {/* <CartesianGrid strokeDasharray="0.2 10" /> */}
                    <Tooltip backgroundColor='82ca9d' />
                    <Area type="monotone" dataKey="ltp" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="ltp" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )

}

const mapActionToProps = dispatch => {
    return{
        changeLTP: (ltp) => { dispatch(setLTP(ltp)) }
    }
}

export default connect(null, mapActionToProps)(ReChart);