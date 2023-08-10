import { useState } from 'react'
import CalebImage from './assets/CalebImage.jpg'
import { motion, AnimatePresence } from "framer-motion"
import Notification from './assets/Components/Notification'
import MatrixBackground from './assets/Components/Background'
import Forms from './assets/Components/Input'

import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);


  const removeNotif = (id) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  };

  return (
    <div className="flex justify-center items-center h-screen">

      {/* <motion.button className='bg-red-200' onClick={() => navigate('/Apps')}>
        clck mm
      </motion.button> */}

      <MatrixBackground />
      <div className='gap-2 rounded-lg flex flex-col w-[90%] md:w-8/12 md:flex-row h-screen bg-[#1a0061] md:h-5/6'>

        <motion.div className='[630px]:w-full md:w-[50%] md:h-[100%] h-[50%]'>
          <img
            className='object-cover h-[100%] w-full md:rounded-l-lg md:rounded-tr-none md:rounded-br-none sm:rounded-t-lg rounded-t-lg'
            src={CalebImage} />
        </motion.div>

        <motion.div className='md:w-[50%]'>

          <motion.div className='xl:mt-20 mt-2 ml-5 mr-5 flex flex-col items-center justify-center'>
            <motion.p
              initial={{ x: -200, scale: 0.5 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.5 }}

              className='font-bold text-3xl xl:text-5xl text-white'>
              Subscribe to Inspired Insights.
            </motion.p>

            <motion.p
              initial={{ x: 200, scale: 0.5 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 0.5 }}

              className='font-normal text-lg md:mt-10 mt-2 text-white'>
              A free weekly newsletter,
              sharing my interests, experiences,
              and content not shared anywhere else.
            </motion.p>

            <Forms noti={setNotifications} />

            <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
              <AnimatePresence>
                {notifications.map((n) => (
                  <Notification removeNotif={removeNotif} {...n} key={n.id} />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

        </motion.div>



      </div>
    </div>
  )
}

export default App