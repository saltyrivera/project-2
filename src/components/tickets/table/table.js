import React from "react";
import './table.scss';


const Table = ({price, text, style}) => {
    return (
        <div className="table-wrapper" style={style}>
            <div className="table-wrapper__left-cell"><p className="table-wrapper__left-cell__price">{price}</p></div>
            <div className="table-wrapper__right-cell"><p className="table-wrapper__left-cell__text">{text}</p></div>
        </div>
    )

}

export default Table;