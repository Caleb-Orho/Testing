import { useState } from 'react'
import AddUser from './AddUser'
import { FiCheckSquare, FiX } from "react-icons/fi";
import { motion } from "framer-motion"


const Forms = ({ noti }) => {

    const [emailError, setEmailError] = useState(false);
    const [hovering, setHovering] = useState(false);
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = async (e) => {
        if (!form.name || !form.email) {
            noti((pv) => [generateRandomNotif({ text: "Email And Name Cannot Be Empty" }), ...pv]);
            e.preventDefault();
            // alert("Please fill in all fields before submitting.");
            return;
        } else if (emailError === true) {
            noti((pv) => [generateRandomNotif({ text: "Please enter a valid email address" }), ...pv]);
            e.preventDefault();
            // alert("Please fill in all fields before submitting.");
            return;
        }


        AddUser(form.email, form.name);

        e.preventDefault();
        setForm({
            name: "",
            email: "",
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });

        // console.log(name);

        if (name === 'email') {
            const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;

            if (pattern.test(value) === true)
                setEmailError(false);
            else
                setEmailError(true);
        }
    };

    const handleHover = () => {
        if (emailError === true || (!form.name || !form.email))
            setHovering(!hovering);
    };

    const [form, setForm] = useState({
        name: "",
        email: "",
    });

    return (
        <div className='w-full'>
            {subscribed ? (
                <motion.div
                    layout
                    initial={{ y: -15, scale: 0.95 }}
                    animate={{ y: 0, scale: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="p-2 flex items-start rounded gap-2 text-xs font-medium shadow-lg text-white bg-indigo-500 pointer-events-auto"
                >
                    <FiCheckSquare className=" mt-0.5" />
                    <span>Thanks for subscribing</span>
                    <button onClick={() => setSubscribed(!subscribed)} className="ml-auto mt-0.5">
                        <FiX />
                    </button>
                </motion.div>
            )
                : ('')
            }
            <form onSubmit={handleSubmit} className={`flex lg:flex-col flex-row lg:gap-0 gap-2 md:mt-10 mt-5 w-[100%] ${subscribed ? 'blur-md' : ''}`}>



                <motion.input
                    initial={{ x: -200, scale: 0.5 }}
                    animate={{ x: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}

                    value={form.name}
                    onChange={handleChange}
                    type="text" name="name"
                    placeholder="Your name"
                    className='px-4 py-3 w-full text-black rounded-lg font-medium outline-none' />

                <motion.input
                    initial={{ x: 200, scale: 0.5 }}
                    animate={{ x: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}

                    value={form.email}
                    onChange={handleChange}
                    type="text" name="email"
                    placeholder="Your email"
                    className={` md:mt-10 px-4 py-3 w-full text-black rounded-lg font-medium outline-none ${emailError ? 'focus:border-4 border-2 border-rose-600 text-rose-600 ' : 'bg-white'}`} />
                {/* className={` ${emailError ? 'hover:px-' + slide + '%': 'px-0'} `} */}


            </form>

            <div class='opposite-direction'>
                    <motion.button
                        initial={{ x: -200, scale: 0.5 }}
                        animate={{ x: hovering ? 200 : 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileTap={{ scale: 1.5 }}
                        whileHover={{ scale: 1.1 }}
                        onMouseEnter={handleHover}
                        // onMouseLeave={handleHover}

                        type='submit'
                        className='md:mt-10 mt-3 bg-black py-2 px-3 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-red-100'
                    >
                        Join newsletter
                        {/* {loading ? "Sending..." : "Send"} */}
                    </motion.button>
                </div>
        </div>

    );
}

export default Forms;

const generateRandomNotif = ({ text }) => {
    const names = [
        "Email And Name Cannot Be Empty",
    ];

    const randomIndex = Math.floor(Math.random() * names.length);

    const data = {
        id: Math.random(),
        text: text,
    };

    return data;
};