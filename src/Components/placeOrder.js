const placeOrder = (props) => {
    return (
        <div>
            
            <div className="modal fade" id="buyOrder" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{props.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row text-center'>
                                <div className='col-4'> LTP </div><div className='col-1'>:</div><div className='col-7'>{props.ltp} </div>
                                <label className='col-4'> QTY </label><div className='col-1'>:</div><input className='col-7 mt-0' type='number' min='1' placeholder='0'></input>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success">Buy</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="sellOrder" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{props.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row text-center'>
                                <div className='col-4'> LTP </div><div className='col-1'>:</div><div className='col-7'>{props.ltp} </div>
                                <label className='col-4'> QTY </label><div className='col-1'>:</div><input className='col-7 mt-0' type='number' min='1' placeholder='0'></input>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger">Sell</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default placeOrder;
