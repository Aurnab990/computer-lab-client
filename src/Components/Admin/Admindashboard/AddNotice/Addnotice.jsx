import React from 'react';
import Adminsidebar from '../Adminsidebar';

const Addnotice = () => {
    const handleNotice = (e) => {
        e.preventDefault();
        const notice = e.target.notice.value;
        const title = e.target.title.value;
        const imageUrl = e.target.imageUrl.value; // New input field for image URL
        const user = { title, notice, imageUrl };

        fetch('https://department-cse.onrender.com/notice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                alert("Notice Added", data);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to add notice. Please try again.');
            });
    };

    return (
        <div className="drawer lg:drawer-open  bg-white">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col p-10 w-full">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">MENU</label>

                <h1 className='text-center text-black text-xl font-semibold mb-10'>Generate a Notice for students</h1>
                <form onSubmit={handleNotice}>
                    <textarea className="textarea textarea-secondary bg-white mb-5 text-black w-full" name='title' placeholder="title" required></textarea>
                    <textarea className="textarea textarea-secondary bg-white mb-5 text-black w-full" name='notice' placeholder="description" required></textarea>
                    <input type="text" className="input input-secondary bg-white mb-5 text-black w-full" name='imageUrl' placeholder="Image URL(optional)" />
                    <button type='submit' className='btn btn-success w-1/3 text-white'>SUBMIT</button>
                </form>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <Adminsidebar></Adminsidebar>
            </div>
        </div>
    );
};

export default Addnotice;
