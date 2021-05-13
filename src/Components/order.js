// import { connect } from 'react-redux';

const Order = (props) => {
    return (
        <div>
            
            <h1> {props.name} </h1>
            
            <div className='row'>
                <h2 className='col-4' data-bs-toggle="tooltip" data-bs-placement="top" title="Last Traded Price"> LTP </h2>
                <h2 className='col-4'> : </h2>
                <h2 className='col-4'> {props.ltp} </h2>
            </div>
            <div className='row'>
                <div className='col-1'></div>
                <div className='btn btn-success col-4' data-bs-toggle="modal" data-bs-target="#buyOrder"> BUY </div>
                <div className='col-2'></div>
                <div className='btn btn-danger col-4' data-bs-toggle="modal" data-bs-target="#sellOrder"> SELL </div>
                <div className='col-1'></div>
            </div>

            </div>
    )
}

export default Order;