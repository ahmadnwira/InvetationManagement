import React from 'react'

const Counter = (props) => {
    return (
        <table className="counter">
        <tbody>
          <tr>
            <td>Attending:</td>
            <td>{props.attending}</td>
          </tr>
          <tr>
            <td>Unconfirmed:</td>
            <td>{props.uncofirmed}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{props.total}</td>
          </tr>
        </tbody>
      </table>
    )
}

export default Counter;