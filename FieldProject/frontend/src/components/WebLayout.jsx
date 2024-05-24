import React, { useState } from 'react';
import '../App.css';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            <nav className={isSidebarOpen ? "sidebar" : "sidebar close"}>
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZxJREFUSEu11L1vjWEYx/HPSecmmgpCajHUaOofIF5K01EbU/8CidCkpoYNIQzduyojUukLo9UmBgtB21RIGQnPldxtTh7nPveTU+da7/v6fa/3lj5bq8/6mgImq0Bu4kQK6D3m8bwUYBPAHG5nhGZxvxukBDiPF9hAgFaS2DncwRGcwXoOUgKsJoFpPK6JTGEJy7jYK+AbDlRlGMTPmsgwtvEZx3oFbOIQDuJrBhB/olQdrVSiqPlZRDmeZEoUPbrQK6C9yTEx0ZOBBL2Lw/ttcgR2DSEWwu32u+pLQB/uZ0x3fUdxHTGev/Ayzf+7/7FoJY2u792aHOMZUY/hVJqmdrEtvMHrlM2PTqQcIKZiMTWxSQaxCzNYq3/uBJjAs/TxKW4hjtv3mnNkGMcv3sMnLAKLsd2zOmAIb1PkcWtuNAkf91I5v+BkNXk7u351wFU8wCucbige30InljIO35Vq8xdygDhol0rLkwGPp8P3CJdzgA8YQZSqXvNSQkfxCR9xPAf4kx5KNyoH+8e/V6FSNtkpauzY9GPfM/gL5dBHGcZ57nQAAAAASUVORK5CYII="/>
                        </span>

                        <div className="text logo-text">
                            <span className="name">MentorConnect</span>
                        </div>
                    </div>

                    <i className={isSidebarOpen ? 'bx bx-chevron-right toggle' : 'bx bx-chevron-left toggle'} onClick={toggleSidebar}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">
                        <li className="search-box" onClick={() => setIsSidebarOpen(false)}>
                            <i className='bx bx-search icon'></i>
                            <input type="text" placeholder="Search..."/>
                        </li>

                        <ul className="menu-links">
                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-bar-chart-alt-2 icon' ></i>
                                    <span className="text nav-text">Attendance</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-heart icon' ></i>
                                    <span className="text nav-text">Approvals</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#">
                                    <i className='bx bx-pie-chart-alt icon' ></i>
                                    <span className="text nav-text">Schedule Meeting</span>
                                </a>
                            </li>
                        </ul>

                        <div className="bottom-content">
                            <li className="">
                                <a href="#">
                                    <i className='bx bx-log-out icon' ></i>
                                    <span className="text nav-text">Logout</span>
                                </a>
                            </li>

                            <li className="mode" onClick={toggleDarkMode}>
                                <div className="sun-moon">
                                    <i className={isDarkMode ? 'bx bx-sun icon sun' : 'bx bx-moon icon moon'}></i>
                                </div>
                                <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>

                                <div className="toggle-switch">
                                    <span className="switch"></span>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>

            <section className="home">
                <div className="text">Welcome 23CSE027 - Vatte Vijaya Bhaskara Reddy</div>
            </section>
        </div>
    );
};

export default Layout;
