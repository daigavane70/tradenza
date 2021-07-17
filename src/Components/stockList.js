const stockList = (props) => {

    const changeChart = (e) => {
        props.setCurrIndex( e.target.id )
    }

    return (

        <div className='row'>
            <div className='col-8'> Reliance </div><div className='col-4 btn btn-success' id='0' onClick={changeChart}> View Chart </div>
            <div className='col-8'> Wipro </div><div className='col-4 btn btn-success' id='1' onClick={changeChart}> View Chart </div>
            <div className='col-8'> HDFC </div><div className='col-4 btn btn-success' id='2' onClick={changeChart}> View Chart </div>
            <div className='col-8'> Bajaj Finance </div><div className='col-4 btn btn-success' id='3' onClick={changeChart}> View Chart </div>
            <div className='col-8'> HCL Tech </div><div className='col-4 btn btn-success' id='4' onClick={changeChart}> View Chart </div>
        </div>
    
    )
}

export default stockList;