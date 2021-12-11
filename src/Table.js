import React from 'react'

export default function Table (props){
    return (
        <table>
            <tbody>
                <tr>
                    <th> Country </th>
                    <th> Active Cases </th>
                    <th> Total Confirmed </th>
                    <th> Total Deaths </th> 
                </tr>
                {props.data.length ? props.data.map(item => {
                    return (
                        <tr>
                            <td> {item.Country} </td>
                            <td> {item.ActiveCases} </td>
                            <td> {item.TotalConfirmed} </td>
                            <td> {item.TotalDeaths}</td>
                        </tr>
                    )
                }) : <h2 className='msg'> No country with the given name is found... Try another </h2>}
            </tbody>
        </table>
    )
}