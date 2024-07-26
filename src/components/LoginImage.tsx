import SignUpImage from '../assets/images/SignUp Image.png';

const LoginImage = () => {
  return (
    <div className="relative lg:h-screen flex items-center justify-center overflow-hidden sm:h-30">
      {/* Background Image */}
      <img
        src={SignUpImage}
        alt="Sign Up Background"
        className="absolute inset-0 w-full h-full lg:object-conatain sm:object-cover" // Use object-cover for full coverage
      />
        <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
      {/* Dark Blue Overlay from Bottom to Top */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-800 via-blue-900 to-transparent opacity-60"></div>

      {/* Heading in the Center */}
      <h1 className="relative text-white text-8xl font-bold font-readme z-10">
        Readme
      </h1>
    </div>
  );
};

export default LoginImage;
