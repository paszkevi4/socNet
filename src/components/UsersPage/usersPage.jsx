import React from 'react';
import * as axios from 'axios';
import {NavLink} from 'react-router-dom'
import css from './usersPage.module.sass'
import UsersItem from './UserItem/userItem';
import avatar from './../../images/defaultAvatar.svg'
import {usersAPI} from './../../API/api.js'



let UsersPage = (props) => {

        let pagesAmount = Math.ceil (props.usersAmount / props.pageSize);

        let maxLeft = props.currentPage - 4;
        let maxRight = props.currentPage + 4;

        if (maxLeft <= 0) {
            maxLeft = 1;
            maxRight = 9;
        }
        if (maxRight >= pagesAmount) {
            maxLeft = pagesAmount - 8;
            maxRight = pagesAmount;
        }

        let setBeginnig = () => {
            props.onPageChanged(1)
        }
        let setLast = () => {
            props.onPageChanged(pagesAmount)
        }


        let pages = [];
        for ( let i = maxLeft; i <= maxRight; i++){
            pages.push(i);
        };
        return (
            <div className={css.container}>
                <div className={css.pagesAmount}>
                    {props.currentPage > 5 && <span className={css.pagginationButton} onClick={setBeginnig}>&#8592;</span>}
                    { pages.map ( p => {
                        return (
                            <span onClick={ () => {
                                props.onPageChanged(p)}
                            }
                                  className={ `${css.pagginationButton} ${ props.currentPage === p &&  css.active }`}>{'' + p}
                        </span>
                        )
                    })}
                    {props.currentPage < pagesAmount - 4 && <span className={css.pagginationButton} onClick={setLast}>&#8594;</span>}

                </div>
                { props.users.map(u => <div className={css.userCloud} key={u.id}>
                        <div className={css.avatar}>
                            <NavLink to={'/profile/' +u.id}>
                                <img src={ !u.photos.large ? avatar : u.photos.large} alt="avatarPhoto"/>
                            </NavLink>
                        </div>
                        {u.followed
                            ? <div className={css.btn}>
                                <button className={css.unfollow} onClick={ () => {
                                    props.unfollow(u.id)
                                }}>unfollow</button>
                            </div>
                            : <div className={css.btn}>
                                <button className={css.follow} onClick={ () => {
                                    props.follow(u.id)
                                }}>follow</button>
                            </div>
                        }
                        <NavLink to={'/dialogs/id' +u.id}>
                            <div className={css.btn}>
                                <button className={css.follow} >Message</button>
                            </div>
                        </NavLink>
                        <div className={css.nameStatus}>
                            <div>{u.name}</div>
                            <div>{u.status || 'No status'}</div>
                        </div>
                    </div>)
                }
                <div className={css.pagesAmount}>
                    {props.currentPage > 5 && <span className={css.pagginationButton} onClick={setBeginnig}>&#8592;</span>}
                    { pages.map ( p => {
                        return (
                            <span onClick={ () => {
                                props.onPageChanged(p)}
                            }
                                  className={ `${css.pagginationButton} ${ props.currentPage === p &&  css.active }`}>{'' + p}
                        </span>
                        )
                    })}
                    {props.currentPage < pagesAmount - 4 && <span className={css.pagginationButton} onClick={setLast}>&#8594;</span>}

                </div>
            </div>
        )
}

export default UsersPage;