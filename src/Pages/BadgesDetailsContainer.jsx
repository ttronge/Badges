import React from 'react'
import BadgeDetails from './BadgeDetails'
import api from '../api'
import PageLoading from '../Components/PageLoading/PageLoading'
import PageError from '../Components/PageError/PageError'

class BadgesDetailsContainer extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false

    }

    componentDidMount() {
        this.fetchData()


    }
    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.read(this.props.match.params.badgeId)

            this.setState({ data: data, loading: false })

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }
    handleOpenModal = e => {
        this.setState({ modalIsOpen: true })
    }
    handleCloseModal = e => {
        this.setState({ modalIsOpen: false })
    }
    handleDeleteBadge = async e => {
        this.setState({ loading: true, error: null })
        try {
            await api.badges.remove(this.props.match.params.badgeId)
            this.setState({ loading: false })
            this.props.history.push('/')
        }
        catch (error) {
            this.setState({ loading: false, error: error })
        }
    }
    render() {
        if (this.state.loading) {
            return < PageLoading />
        }
        if (this.state.error) {
            return <PageError error={this.state.error} />
        }
        return (
            <BadgeDetails
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handleDeleteBadge}
                badge={this.state.data}
            />
        )
    }
}

export default BadgesDetailsContainer