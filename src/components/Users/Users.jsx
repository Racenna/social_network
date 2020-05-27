import React from "react";
// import User from "./User/User";
import styles from "./Users.module.css";
import * as axios from "axios";
import userAvatar from "./../../assets/images/defaultAvatar.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    const pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    const renderPage = pages.map((page) => {
      const classes = `${styles.unselectable} ${
        this.props.currentPage === page && styles.selected_page
      }`;

      if (
        page === 1 ||
        page === this.props.totalUsersCount ||
        (page >= this.props.currentPage - 3 &&
          page <= this.props.currentPage + 3) ||
        page === pagesCount
      ) {
        return (
          <div
            key={page}
            className={classes}
            onClick={() => {
              this.onPageChanged(page);
            }}
          >
            {page}
          </div>
        );
      }
    });

    return (
      <div className={styles.app_wrapper_users}>
        <div className={styles.pagination}>
          <div
            className={styles.unselectable}
            onClick={() => {
              this.onPageChanged(this.props.currentPage - 1);
            }}
          >
            &larr;
          </div>
          {renderPage}
          <div
            className={styles.unselectable}
            onClick={() => {
              this.onPageChanged(this.props.currentPage + 1);
            }}
          >
            &rarr;
          </div>
          {/* {pages.map((page) => (
            <div
              key={page}
              className={`${
                this.props.currentPage === page && styles.selected_page
              }`}
              onClick={(e) => {
                this.onPageChanged(page);
              }}
            >
              {page}
            </div>
          ))} */}
        </div>
        {this.props.users.map((user) => (
          <div className={styles.item} key={user.id}>
            <div className={styles.centered}>
              <img
                src={user.photos.small != null ? user.photos.small : userAvatar}
                alt="user_avatar"
              />
              {user.followed ? (
                <button
                  className={styles.unfollow}
                  onClick={() => {
                    this.props.followUnfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={styles.follow}
                  onClick={() => {
                    this.props.followUnfollow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
            <div className={styles.info}>
              <div className={styles.name_phrase}>
                <span>{user.name}</span>
                <span className={styles.phrase}>{user.status}</span>
              </div>
              <div className={styles.country_city}>
                <span>Ukrainian</span>
                <span>Kharkiv</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

// const Users = (props) => {
//   const getUsers = () => {
//     if (props.usersData.users.length === 0) {
//       axios
//         .get("https://social-network.samuraijs.com/api/1.0/users")
//         .then((response) => {
//           return response.data.items;
//         })
//         .then((users) => {
//           props.setUsers(users);
//         });
//     }
//   };

//   const users = props.usersData.users.map((user) => (
//     <User key={user.id} user={user} followUnfollow={props.followUnfollow} />
//   ));

//   return (
//     <div className={styles.app_wrapper_users}>
//       <button onClick={getUsers}>Get users</button>
//       {users}
//     </div>
//   );
// };

export default Users;
