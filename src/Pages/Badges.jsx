
import React from 'react'
import Logo from '../Images/badge-header.svg'
import './style/Badges.css'
import BadgetList from '../Components/BadgeList/BadgestList'
import { Link } from 'react-router-dom'
import api from '../api'
import PageLoading from '../Components/PageLoading/PageLoading'
import PageError from '../Components/PageError/PageError'
class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData()

        this.intervalId = setInterval(this.fetchData, 5000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalId)
    }
    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.list()
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }


    render() {
        if (this.state.loading === true && !this.state.data) {
            return <PageLoading />
        }
        if (this.state.error) {
            return <PageError error={this.state.error} />
        }


        return (

            <React.Fragment>
                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>
                            <img src={Logo} className='Badges_conf-logo' alt="" />
                        </div>
                    </div>
                </div>
                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to={"/badges/new"} className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgetList badges={this.state.data} />

                        </div>
                    </div>
                    {this.state.loading && 'loading..'}
                </div>
            </React.Fragment>
        )

    }
}
export default Badges