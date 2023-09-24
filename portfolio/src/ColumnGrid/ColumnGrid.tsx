import './ColumnGrid.css'

import { 
    Grid
 } from '@mui/material'

function ColumnGrid({ columns = [] }: { columns: JSX.Element[][] }) {

    return(
        <Grid container justifyContent="center">
            {
                columns.map((column, index) => {
                    return(
                        <div  className="column-grid-item" key={index}>
                            {column.map((item, index) => {
                                return(
                                    <div key={index} className="column-grid-item">
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })
            }
        </Grid>
    )
}

export default ColumnGrid