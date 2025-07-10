
const CommonButton = () => {
  return (
    <div>
               {/* CTA Button */}
          <div className="">
            <button
              className="text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition cursor-pointer"
              style={{
                backgroundImage: `url('/images/bgbutton.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              Request A Quote
            </button>
          </div>
    </div>
  )
}

export default CommonButton