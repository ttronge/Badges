import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom'
import '../style/BadgesList.css'
import Gravatar from '../Gravatar/Gravatar'


function useSearchBadges(badges) {
    const [query, setQuery] = useState('')
    const [filterBadgets, setFilterBadgets] = useState(badges)
    useMemo(
        () => {
            const result = badges.filter(badge => {
                return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
            })

            setFilterBadgets(result)
        }, [badges, query])
    return { query, setQuery, filterBadgets }
}



function BadgesList(props) {
    const badges = props.badges

    const { query, setQuery, filterBadgets } = useSearchBadges(badges)
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    if (filterBadgets.length === 0) {
        return (

            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input
                        type="text"
                        value={query}
                        className='form-control'

                        onChange={handleChange}
                    />
                </div>
                <h3>No badges were found</h3>
                <Link className='btn btn-primary' to={'/badges/new'}>Create a new badge</Link>
            </div>
        )
    }



    return (
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input
                    type="text"
                    value={query}
                    className='form-control'

                    onChange={handleChange}
                />
            </div>
            <ul className="list-unstyled">
                {filterBadgets.map(badge => {
                    return (
                        <li key={badge.id}>
                            <Link className='text-reset text-decoration-none' to={`badges/${badge.id}/`}>
                                <div className="BadgesListItem">
                                    <Gravatar
                                        className="Badge__avatar-list"
                                        email={badge.email}
                                        alt="Avatar"
                                    />
                                    <div>
                                        <strong>
                                            {badge.firstName} {badge.lastName}
                                        </strong>
                                        <br />@{badge.twitter}
                                        <br />
                                        {badge.jobTitle}
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div >
    );
}

export default BadgesList;
