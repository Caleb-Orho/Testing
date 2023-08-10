import logo from './Images/logo.png';
import { Link } from "react-router-dom";
import { motion, useTime, useTransform } from "framer-motion";

const Header = () => {

  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <div className="mt-20 h-20 py-5 flex justify-center items-center flex-col">
      <motion.div style={{ rotate }}>
        <img className='rounded-full object-contain max-h-[80px]'
          src={logo}
        />
      </motion.div>

      <Link className='mt-5 font-bold text-lg text-white' to='https://www.instagram.com/caleb.orh/' target="_blank"> @Caleb.Orh </Link>
    </div>
  );
};

export default Header;
