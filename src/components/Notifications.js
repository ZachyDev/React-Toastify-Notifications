import React, { Component } from 'react'
import  { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// cofugure the toast library
toast.configure();
class Notifications extends Component {
    notify = () => {
        toast('Hello user!',{ 
            position: toast.POSITION.TOP_LEFT
        });
        toast.success('Sucess Hello user!',{ 
            position: toast.POSITION.TOP_RIGHT,
            autoClose : 8000
        });
        toast.info('Info Hello user!',{ 
            position: toast.POSITION.TOP_CENTER
        });
        toast.warning('Warning Hello user!',{
             position: toast.POSITION.BOTTOM_LEFT
            });
        toast.error('Error Hello user!',{ 
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: false
        });
        toast('Hello user!',{ 
            position: toast.POSITION.BOTTOM_RIGHT
        });
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
