import './ucsbCard.css'

import { Card } from '@mui/material'

function UcsbCard(){
    return(
        <Card
  variant="outlined"
  style={{ background: "rgb(21, 21, 21)" }}
  sx={{
    height: 200,
    width: 350,
    margin: "16px",
    borderColor: "#d7d5c4",
  }}
>
  <img src="https://assets.change.org/photos/9/xw/vd/TKxwVdwHAkMcxZd-800x450-noPad.jpg?1520548913" 
       alt="" 
       style={{
         objectFit: "cover", 
         width: "100%", 
         height: "100%"
       }}
  />
</Card>
    )
}

export default UcsbCard