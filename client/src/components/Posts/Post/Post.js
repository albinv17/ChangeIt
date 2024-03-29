import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, TextField } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ForwardIcon from '@material-ui/icons/Forward';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import Comments from '../../comments';
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import SendIcon from '@material-ui/icons/Send';


const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleClick = () => {
    window.open("http://twitter.com/saigowthamr");}
  
    

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Support {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={handleClick} ><ForwardIcon fontSize="small" /> Forward</Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
      
      <div className="post__comments">
                    <Comments />
                </div>
      <CardActions>
                <form className="post__form">
                    <TextField
                        label="add comment"
                        size="small"
                        variant="outlined"
                        className="post__input"
                        placeholder="add comment"
                    />
                    <Button
                        variant="contained"
                        size="small"
                        endIcon={<SendIcon />}>
                        Send
                    </Button>
                </form>
    </CardActions>

    </Card>
  );
};

export default Post;

