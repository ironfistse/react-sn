import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes.banner}>
        <img
          src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
          alt="Nature"
        />
      </div>
      <div>ava + descrption</div>
      <MyPosts />
    </div>
  );
}

export default Profile;