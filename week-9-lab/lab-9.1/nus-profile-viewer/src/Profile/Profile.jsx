import styles from "./Profile.module.css";

function Profile({ user }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={user.avatar}
          alt={`${user.name}'s avatar`}
        />
      </div>
      <div className={styles.descriptionContainer}>
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <p>{user.email}</p>
        <p>{user.phone_number}</p>
        <p>{user.date_of_birth}</p>
        <p>{user.employment.title}</p>
      </div>
    </div>
  );
}

export default Profile;
