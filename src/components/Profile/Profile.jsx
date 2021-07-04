import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={classes.profileWrapper}>
      <ProfileInfo />
      <MyPosts
        posts={ props.state.posts }
        newPostText={ props.state.newPostText }
        addPost={props.addPost}
        updatePostInput={props.updatePostInput}
      />
    </div>
  );
}

export default Profile;