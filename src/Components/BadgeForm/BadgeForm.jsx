import React from 'react'

class BadgeForm extends React.Component {


    render() {
        return (
            <div>
                <form action="" onSubmit={this.props.handleSumbmit}>
                    <div className='form-group'>
                        <label htmlFor="">First Name</label>
                        <input onChange={this.props.handleChange} className='form-control' type="text" name='firstName' value={this.props.formValues.firstName} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Last Name</label>
                        <input onChange={this.props.handleChange} className='form-control' type="text" name='lastName' value={this.props.formValues.lastName} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Email</label>
                        <input onChange={this.props.handleChange} className='form-control' type="email" name='email' value={this.props.formValues.email} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Job title</label>
                        <input onChange={this.props.handleChange} className='form-control' type="text" name='jobTitle' value={this.props.formValues.jobTitle} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Twitter</label>
                        <input onChange={this.props.handleChange} className='form-control' type="text" name='twitter' value={this.props.formValues.twitter} />
                    </div>
                    <button type='submit' className='btn btn-primary'>Send</button>

                    {this.props.error && (
                        <p className='text-danger'>{this.props.error.message}</p>
                    )}


                </form>
            </div>
        )
    }
}
export default BadgeForm