import React from 'react';

const ArticleCard = ({ largerDevice, menuicon, usericon, shareicon, recimage, name, category, description, categoryIcon, alt }) => {
    return (
        <div className="card" style={{ width: '100%', boxShadow: largerDevice ? '' : '0px 1px 2px rgba(0, 0, 0, 0.12)', border: largerDevice ? '' : 'none' }}>
            <img src={recimage} className="card-img-top" alt={alt} />
            <div className="card-body">
                <h6 style={{ fontWeight: '540' }} className="card-title">
                    <span dangerouslySetInnerHTML={{ __html: categoryIcon }}></span> {category}
                </h6>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{ fontWeight: '700', width: '90%' }} className="card-text">
                        {description}
                    </p>
                    <div className="btn-group">
                        <button style={{ height: '25px', width: '25px', display: "flex", flexDirection: "row-reverse" }} type="button" className="btn" data-bs-toggle="dropdown" aria-expanded="false">
                            <img style={{ marginTop: '-16px', marginLeft: '-8px' }} alt="..." src={menuicon} />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <button className="dropdown-item" type="button">
                                    Edit
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    Report
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    Option 3
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <h6 style={{ marginBottom: '30px', color: '#5C5C5C', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    I’ve worked in UX for the better part of a decade. From now on, I plan to reidf bsgakksa shly akssdjj shadkj
                </h6>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {largerDevice ? (
                        <>
                            <div style={{ display: 'flex' }}>
                                <img style={{ width: '40px', height: '40px' }} src={usericon} alt="user" />
                                &nbsp;&nbsp;
                                <h6 style={{ fontSize: '15px', fontWeight: '700', marginTop: '10px' }}>
                                    {name}
                                </h6>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <img alt="views" style={{ width: '18px', height: '18px', marginTop: '10px' }} src="https://img.icons8.com/material-outlined/24/525252/visible--v1.png" />
                                &nbsp;
                                <p style={{ fontSize: '15px', color: '#525252', marginTop: '7.5px', marginBottom: '0px' }}>
                                    1.4k views
                                </p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn" style={{ backgroundColor: '#EDEEF0' }} type="button">
                                    <img alt="share" src={shareicon} />
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div style={{ display: 'flex' }}>
                                <img style={{ width: '40px', height: '40px' }} src={usericon} alt="user1" />
                                &nbsp;&nbsp;
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h6 style={{ fontSize: '15px', fontWeight: '700' }}>
                                        {name}
                                    </h6>
                                    <p style={{ fontSize: '15px', color: '#525252', marginTop: '-8px', marginBottom: '0px' }}>
                                        1.4k views
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <button className="btn" style={{ backgroundColor: '#EDEEF0' }} type="button">
                                    <img style={{ marginTop: '-3px' }} alt="share" src={shareicon} />
                                    &nbsp; Share
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
