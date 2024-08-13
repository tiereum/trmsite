import Lottie from "lottie-react"
import animationData from "../assets/lottie-files/server.json"

const MinerIcon = () : JSX.Element => {

  return (
        <Lottie animationData={animationData}  style={{width: "25%"}}></Lottie>
  )
}

export default MinerIcon