import React from 'react'

import { Grid, Paper, Typography } from '@material-ui/core'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
    <Paper style={{ display: 'flex', alignItem: 'center', cursor: 'pointer' }} onClick={() => onVideoSelect(video)}>
    <img style={{ marginRight: '5px'}} alt='thumbnail' src={video.snippet.thumbnails.medium.url}/>
    </Paper>
    <Paper style={{padding: '15px'}}>
    <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
        <Typography variant='subtitle1'>{video.snippet.channelTitle} </Typography>
    </Paper>
    </Grid>
  )
}

export default VideoItem
