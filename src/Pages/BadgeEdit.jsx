import React from 'react'
import '../Components/style/BadgeEdit.css'
import Badge from '../Components/Badge/Badge'
import BadgeForm from '../Components/BadgeForm/BadgeForm'
import api from '../api'
import PageLoading from '../Components/PageLoading/PageLoading'

class BadgesEdit extends React.Component {
    state = {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            Twitter: '',
        }
    }
    componentDidMount() {
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )

            this.setState({ loading: false, form: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleSumbmit = async (e) => {

        e.preventDefault()
        this.setState({ loading: true, error: null })
        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({ loading: false })
            this.props.history.push('/')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }
    render() {
        if (this.state.loading) {
            return < PageLoading />
        }

        return (
            <React.Fragment>
                <div className='BadgeEdit__hero'>
                    <img className="BadgeEdit__hero-image   img-fluid" src='https://static.platzi.com/media/tmp/class-files/git/platzi-badges/platzi-badges-16.CreandoNuevosBadges/src/images/platziconf-logo.svg' alt="logo" />

                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Badge name={this.state.form.firstName || 'First_Name'}
                                lastName={this.state.form.lastName || 'Last_Name'}
                                job={this.state.form.jobTitle || "Job_title"}
                                twitter={this.state.form.twitter || "Twitter"}
                                email={this.state.form.email}
                                img={'https://i.ibb.co/2qsYZL6/Tomas-tronge.jpg'}
                            />
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm
                                handleChange={this.handleChange}
                                formValues={this.state.form}
                                handleSumbmit={this.handleSumbmit}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default BadgesEdit