import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import PostCard from "../../generic-components/post-card";
import { Box } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PostDialoge({ postDetails }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const { image, post_title, content } = postDetails;

  return (
    <Box>
      <PostCard cardDetails={postDetails} handleClick={handleClickOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClickOpen}
        aria-describedby="alert-dialog-slide-description"
        className="post-dialoge"
      >
        <Box
          component="img"
          src={image}
          alt={post_title}
          className="post-image"
        />
        <DialogTitle className="post-heading">{post_title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            className="post-content"
            id="alert-dialog-slide-description"
          >
            {content}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
