import React, { useEffect, useState } from 'react';
import Chart from '../Components/Chart/ReChart';
import { connect } from 'react-redux';
import { setChartData } from '../Store/Actions';
import { ReData } from '../Assets/data';
import Order from '../Components/order';
import StockList from '../Components/stockList';
import PlaceOrder from '../Components/placeOrder';

const Dashboard = (props) => {

    const [loading, setLoading] = useState(true);
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {

        if (loading === true) { props.setChartData(ReData) }
        setLoading(false)
        
    }, [loading, props])

    const chartData = props.chartData[currIndex]
    const ltp = chartData.data[chartData.data.length-1].ltp

    return (    

        <div className='container' id='dashboard'>
            <div className='row'>
                <div className='col-lg-12'>
                    {loading ? <div>Loading Data</div> : <Chart data={chartData.data}/>}
                </div>
                <div className='row mt-2 text-center text-light'>
                    <div className='col-lg-6'>
                        <Order name={chartData.stock} ltp={ltp}/>
                    </div>
                    <div className='col-lg-6'>
                        <StockList setCurrIndex={setCurrIndex} currIndex={currIndex} />
                    </div>
                </div>
            </div>
            <PlaceOrder name={chartData.stock} ltp={ltp}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        chartData: state.chartData
    }
}

const mapActionToProps = (dispatch) => {
    return {
        setChartData: (data) => { dispatch( setChartData(data) ) }
    }
}

export default connect(mapStateToProps, mapActionToProps)(Dashboard);