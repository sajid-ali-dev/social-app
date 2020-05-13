import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import customTheme from '../../pages/util/customTheme';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
// MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';   

const styles  = customTheme;

class Comments extends Component{
    render() {
        const { comments, classes } = this.props;
        console.log(comments);
        return (
            <Grid container>
                 {comments.map((comment, index) => {
                     console.log(comment);
                   const { body, createdAt, userImage, userHandle } = comment;
                   return(
                       <Fragment key={createdAt}>
                           <Grid item sm={12}>
                               <Grid container>
                                  <Grid item sm={2}>
                                      <img src={userImage} alt="comment" className={classes.commentImage}/>
                                  </Grid>
                                  <Grid item sm={9}>
                                      <div className={classes.commentData}>
                                          <Typography variant="h5" component={Link} to={`/users/${userHandle}`} color="primary">
                                              {userHandle}
                                          </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                          { dayjs(createdAt).format('h:mm a, MMMM DD YYYY') }
                                        </Typography>  
                                        <hr className={classes.invisibleSeperator}/>
                                        <Typography variant="body1">{body}</Typography>
                                      </div>
                                  </Grid> 
                               </Grid>
                           </Grid> 
                           {index !== comments.length -1 && (
                            <hr className={classes.visibleSeperator} />
                           )}
                       </Fragment>
                   ) 
                 })}
            </Grid>
        )
    }
}

Comments.propTypes = {
    comments: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Comments);