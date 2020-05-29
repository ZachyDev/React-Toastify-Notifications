import React, { Component } from 'react'
import  { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// cofugure the toast library
toast.configure();
class Notifications extends Component {
    notify = () => {
        toast('Hello user!',{ position: toast.POSITION.TOP_LEFT});
        toast('Hello user!',{ position: toast.POSITION.TOP_RIGHT});
        toast('Hello user!',{ position: toast.POSITION.TOP_CENTER});
        toast('Hello user!',{ position: toast.POSITION.BOTTOM_LEFT});
        toast('Hello user!',{ position: toast.POSITION.BOTTOM_CENTER});
        toast('Hello user!',{ position: toast.POSITION.BOTTOM_RIGHT});
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
