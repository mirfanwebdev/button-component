import { IoIosAlert } from "react-icons/io"
import Button from "./components/Button"

function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6 h-screen ">
        {/* first button */}
        <Button
          label='primary button'
          onClick={() => alert('primary button clicked')}
          backgroundColor="primary"
          size="medium"
          tooltip="this is primary button"
          tooltipPosition="top"
        />
        {/* second button */}
        <Button
          label='danger button'
          onClick={() => alert('danger button clicked')}
          backgroundColor="danger"
          size="large"
          icon={<IoIosAlert />}
          iconPosition="left"
        />

      </div>
    </>
  )
}

export default App
