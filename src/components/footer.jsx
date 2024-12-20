import Brands from "./brands"
import FootLinks from "./footLinks"

function Footer() {
  return (
    <div className="flex gap-[10px] bg-red-950 justify-around">
      <Brands/>
      <FootLinks/>
      <div className="text-white mt-2 hover:text-red-700">created by @dev_jaytee</div>
    </div>
  )
}

export default Footer

