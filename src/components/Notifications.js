import React, { Component } from 'react'
import  { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// cofugure the toast library
toast.configure();
class Notifications extends Component {
    notify = () => {
        toast('Hello user!');
    }
    render() {
        return (
            <div>
                <button onClick = { this.notify }>Notify!</button>
            </div>
        )
    }
}

export default Notifications
