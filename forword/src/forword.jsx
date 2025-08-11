import { forwardRef } from "react"
import From from "./from";

function Forword({pro}) {

  return <> <input type="text" ref={pro} placeholder='hello' />
  <From/>
  </>
}
export default Forword;