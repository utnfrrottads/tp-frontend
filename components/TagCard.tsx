import React from 'react'
import {
  Card,
  CardActionArea,
  Box,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material'

interface Props {
  tag: any
}
const TagCard = ({ tag }: Props) => {
  return (
    <Card>
      <CardActionArea>
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <CardMedia
            component="img"
            sx={{ width: 200, height: 100 }}
            image="https://www.minervafoods.com/wp-content/uploads/2018/08/como_fazer_hamburguer_caseiro_1.jpg"
            alt="Live from space album cover"
          />
          <CardContent sx={{ display: 'flex' }}>
            <Typography variant="h5" alignSelf="center">
              {tag.description}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  )
}
export default TagCard
