import React from 'react';
import styles from './Users.module.css';
import userIcon from '../../assets/img/user-icon.svg';
import ActionButton from '../common/buttons/ActionButton';

// Pure functional components that only takes props and returns JSX
const Users = (props) => {
  const pagesCount = Math.ceil(props.totalPages / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.usersContainer}>
      <p>Pages:</p>
      <div className={styles.pagesContainer}>
        {pages.map((page) => {
          return (
            <span
              key={page}
              className={
                props.currentPage === page ? styles.selectedPage : 'false'
              }
              // We pass an anonymous function there because we need a pageNumber parameter, but default onClick function takes and event parameter, which we don't need
              onClick={() => {
                props.onPageChange(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => {
        return (
          <div key={user.id} className={styles.userInfoContainer}>
            <div className={styles.userInfoLeftBar}>
              <p>{user.name}</p>
              <img
                className={styles.userPhoto}
                src={user.photos.small !== null ? user.photos.small : userIcon}
                alt=''
              />
              <div className={styles.actionButton}>
                {user.followed ? (
                  <ActionButton
                    className={styles.unfollowButton}
                    name='Unfollow'
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  />
                ) : (
                  <ActionButton
                    className={styles.followButton}
                    name='Follow'
                    onClick={() => {
                      props.follow(user.id);
                    }}
                  />
                )}
              </div>
            </div>
            <div className={styles.userStatusBar}>{user.status}</div>
            <div className={styles.userLocationBar}>
              <p>{user.location.city}</p>
              <p>{user.location.country}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
