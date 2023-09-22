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
                        <Grid item  className="column-grid-item" key={index}>
                            {column}
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default ColumnGrid