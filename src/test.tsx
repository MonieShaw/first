


function Test() {

    const tableContent = [
        {id:1, leftText:'Left Text 1', rightText:'Right Text 1'},
        {id:2, leftText:'Left Text 2', rightText:'Right Text 2'},
        {id:3, leftText:'Left Text 3', rightText:'Right Text 3'},
        {id:4, leftText:'Left Text 4', rightText:'Right Text 4'},
        {id:5, leftText:'Left Text 5', rightText:'Right Text 5'}
    ]

    return (
        <div className="sc-table">
            <div className="sc-content-wrapper">
                <div className="sc-table__content">
                    <div className="sc-table__table-wrapper sc-rte">
                        <table style={{width: '100%',border: '1px solid #ccc'}}>
                            <tbody>
                                {
                                    tableContent.map((item, index) => (
                                        <tr style={{border: '1px solid #ccc'}}>
                                            <td style={{width: '30%', border: '1px solid #ccc'}}>
                                                <p className="p1">
                                                    {item.leftText}
                                                </p>
                                            </td>
                                            <td style={{border: '1px solid #ccc'}}>
                                                <p className="p1">
                                                    {item.rightText}
                                                </p>  
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Test;
