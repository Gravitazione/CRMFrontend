import { useState } from 'react';
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import LargeButton from '../../components/buttons/LargeButton';
import GoogleIcons from '../../assets/icons/flat-color-icons_google.svg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`min-h-screen w-full flex justify-center items-center`}>
      <div className={`flex flex-row rounded-lg shadow-2xl`}>
        <div className="font-normal text-center rounded-tl-lg rounded-bl-lg p-10 banner-login bg-cover bg-center">
          <div className='text-white'>
            <h3>Welcome</h3>
            <p className="text-2xl">To Dynamic Control System</p>
          </div>
        </div>
        <div className="p-10 flex flex-col items-center">
          <div className="font-normal text-center">
            <h3 className="text-primary">Hello!</h3>
            <p className="text-lg max-w-[308px]">Sign in to design your CRM system and get closer to your customers</p>
          </div>
          <div className="py-24 space-y-5">
            <div className="relative font-normal">
              <input
                type="email"
                className="border text-black border-gray text-lg rounded-xl p-2.5 pl-10 w-[410px] outline-0 placeholder:text-black"
                placeholder="example@email.com"
              />
              <MdEmail className={`text-primary absolute text-2xl left-3 top-1/2 transform -translate-y-1/2`} />
            </div>
            <div className="relative font-normal">
              <input
                type={showPassword ? 'text' : 'password'}
                className="border text-black border-gray text-lg rounded-xl p-2.5 pl-10 w-[410px] outline-0 placeholder:text-black"
                placeholder="Password"
              />
              <div
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? (
                  <MdVisibility className="text-2xl text-gray" />
                ) : (
                  <MdVisibilityOff className="text-2xl text-gray" />
                )}
              </div>
              <MdLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary text-2xl" />
            </div>
            <div className="flex flex-row justify-between items-center font-normal text-primary">
              <div className="space-x-2 flex flex-row items-center">
                <input type="checkbox" className="w-[18px] aspect-square" />
                <label htmlFor="Remember me" className="text-lg">
                  Remember me
                </label>
              </div>
              <div className="underline">
                <p className="cursor-pointer">Forgot Password?</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <LargeButton title="Sign in" onClick={() => {}} labelId={'Sign in button'} />
            <div className="divider py-2">
              <span className="text-gray font-normal">OR</span>
            </div>
            <button className={`py-5 w-full rounded-full shadow-lg`} onClick={() => {}}>
              <label htmlFor={'login with google'} className={`font-normal text-lg text-black`}>
                <div className="flex flex-row justify-center space-x-2">
                  <img src={GoogleIcons} alt="" />
                  <p>Sign in with Google</p>
                </div>
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
