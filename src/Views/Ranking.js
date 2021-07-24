import React from 'react';
import { connect } from 'react-redux';
import './Ranking.css';
import { Fade, Slide, Zoom } from '../../node_modules/react-reveal'

const Funds = (props) => {

    let no = 0;

    let ranks = props.ranking.map(e => {
        no = no + 1
        return (
            <tr className='row m-0 ranking-tem' key={no}>
                <td className='col-1 my-2'> {no} </td>
                <td className='col-6 my-2'> {e.name} </td>
                <td className='col-2 my-2'> {e.netWorth} </td>
                <td className='col-3 my-2'> {((e.netWorth / 10000) * 100).toFixed(0)} </td>
            </tr>
        )
    })

    return (
        <div className='ranking text-light text-center container'>
            <Zoom>
                
                <table className='row ranking-table table-dark table-striped table-hover'>
                    <thead className='heading-row'>
                        <th className='row m-0'>
                            <th className='col-1 my-2'> # </th>
                            <th className='col-6 my-2'> Name </th>
                            <th className='col-2 my-2'> Net Worth </th>
                            <th className='col-3 my-2'> Growth </th>
                        </th>
                    </thead>
                    <Zoom cascade bottom>
                        <tbody>
                            {ranks}
                        </tbody>
                    </Zoom>
                </table>
            </Zoom>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ranking: state.data.leaderBoard
    }
}

export default connect(mapStateToProps)(Funds);